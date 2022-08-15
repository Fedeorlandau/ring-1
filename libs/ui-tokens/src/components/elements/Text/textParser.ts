import { fillParser } from 'src/parsers/fillParser';
import { removeDuplicatedClasses } from 'src/parsers/removeDuplicatedClasses';
import { typographyParser } from 'src/parsers/typographyParser';

import type { Text, TextVariant } from './textSchema';

export function textParser(text: Text) {
  return Object.entries(text).reduce((acc, [variantKey, components]) => {
    return {
      ...acc,
      [variantKey]: variantParser({ components }),
    };
  }, {});
}

type VariantParser = {
  components: TextVariant;
};
function variantParser({ components }: VariantParser) {
  const classes = [
    // default.mobile
    fillParser({ value: components.mobile.value.fill, prefix: 'text' }),
    typographyParser({ value: components.mobile.value.typography, mediaQuery: 'mobile' }),

    // default.tablet
    fillParser({ value: components.tablet.value.fill, prefix: 'text' }),
    typographyParser({ value: components.tablet.value.typography, mediaQuery: 'tablet' }),

    // default.desktop
    fillParser({ value: components.desktop.value.fill, prefix: 'text' }),
    typographyParser({ value: components.desktop.value.typography, mediaQuery: 'desktop' }),
  ];

  return removeDuplicatedClasses({ classes });
}
