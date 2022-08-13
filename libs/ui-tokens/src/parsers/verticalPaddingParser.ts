import type { MediaQueries } from 'src/types';

import { mediaQueriesParser } from './mediaQueriesParser';
import { tokenParser } from './tokenParser';

export type VerticalPaddingParser = {
  value: string;
  mediaQuery: MediaQueries;
};

export function verticalPaddingParser({ value, mediaQuery }: VerticalPaddingParser) {
  const tokenParsed = tokenParser({ value });

  // The return format should be a string matching any of the tokens defined in Tailwind CSS
  // https://tailwindcss.com/docs/padding

  const classes = `py-${Number(tokenParsed) / 4}`;

  return mediaQueriesParser({ value: classes, mediaQuery });
}
