import { logger } from '@ring/logger';
import fs from 'fs';

type WriteTailwindConfigFile = {
  content: { [key: string]: unknown };
};

export async function writeTailwindConfigFile({ content }: WriteTailwindConfigFile) {
  await fs.promises.mkdir('./src', { recursive: true }).catch(logger.error);
  fs.writeFileSync(
    './src/tailwindConfig.ts',
    `// THIS FILE IS AUTOREGENERATED, DO NOT MANUALLY EDIT IT
export const tailwindConfig = ${JSON.stringify(content)}`,
  );
}
