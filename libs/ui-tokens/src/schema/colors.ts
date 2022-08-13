import { z } from 'zod';

const Color = z.object({
  value: z.string().startsWith('#'),
  type: z.string().regex(/^(color)$/),
});

export const colors = z.object({
  black: Color,
  white: Color,
  slate: z.object({
    '50': Color,
    '100': Color,
    '200': Color,
    '300': Color,
    '400': Color,
    '500': Color,
    '600': Color,
    '700': Color,
    '800': Color,
    '900': Color,
  }),
  gray: z.object({
    '50': Color,
    '100': Color,
    '200': Color,
    '300': Color,
    '400': Color,
    '500': Color,
    '600': Color,
    '700': Color,
    '800': Color,
    '900': Color,
  }),
  red: z.object({
    '50': Color,
    '100': Color,
    '200': Color,
    '300': Color,
    '400': Color,
    '500': Color,
    '600': Color,
    '700': Color,
    '800': Color,
    '900': Color,
  }),
});

export type Colors = z.infer<typeof colors>;
