import { CardsV1 as CardsV1UI } from '@ring/ui-tailwind';
import type { ReactElement } from 'react';
import React from 'react';

import type { CardsV1Storyblok } from '../../../types';
import { parseImage } from '../../../utils/parseImage';
import { parseLink } from '../../../utils/parseLink';

type CardsV1Props = CardsV1Storyblok;

export function CardsV1({ cards }: CardsV1Props): ReactElement {
  return (
    <CardsV1UI
      cards={cards.map((card) => ({
        title: card.title,
        description: card.description,
        buttonTitle: card.buttonTitle,
        buttonLink: parseLink(card.buttonLink),
        image: parseImage(card.image),
      }))}
    />
  );
}
