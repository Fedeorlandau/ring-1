import { borderParser } from 'src/parsers/borderParser';
import { borderRadiusParser } from 'src/parsers/borderRadiusParser';
import { borderWidthParser } from 'src/parsers/borderWidthParser';
import { fillParser } from 'src/parsers/fillParser';
import { heightParser } from 'src/parsers/heightParser';
import { horizontalPaddingParser } from 'src/parsers/horizontalPaddingParser';
import { removeDuplicatedClasses } from 'src/parsers/removeDuplicatedClasses';
import { typographyParser } from 'src/parsers/typographyParser';
import { verticalPaddingParser } from 'src/parsers/verticalPaddingParser';
import { widthParser } from 'src/parsers/widthParser';

import type { Button, ButtonComponents } from './buttonSchema';

export function buttonParser(button: Button) {
  return Object.entries(button).reduce((acc, [variantKey, components]) => {
    return {
      ...acc,
      [variantKey]: variantParser({ components }),
    };
  }, {});
}

type VariantParser = {
  components: ButtonComponents;
};
function variantParser({ components }: VariantParser) {
  const buttonClasses = [
    // default.mobile
    borderParser({ value: components.button.default.mobile.value.border }),
    borderRadiusParser({ value: components.button.default.mobile.value.borderRadius }),
    borderWidthParser({ value: components.button.default.mobile.value.borderWidth }),
    fillParser({ value: components.button.default.mobile.value.fill, prefix: 'bg' }),
    horizontalPaddingParser({
      value: components.button.default.mobile.value.horizontalPadding,
      mediaQuery: 'mobile',
    }),
    verticalPaddingParser({ value: components.button.default.mobile.value.verticalPadding, mediaQuery: 'mobile' }),

    // default.tablet
    borderParser({ value: components.button.default.tablet.value.border }),
    borderRadiusParser({ value: components.button.default.tablet.value.borderRadius }),
    borderWidthParser({ value: components.button.default.tablet.value.borderWidth }),
    fillParser({ value: components.button.default.tablet.value.fill, prefix: 'bg' }),
    horizontalPaddingParser({
      value: components.button.default.tablet.value.horizontalPadding,
      mediaQuery: 'tablet',
    }),
    verticalPaddingParser({ value: components.button.default.tablet.value.verticalPadding, mediaQuery: 'tablet' }),

    // default.desktop
    borderParser({ value: components.button.default.desktop.value.border }),
    borderRadiusParser({ value: components.button.default.desktop.value.borderRadius }),
    borderWidthParser({ value: components.button.default.desktop.value.borderWidth }),
    fillParser({ value: components.button.default.desktop.value.fill, prefix: 'bg' }),
    horizontalPaddingParser({
      value: components.button.default.desktop.value.horizontalPadding,
      mediaQuery: 'desktop',
    }),
    verticalPaddingParser({ value: components.button.default.desktop.value.verticalPadding, mediaQuery: 'desktop' }),

    // hover: only add tokens which change on "hover", no need to add all tokens as they are defined in the "default" state
    borderParser({ value: components.button.hover.value.border, state: 'hover' }),
    fillParser({ value: components.button.hover.value.fill, prefix: 'bg', state: 'hover' }),
  ];

  const textClasses = [
    // default.mobile
    fillParser({ value: components.text.default.mobile.value.fill, prefix: 'text' }),
    typographyParser({ value: components.text.default.mobile.value.typography, mediaQuery: 'mobile' }),

    // default.tablet
    fillParser({ value: components.text.default.tablet.value.fill, prefix: 'text' }),
    typographyParser({ value: components.text.default.tablet.value.typography, mediaQuery: 'tablet' }),

    // default.desktop
    fillParser({ value: components.text.default.desktop.value.fill, prefix: 'text' }),
    typographyParser({ value: components.text.default.desktop.value.typography, mediaQuery: 'desktop' }),

    // hover: only add tokens which change on "hover", no need to add all tokens as they are defined in the "default" state
    fillParser({ value: components.text.hover.value.fill, prefix: 'text', state: 'hover' }),
  ];

  const iconClasses = [
    // default.mobile
    heightParser({ value: components.icon.default.mobile.value.height, mediaQuery: 'mobile' }),
    widthParser({ value: components.icon.default.mobile.value.width, mediaQuery: 'mobile' }),

    // default.tablet
    heightParser({ value: components.icon.default.tablet.value.height, mediaQuery: 'tablet' }),
    widthParser({ value: components.icon.default.tablet.value.width, mediaQuery: 'tablet' }),

    // default.desktop
    heightParser({ value: components.icon.default.desktop.value.height, mediaQuery: 'desktop' }),
    widthParser({ value: components.icon.default.desktop.value.width, mediaQuery: 'desktop' }),

    // hover: only add tokens which change on "hover", no need to add all tokens as they are defined in the "default" state
  ];

  return {
    button: removeDuplicatedClasses({ classes: buttonClasses }),
    text: removeDuplicatedClasses({ classes: textClasses }),
    icon: removeDuplicatedClasses({ classes: iconClasses }),
  };
}
