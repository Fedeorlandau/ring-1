import type { ReactNode } from 'react';
import React from 'react';
import { useTheme } from 'src/foundation/theme';
import { cn } from 'src/utils';

import type { IconProps } from '../Icon';
import { Icon } from '../Icon';

export type ButtonProps = {
  children: ReactNode;
  href: string;
  // IconStart?: FunctionComponent<{ className: string }>;
  iconEnd?: IconProps;
  variant: 'primary' | 'secondary';
};

export function Button({ children, href, /* IconStart, */ iconEnd, variant }: ButtonProps) {
  const theme = useTheme();

  return (
    <a
      className={cn('inline-flex items-center text-center', {
        [theme.elements.Button.primary.button]: variant === 'primary',
        [theme.elements.Button.primary.text]: variant === 'primary',
        [theme.elements.Button.secondary.button]: variant === 'secondary',
        [theme.elements.Button.secondary.text]: variant === 'secondary',
      })}
      href={href}
    >
      {/* {IconStart && <IconStart className={iconClassName} />} */}
      {children}
      {iconEnd && <Icon color={iconEnd.color} name={iconEnd.name} size={iconEnd.size} variant={iconEnd.variant} />}
    </a>
  );
}
