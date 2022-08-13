import { HeroV1 as HeroV1UI } from '@ring/ui-tailwind';
import type { ReactElement } from 'react';
import React from 'react';

import type { HeroV1Storyblok } from '../../../types';
import { parseImage } from '../../../utils/parseImage';
import { parseLink } from '../../../utils/parseLink';

type HeroV1Props = HeroV1Storyblok;

export function HeroV1({
  title,
  logo,
  navigation,
  titleFirstRow,
  titleSecondRow,
  subtitle,
  buttonPrimaryLink,
  buttonPrimaryText,
  buttonSecondaryLink,
  buttonSecondaryText,
  image,
}: HeroV1Props): ReactElement {
  return (
    <HeroV1UI
      buttonPrimaryLink={buttonPrimaryLink ? parseLink(buttonPrimaryLink) : undefined}
      buttonPrimaryText={buttonPrimaryText}
      buttonSecondaryLink={buttonSecondaryLink ? parseLink(buttonSecondaryLink) : undefined}
      buttonSecondaryText={buttonSecondaryText}
      image={parseImage(image)}
      logo={parseImage(logo)}
      navigation={navigation ? navigation.map((item) => ({ ...item, link: parseLink(item.link) })) : undefined}
      subtitle={subtitle}
      title={title}
      titleFirstRow={titleFirstRow}
      titleSecondRow={titleSecondRow}
    />
  );
}
