import type { MediaQueries } from 'src/types';

import { mediaQueriesParser } from './mediaQueriesParser';
import { tokenParser } from './tokenParser';

export type HeightParser = {
  value: string;
  mediaQuery: MediaQueries;
};

export function heightParser({ value, mediaQuery }: HeightParser) {
  const tokenParsed = tokenParser({ value });
  // The return format should be a string matching any of the tokens defined in Tailwind CSS
  // https://tailwindcss.com/docs/height

  const classes = `h-${Number(tokenParsed) / 4}`;

  // "h-0.25" is "h-px" in Tailwind CSS
  const classesAdjusted = classes.replace('h-0.25', 'h-px');

  return mediaQueriesParser({ value: classesAdjusted, mediaQuery });
}
