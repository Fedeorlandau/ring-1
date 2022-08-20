import type { CMSSections } from '@ring/contracts';
import { logger } from '@ring/logger';
import { FeaturesV1CMS } from 'src/components/sections/FeaturesV1CMS';
import { HeroV1CMS } from 'src/components/sections/HeroV1CMS/HeroV1CMS';
import { ProductListV1CMS } from 'src/components/sections/ProductListV1CMS';
import type { TypePageFields } from 'src/types/generated/contentful';

import { getClient } from '../getClient';

export async function getSections(slug: string): Promise<CMSSections> {
  const contentful = getClient();

  const entries = await contentful.getEntries<TypePageFields>({
    content_type: 'Page',
    include: 10,
    limit: 2,
    'fields.slug': slug,
    locale: 'en',
  });

  if (entries.items.length === 0) {
    logger.info(`The slug ${slug} doesn't exists`);
    return [];
  }

  const { fields } = entries.items[0];

  const sections = fields.sections.map((section) => {
    // @ts-expect-error don't want to fix this now
    switch (section.sys.contentType.sys.id) {
      case 'FeaturesV1':
        // @ts-expect-error don't want to fix this now
        return FeaturesV1CMS(section);

      case 'HeroV1':
        // @ts-expect-error don't want to fix this now
        return HeroV1CMS(section);

      case 'ProductListV1':
        // @ts-expect-error don't want to fix this now
        return ProductListV1CMS(section);

      default:
        // @ts-expect-error don't want to fix this now
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`The section ${section.sys.contentType.sys.id} is not defined`);
    }
  });

  return sections;
}
