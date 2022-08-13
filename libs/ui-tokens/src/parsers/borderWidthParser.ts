import { tokenParser } from './tokenParser';

export type BorderWidthParser = {
  value: string;
};

export function borderWidthParser({ value }: BorderWidthParser) {
  const tokenParsed = tokenParser({ value });
  // The return format should be a string matching any of the tokens defined in Tailwind CSS
  // https://tailwindcss.com/docs/border-width

  const classes = `border-${tokenParsed}`;

  // "border-1" is "border" in Tailwind CSS
  const classesAdjusted = classes.replace('border-1', 'border');

  return classesAdjusted;
}
