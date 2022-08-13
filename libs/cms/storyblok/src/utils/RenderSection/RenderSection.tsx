import type { ReactElement } from 'react';
import React from 'react';
import StoryblokReact from 'storyblok-react';

import { CardsV1 } from '../../components/sections/CardsV1';
import { CarouselV1 } from '../../components/sections/CarouselV1';
import { FeaturesV1 } from '../../components/sections/FeaturesV1';
import { HeaderV1 } from '../../components/sections/HeaderV1';
import { HeaderV2 } from '../../components/sections/HeaderV2';
import { HeroV1 } from '../../components/sections/HeroV1';
import { HeroV2 } from '../../components/sections/HeroV2';
import { ProductDetailV3 } from '../../components/sections/ProductDetailV3';
import { ProductListV1 } from '../../components/sections/ProductListV1';
import { VideoV1 } from '../../components/sections/VideoV1';
import type {
  CardsV1Storyblok,
  CarouselV1Storyblok,
  FeaturesV1Storyblok,
  HeaderV1Storyblok,
  HeaderV2Storyblok,
  HeroV1Storyblok,
  HeroV2Storyblok,
  ProductDetailV3Storyblok,
  ProductListV1Storyblok,
  VideoV1Storyblok,
} from '../../types';
import { Placeholder } from '../Placeholder';

export type SectionsProps =
  | CardsV1Storyblok
  | CarouselV1Storyblok
  | HeroV1Storyblok
  | HeroV2Storyblok
  | HeaderV1Storyblok
  | HeaderV2Storyblok
  | FeaturesV1Storyblok
  | ProductDetailV3Storyblok
  | ProductListV1Storyblok
  | VideoV1Storyblok;

const Sections = {
  CardsV1,
  CarouselV1,
  HeroV1,
  HeroV2,
  FeaturesV1,
  HeaderV1,
  HeaderV2,
  ProductDetailV3,
  ProductListV1,
  VideoV1,
};

type RenderSectionProps = {
  content: SectionsProps;
};

export function RenderSection({ content }: RenderSectionProps): ReactElement {
  if (typeof content === 'undefined') {
    return <Placeholder componentName="content" />;
  }

  if (typeof Sections[content.component] === 'undefined') {
    return <Placeholder componentName={content.component} />;
  }

  const Component = Sections[content.component];

  return (
    // @ts-expect-error storyblok-react needs an update
    <StoryblokReact
      key={content._uid}
      // eslint-disable-next-line no-underscore-dangle
      content={content}
    >
      {/* @ts-expect-error multiple components */}
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...content}
      />
    </StoryblokReact>
  );
}
