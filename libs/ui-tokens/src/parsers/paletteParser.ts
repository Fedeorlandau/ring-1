import get from 'lodash.get';
import type { Colors } from 'src/schema/colors';
import type { Palette } from 'src/schema/palette';

import { removeCurlyBracesFromString } from './removeCurlyBracesFromString';

export type PaletteParser = {
  colors: Colors;
  palette: Palette;
};
export function paletteParser({ colors, palette }: PaletteParser) {
  return {
    black: colorParser({ value: palette.black.value, colors }),
    white: colorParser({ value: palette.white.value, colors }),
    neutral: {
      main: colorParser({ value: palette.neutral.main.value, colors }),
      light: colorParser({ value: palette.neutral.light.value, colors }),
      dark: colorParser({ value: palette.neutral.dark.value, colors }),
      text: colorParser({ value: palette.neutral.text.value, colors }),
    },
    primary: {
      main: colorParser({ value: palette.primary.main.value, colors }),
      light: colorParser({ value: palette.primary.light.value, colors }),
      dark: colorParser({ value: palette.primary.dark.value, colors }),
      text: colorParser({ value: palette.primary.text.value, colors }),
    },
    secondary: {
      main: colorParser({ value: palette.secondary.main.value, colors }),
      light: colorParser({ value: palette.secondary.light.value, colors }),
      dark: colorParser({ value: palette.secondary.dark.value, colors }),
      text: colorParser({ value: palette.secondary.text.value, colors }),
    },
  };
}

type ColorParser = {
  colors: Colors;
  value: string;
};
function colorParser({ colors, value }: ColorParser) {
  const valueWithoutCurlyBraces = removeCurlyBracesFromString(value);

  const path = `${valueWithoutCurlyBraces.replace('colors.', '')}.value`;

  const hexValue = get(colors, path) as string;

  if (hexValue) {
    return hexValue;
  }

  throw new Error(`Undefined color for path "${path}"`);
}
