import type { ReactElement } from 'react';
import React from 'react';

import type { HeroV2Storyblok } from '../../../types';

export type HeroV2Props = HeroV2Storyblok;

export function HeroV2(): ReactElement {
  return <>HeroV2</>;
  // return (
  //   <HeroV2UI
  //     buttonLink={parseLink(buttonLink as StoryblokLink)}
  //     buttonText={buttonText}
  //     image={image ? { src: image.filename, alt: image.alt || image.name } : undefined}
  //     subtitle={subtitle}
  //     title={title}
  //   />
  // );
}
