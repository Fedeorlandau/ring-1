import type { ReactNode } from 'react';
import React from 'react';
import { cn } from 'src/utils';

export type HeadingProps = {
  children: string | ReactNode;
  variant: 'FeaturesV1A' | 'FeaturesV1B' | 'ProductListV1A' | 'ProductListV1B';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Heading({ children, variant, tag }: HeadingProps) {
  const Tag = tag || mapping[variant];
  return (
    <Tag
      className={cn({
        'text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl': variant === 'FeaturesV1A',
        'text-base font-semibold uppercase tracking-wide text-indigo-600': variant === 'FeaturesV1B',
        'text-2xl font-extrabold tracking-tight text-gray-900': variant === 'ProductListV1A',
        'text-sm text-gray-700': variant === 'ProductListV1B',
      })}
    >
      {children}
    </Tag>
  );
}

type Mapping = {
  [key in HeadingProps['variant']]: 'h1' | 'h2' | 'h3';
};
const mapping: Mapping = {
  FeaturesV1A: 'h1',
  FeaturesV1B: 'h2',
  ProductListV1A: 'h2',
  ProductListV1B: 'h3',
};
