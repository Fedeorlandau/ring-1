import { tokenParser } from './tokenParser';

export type BorderRadiusParser = {
  value: string;
};

export function borderRadiusParser({ value }: BorderRadiusParser) {
  const tokenParsed = tokenParser({ value });
  // The return format should be a string matching any of the tokens defined in Tailwind CSS
  // https://tailwindcss.com/docs/border-radius

  const classes = `rounded-${tokenParsed}`;

  return classes;
}
