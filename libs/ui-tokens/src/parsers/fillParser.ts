import type { States } from 'src/types';

import { stateParser } from './stateParser';
import { tokenParser } from './tokenParser';

export type FillParser = {
  value: string;
  prefix: 'text' | 'bg';
  state?: States;
};

export function fillParser({ value, prefix, state }: FillParser) {
  const tokenParsed = tokenParser({ value });

  // The return format should be a string matching any of the tokens defined in Tailwind CSS
  // Text Color: https://tailwindcss.com/docs/text-color

  // prepend the "text" prefix to match the tailwind classes
  // red-500 => text-red-500
  const classes = `${prefix}-${tokenParsed}`;

  return stateParser({ value: classes, state });
}
