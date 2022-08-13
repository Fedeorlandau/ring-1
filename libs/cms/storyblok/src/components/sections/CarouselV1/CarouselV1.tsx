import { CarouselV1 as CarouselV1UI } from '@ring/ui-tailwind';
import type { ReactElement } from 'react';
import React from 'react';

import type { CarouselV1Storyblok } from '../../../types';
import { parseImage } from '../../../utils/parseImage';

type CarouselV1Props = CarouselV1Storyblok;

export function CarouselV1({ images }: CarouselV1Props): ReactElement {
  if (!images || images?.length === 0) {
    return <p>Please add images to the carousel</p>;
  }

  return <CarouselV1UI images={images.map((image) => parseImage(image))} />;
}
