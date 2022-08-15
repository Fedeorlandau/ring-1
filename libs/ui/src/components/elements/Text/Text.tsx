import type { ReactNode } from 'react';
import React from 'react';
import { useTheme } from 'src/foundation/theme';
import { cn } from 'src/utils';

export type TextProps = {
  children: string | ReactNode;
  fontWeight?: 'extrabold';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  uppercase?: boolean;
  variant: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
};

export function Text({ children, variant, fontWeight, tag, uppercase }: TextProps) {
  const theme = useTheme();

  const Tag = tag || 'p';

  return (
    <Tag
      className={cn({
        'font-extrabold': fontWeight === 'extrabold',
        uppercase,
        [theme.elements.Text.xs]: variant === 'xs',
        [theme.elements.Text.sm]: variant === 'sm',
        [theme.elements.Text.md]: variant === 'md',
        [theme.elements.Text.lg]: variant === 'lg',
        [theme.elements.Text.xl]: variant === 'xl',
        [theme.elements.Text['2xl']]: variant === '2xl',
        [theme.elements.Text['3xl']]: variant === '3xl',
        [theme.elements.Text['4xl']]: variant === '4xl',
      })}
    >
      {children}
    </Tag>
  );
}
