import type { States } from 'src/types';

import { stateParser } from './stateParser';
import { tokenParser } from './tokenParser';

export type BorderParser = {
  value: string;
  state?: States;
};

export function borderParser({ value, state }: BorderParser) {
  const tokenParsed = tokenParser({ value });
  // The return format should be a string matching any of the tokens defined in Tailwind CSS
  // https://tailwindcss.com/docs/border-color

  const classes = `border-${tokenParsed}`;

  return stateParser({ value: classes, state });
}
