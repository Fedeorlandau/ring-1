import { compositionTokenRegex, fillTokenRegex, typographyTokenRegex } from 'src/schema/tokens';
import { z } from 'zod';

const paragraphTokens = z.object({
  value: z.object({
    typography: typographyTokenRegex,
    fill: fillTokenRegex,
  }),
  type: compositionTokenRegex,
});
export type ParagraphTokens = z.infer<typeof paragraphTokens>;

const variant = z.object({
  mobile: paragraphTokens,
  tablet: paragraphTokens,
  desktop: paragraphTokens,
});
export type ParagraphVariant = z.infer<typeof variant>;

export const paragraphSchema = z.object({
  xs: variant,
  sm: variant,
  md: variant,
  lg: variant,
  xl: variant,
});
export type Paragraph = z.infer<typeof paragraphSchema>;
