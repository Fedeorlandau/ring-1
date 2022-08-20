import type { IconNameType } from '@ring/contracts';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import React from 'react';
import { cn } from 'src/utils';

export type IconProps = {
  color?: 'light' | 'dark';
  name: IconNameType;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'solid';
};

export function Icon({ color, name, variant = 'outline', size = 'md' }: IconProps) {
  let Component: ComponentType<{ className: string }>;

  switch (variant) {
    case 'outline':
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      Component = dynamic(() => import('@heroicons/react/outline').then((module) => module[name]));
      break;

    // case 'solid':
    // Component = dynamic(() => import('@heroicons/react/solid').then((module) => module[name]));
    // break;

    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`The icon with name "${name}" has an invalid variant.`);
  }

  return (
    <Component
      className={cn('flex-shrink-0', {
        'text-gray-600': color === 'dark',
        'text-gray-400': color === 'light',
        'h-5 w-5': size === 'sm',
        'h-6 w-6': size === 'md',
        'h-7 w-7': size === 'lg',
      })}
    />
  );
}
