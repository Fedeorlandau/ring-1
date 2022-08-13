import type { MediaQueries } from 'src/types';

import { mediaQueriesParser } from './mediaQueriesParser';
import { tokenParser } from './tokenParser';

export type TypographyParser = {
  value: string;
  mediaQuery: MediaQueries;
};
export function typographyParser({ value, mediaQuery }: TypographyParser) {
  const tokenParsed = tokenParser({ value });

  // The return format should be a string matching any of the tokens defined in Tailwind CSS
  // Font Size: https://tailwindcss.com/docs/font-size

  // prepend the "text" prefix to match the tailwind classes
  // sm => text-sm
  const classes = `text-${tokenParsed}`;

  // text-md is text-base in Tailwind CSS
  const classesAdjusted = classes.replace('text-md', 'text-base');

  return mediaQueriesParser({ value: classesAdjusted, mediaQuery });
}
