import { DefaultLayout } from '@ring/ui-tailwind';
import type { ReactNode } from 'react';
import React from 'react';
import StoryblokReact from 'storyblok-react';

import type { DefaultLayoutStoryblok } from '../../types';

export type Layouts = DefaultLayoutStoryblok & { name: string };

const Layouts = {
  DefaultLayout,
};

type RenderLayoutProps = {
  layout: Layouts;
  children: ReactNode;
};

export function RenderLayout({ layout, children }: RenderLayoutProps) {
  // @ts-expect-error instead of "content.component" (as defined by Storyblok), it's "content.name"
  const Layout = Layouts[layout?.name || 'DefaultLayout'];

  return (
    // @ts-expect-error storyblok-react needs an update
    <StoryblokReact
      key={layout._uid || 'DefaultLayout'}
      // eslint-disable-next-line no-underscore-dangle
      content={layout}
    >
      <Layout
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...layout}
      >
        {children}
      </Layout>
    </StoryblokReact>
  );
}
