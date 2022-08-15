import type { ReactNode } from 'react';
import React from 'react';
import { useTheme } from 'src/foundation/theme';
import { cn } from 'src/utils';

export type TextProps = {
  children: string | ReactNode;
  fontWeight?: 'extrabold';
  variant: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function Text({ children, variant, fontWeight }: TextProps) {
  const theme = useTheme();

  return (
    <p
      className={cn({
        'font-extrabold': fontWeight === 'extrabold',
        [theme.elements.Text.xs]: variant === 'xs',
        [theme.elements.Text.sm]: variant === 'sm',
        [theme.elements.Text.md]: variant === 'md',
        [theme.elements.Text.lg]: variant === 'lg',
        [theme.elements.Text.xl]: variant === 'xl',
      })}
    >
      {children}
    </p>
  );
}
