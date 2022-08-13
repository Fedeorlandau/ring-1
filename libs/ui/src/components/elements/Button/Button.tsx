import type { FunctionComponent, ReactNode } from 'react';
import React from 'react';
import { useTheme } from 'src/foundation/theme';
import { cn } from 'src/utils';

export type ButtonProps = {
  children: ReactNode;
  href: string;
  // IconStart?: FunctionComponent<{ className: string }>;
  IconEnd?: FunctionComponent<{ className: string }>;
  variant: 'primary' | 'secondary';
};

export function Button({ children, href, /* IconStart, */ IconEnd, variant }: ButtonProps) {
  const theme = useTheme();

  const iconClassName = cn('h-5 w-5');

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
      {IconEnd && <IconEnd className={iconClassName} />}
    </a>
  );
}
