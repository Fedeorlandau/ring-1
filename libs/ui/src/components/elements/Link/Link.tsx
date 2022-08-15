import LinkNext from 'next/link';
import React from 'react';
import { cn } from 'src/utils';

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: 'gray-500' | 'gray-700' | 'gray-900';
};

export function Link({ children, href, variant }: LinkProps) {
  return (
    <LinkNext href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={cn({
          'text-base font-medium text-gray-500 hover:text-gray-900': variant === 'gray-500',
          'text-base font-medium text-gray-900 hover:text-gray-700': variant === 'gray-900',
          'block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900':
            variant === 'gray-700',
        })}
      >
        {children}
      </a>
    </LinkNext>
  );
}
