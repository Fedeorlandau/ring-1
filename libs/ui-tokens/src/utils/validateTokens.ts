import { buttonSchema } from 'src/components/elements/Button/buttonSchema';
import { textSchema } from 'src/components/elements/Text/textSchema';
import { tailwindSchema } from 'src/schema/tailwindSchema';
import { z } from 'zod';

type ValidateTokens = {
  figmaDesignTokens: { [key: string]: unknown };
};

export function validateTokens({ figmaDesignTokens }: ValidateTokens) {
  const schema = z.object({
    global: tailwindSchema,
    Button: buttonSchema,
    Text: textSchema,
  });

  schema.parse(figmaDesignTokens);
}
