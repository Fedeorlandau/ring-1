import type { GlobalConfigStoryblok, SectionsProps, Story } from '@ring/cms';
import type { ParsedUrlQuery } from 'querystring';

import { attachContentToStory } from './attachContentToStory';
import { getConfig } from './getConfig';
import { getSectionsData } from './getSectionsData';
import { getSlug } from './getSlug';
import { getStoryBySlug } from './getStoryBySlug';

type GetStory = {
  params: ParsedUrlQuery;
  preview: boolean;
  locale?: string;
};

export async function getStory({ params, preview, locale }: GetStory): Promise<{
  story: Story;
  sections: SectionsProps;
  config: GlobalConfigStoryblok;
}> {
  const slug = getSlug(params);

  const productSlug = params.slug && params.slug[0] === 'p' ? params.slug[1] : undefined;

  const [story, config] = await Promise.all([
    getStoryBySlug({ slug, preview, locale }),
    getConfig({ locale, preview }),
  ]);

  const sections: Array<string> = [
    ...(story.content.sections ? story.content.sections.map((section: SectionsProps) => section.component) : []),
    // ...config.content.footer.map((section: SectionsProps) => section.component),
    // ...config.content.header.map((section: SectionsProps) => section.component),
  ];
  const sectionsWithData = await getSectionsData({ sections, productSlug });
  const storyContent = attachContentToStory({ content: story.content, sections: sectionsWithData });
  // const configContent = attachContentToStory({ content: config.content, sections: sectionsWithData });

  return {
    story: {
      ...story,
      content: storyContent,
    },
    sections: sectionsWithData,
    config,
  };
}
