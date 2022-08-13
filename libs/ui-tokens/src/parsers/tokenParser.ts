import { removeCurlyBracesFromString } from 'src/parsers/removeCurlyBracesFromString';

type TokenParser = {
  value: string;
};
export function tokenParser({ value }: TokenParser) {
  // the figma tokens have the format "{category.tokenName.modifier}"
  // {colors.red.500} where "colors" is the category
  // {text.sm} where "text" is the category

  // remove the curly brackets from the string
  // {colors.red.500} => {colors.red.500}
  // {text.sm} => text.sm
  const tokenValueWithoutCurlyBrakets = removeCurlyBracesFromString(value);

  // get rid of the category
  // colors.red.500 => red.500
  // text.sm => sm
  const valueAsArray = tokenValueWithoutCurlyBrakets.split('.');
  valueAsArray.shift();

  return valueAsArray.join('-');
}
