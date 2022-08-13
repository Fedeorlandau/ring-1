import type { ReactNode } from 'react';
import React from 'react';
import { useTheme } from 'src/foundation/theme';
import { cn } from 'src/utils';

export type ParagraphProps = {
  children: string | ReactNode;
  fontWeight?: 'extrabold';
  variant: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function Paragraph({ children, variant, fontWeight }: ParagraphProps) {
  const theme = useTheme();

  return (
    <p
      className={cn({
        'font-extrabold': fontWeight === 'extrabold',
        [theme.elements.Paragraph.xs]: variant === 'xs',
        [theme.elements.Paragraph.sm]: variant === 'sm',
        [theme.elements.Paragraph.md]: variant === 'md',
        [theme.elements.Paragraph.lg]: variant === 'lg',
        [theme.elements.Paragraph.xl]: variant === 'xl',
      })}
    >
      {children}
    </p>
  );
}
