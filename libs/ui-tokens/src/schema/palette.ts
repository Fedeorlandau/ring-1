import { z } from 'zod';

const Color = z.object({
  value: z.string().regex(/{colors.(.*?)}/),
  type: z.string().regex(/^(color)$/),
});

export const palette = z.object({
  black: Color,
  white: Color,
  neutral: z.object({
    main: Color,
    light: Color,
    dark: Color,
    text: Color,
  }),
  primary: z.object({
    main: Color,
    light: Color,
    dark: Color,
    text: Color,
  }),
  secondary: z.object({
    main: Color,
    light: Color,
    dark: Color,
    text: Color,
  }),
});

export type Palette = z.infer<typeof palette>;
