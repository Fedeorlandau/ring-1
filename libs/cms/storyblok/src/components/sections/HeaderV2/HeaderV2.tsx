import { HeaderV2 as HeaderV2UI } from '@ring/ui-tailwind';
import type { ReactElement } from 'react';
import React from 'react';

import type { HeaderV2Storyblok } from '../../../types';
import type { StoryblokLink } from '../../../utils/parseLink';
import { parseLink } from '../../../utils/parseLink';

type HeaderV2Props = HeaderV2Storyblok;

export function HeaderV2({ title, navigation }: HeaderV2Props): ReactElement {
  const navigationParsed = navigation
    ? navigation.map((link) => ({
        title: link.title,
        href: parseLink(link.link as StoryblokLink),
      }))
    : [];

  return <HeaderV2UI navigation={navigationParsed} title={title} />;
}
