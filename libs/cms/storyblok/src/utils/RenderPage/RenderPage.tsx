import React from 'react';
import StoryblokReact from 'storyblok-react';

import { ContentPage } from '../../pages/ContentPage';
import type { ContentPageStoryblok } from '../../types';
import { Placeholder } from '../Placeholder';

export type Components = ContentPageStoryblok;

const ComponentsConnectors = {
  ContentPage,
};

type RenderPageProps = {
  content: Components;
};

export function RenderPage({ content }: RenderPageProps) {
  if (typeof content === 'undefined') {
    return <Placeholder componentName="content" />;
  }

  if (typeof ComponentsConnectors[content.component] === 'undefined') {
    return <Placeholder componentName={content.component} />;
  }

  const Component = ComponentsConnectors[content.component];

  return (
    // @ts-expect-error storyblok-react needs an update
    <StoryblokReact
      key={content._uid}
      // eslint-disable-next-line no-underscore-dangle
      content={content}
    >
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...content}
      />
    </StoryblokReact>
  );
}
