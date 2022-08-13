import { HeaderV1 as HeaderV1UI } from '@ring/ui-tailwind';
import type { ReactElement } from 'react';
import React from 'react';

import type { HeaderV1Storyblok } from '../../../types';
import { parseImage } from '../../../utils/parseImage';
import { parseLink } from '../../../utils/parseLink';

type HeaderV1Props = HeaderV1Storyblok;

export function HeaderV1({
  title,
  logo,
  navigation,
  primaryButtonLink,
  primaryButtonTitle,
  secondaryButtonLink,
  secondaryButtonTitle,
}: HeaderV1Props): ReactElement {
  const navigationParsed = navigation
    ? navigation.map((link) => ({
        title: link.title,
        link: parseLink(link.link),
      }))
    : [];

  return (
    <HeaderV1UI
      logo={parseImage(logo)}
      navigation={navigationParsed}
      primaryButtonLink={parseLink(primaryButtonLink)}
      primaryButtonTitle={primaryButtonTitle}
      secondaryButtonLink={parseLink(secondaryButtonLink)}
      secondaryButtonTitle={secondaryButtonTitle}
      title={title}
    />
  );
}
