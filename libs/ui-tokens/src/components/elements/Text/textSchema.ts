import { compositionTokenRegex, fillTokenRegex, typographyTokenRegex } from 'src/schema/tokens';
import { z } from 'zod';

const textTokens = z.object({
  value: z.object({
    typography: typographyTokenRegex,
    fill: fillTokenRegex,
  }),
  type: compositionTokenRegex,
});
export type TextTokens = z.infer<typeof textTokens>;

const variant = z.object({
  mobile: textTokens,
  tablet: textTokens,
  desktop: textTokens,
});
export type TextVariant = z.infer<typeof variant>;

export const textSchema = z.object({
  xs: variant,
  sm: variant,
  md: variant,
  lg: variant,
  xl: variant,
});
export type Text = z.infer<typeof textSchema>;
