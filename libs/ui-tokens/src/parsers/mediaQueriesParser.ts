import type { MediaQueries } from 'src/types';

export type TypographyParser = {
  value: string;
  mediaQuery: MediaQueries;
};
export function mediaQueriesParser({ value, mediaQuery }: TypographyParser) {
  switch (mediaQuery) {
    case 'mobile':
      return value;

    case 'tablet':
      return `md:${value}`;

    case 'desktop':
      return `lg:${value}`;

    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unknown mediaQuery "${mediaQuery}"`);
  }
}
