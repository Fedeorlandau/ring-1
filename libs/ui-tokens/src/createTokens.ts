import { buttonParser } from 'src/components/elements/Button/buttonParser';
import { textParser } from 'src/components/elements/Text/textParser';
import figmaDesignTokens from 'src/figmaDesignTokens.json';
import { validateTokens } from 'src/utils/validateTokens';
import { writeThemeFile } from 'src/utils/writeThemeFile';

import { paletteParser } from './parsers/paletteParser';
import { writeTailwindConfigFile } from './utils/writeTailwindConfigFile';

/* eslint-disable-next-line no-console */
createTokens().catch(console.error);

export async function createTokens() {
  validateTokens({ figmaDesignTokens });

  const theme = {
    elements: {
      Button: buttonParser(figmaDesignTokens.Button),
      // eslint-disable @typescript-eslint/no-unsafe-argument
      Text: textParser(figmaDesignTokens.Text),
    },
  };

  await writeThemeFile({ content: theme });

  const tailwindConfig = {
    colors: paletteParser({ palette: figmaDesignTokens.global.palette, colors: figmaDesignTokens.global.colors }),
  };

  await writeTailwindConfigFile({ content: tailwindConfig });
}
