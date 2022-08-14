import type * as OutlineIcons from '@heroicons/react/outline';
import type * as SolidIcons from '@heroicons/react/solid';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import React from 'react';
import { cn } from 'src/utils';

export type Icons = keyof typeof SolidIcons | keyof typeof OutlineIcons;

export type IconProps = {
  color?: 'light' | 'dark';
  name: Icons;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'solid';
};

export function Icon({ color, name, variant = 'outline', size = 'md' }: IconProps) {
  let Component: ComponentType<{ className: string }>;

  switch (variant) {
    case 'outline':
      Component = dynamic(() => import('@heroicons/react/outline').then((module) => module[name]));
      break;

    // case 'solid':
    // Component = dynamic(() => import('@heroicons/react/solid').then((module) => module[name]));
    // break;

    default:
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
