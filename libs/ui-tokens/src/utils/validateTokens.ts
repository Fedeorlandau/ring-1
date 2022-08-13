import { buttonSchema } from 'src/components/elements/Button/buttonSchema';
import { paragraphSchema } from 'src/components/elements/Paragraph/paragraphSchema';
import { tailwindSchema } from 'src/schema/tailwindSchema';
import { z } from 'zod';

type ValidateTokens = {
  figmaDesignTokens: { [key: string]: unknown };
};

export function validateTokens({ figmaDesignTokens }: ValidateTokens) {
  const schema = z.object({
    global: tailwindSchema,
    Button: buttonSchema,
    Paragraph: paragraphSchema,
  });

  schema.parse(figmaDesignTokens);
}
