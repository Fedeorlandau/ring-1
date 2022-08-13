import { logger } from '@ring/logger';
import fs from 'fs';

type WriteThemeFile = {
  content: { [key: string]: unknown };
};

export async function writeThemeFile({ content }: WriteThemeFile) {
  await fs.promises.mkdir('./src', { recursive: true }).catch(logger.error);
  fs.writeFileSync(
    './src/theme.ts',
    `// THIS FILE IS AUTOREGENERATED, DO NOT MANUALLY EDIT IT
export const theme = ${JSON.stringify(content)}`,
  );
}
