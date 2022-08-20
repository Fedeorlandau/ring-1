import type { Sections } from '@ring/contracts';
import { logger } from '@ring/logger';
import React from 'react';
import { BlogPostListV1, FeaturesV1, HeroV1, NavbarV1, ProductListV1 } from 'src/components/sections';

type RenderSectionsProps = {
  sections: Sections;
};

const components = {
  BlogPostListV1,
  FeaturesV1,
  HeroV1,
  NavbarV1,
  ProductListV1,
};

export function RenderSections({ sections }: RenderSectionsProps) {
  return (
    <>
      {sections.map((section) => {
        const Component = components[section.name];

        if (!Component) {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          logger.error(`Unknown component ${section.name}`);
          return null;
        }

        return (
          // @ts-expect-error one day I will fix this
          <Component
            key={section.id}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...section.props}
          />
        );
      })}
    </>
  );
}
