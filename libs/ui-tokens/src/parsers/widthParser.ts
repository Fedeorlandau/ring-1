import type { MediaQueries } from 'src/types';

import { mediaQueriesParser } from './mediaQueriesParser';
import { tokenParser } from './tokenParser';

export type WidthParser = {
  value: string;
  mediaQuery: MediaQueries;
};

export function widthParser({ value, mediaQuery }: WidthParser) {
  const tokenParsed = tokenParser({ value });
  // The return format should be a string matching any of the tokens defined in Tailwind CSS
  // https://tailwindcss.com/docs/width

  const classes = `w-${Number(tokenParsed) / 4}`;

  // "h-0.25" is "h-px" in Tailwind CSS
  const classesAdjusted = classes.replace('w-0.25', 'w-px');

  return mediaQueriesParser({ value: classesAdjusted, mediaQuery });
}
