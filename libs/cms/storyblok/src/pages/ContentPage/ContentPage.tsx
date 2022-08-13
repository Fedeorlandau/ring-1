import type { ReactElement } from 'react';
import React from 'react';

import type { ContentPageStoryblok } from '../../types';
import { RenderSection } from '../../utils/RenderSection';

type ContentPageProps = ContentPageStoryblok;

export function ContentPage({ sections }: ContentPageProps): ReactElement | null {
  // @ts-expect-error TODO: sync sections with storyblok
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{sections ? sections.map((content) => <RenderSection key={content._uid} content={content} />) : null}</>;
}
