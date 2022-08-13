import { logger } from '@ring/logger';
import React from 'react';
import type {
  BlogPostListV1Section,
  FeaturesV1Section,
  HeroV1Section,
  NavbarV1Section,
  ProductListV1Section,
} from 'src/components/sections';
import { BlogPostListV1, FeaturesV1, HeroV1, NavbarV1, ProductListV1 } from 'src/components/sections';

type RenderSectionsProps = {
  sections: UISections;
};

export type UISections = Array<
  BlogPostListV1Section | FeaturesV1Section | HeroV1Section | NavbarV1Section | ProductListV1Section
>;

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
          logger.error(`Unknown component ${section.name}`);
          return null;
        }

        return (
          // @ts-expect-error ts can't infer the type of props
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
