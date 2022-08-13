import {
  borderRadiusTokenRegex,
  borderTokenRegex,
  borderWidthTokenRegex,
  compositionTokenRegex,
  fillTokenRegex,
  heightTokenRegex,
  spacingTokenRegex,
  typographyTokenRegex,
  widthTokenRegex,
} from 'src/schema/tokens';
import { z } from 'zod';

const buttonComponents = z.object({
  button: z.object({
    default: z.object({
      mobile: z.object({
        value: z.object({
          border: borderTokenRegex,
          borderRadius: borderRadiusTokenRegex,
          borderWidth: borderWidthTokenRegex,
          fill: fillTokenRegex,
          horizontalPadding: spacingTokenRegex,
          verticalPadding: spacingTokenRegex,
        }),
        type: compositionTokenRegex,
      }),
      tablet: z.object({
        value: z.object({
          border: borderTokenRegex,
          borderRadius: borderRadiusTokenRegex,
          borderWidth: borderWidthTokenRegex,
          fill: fillTokenRegex,
          horizontalPadding: spacingTokenRegex,
          verticalPadding: spacingTokenRegex,
        }),
        type: compositionTokenRegex,
      }),
      desktop: z.object({
        value: z.object({
          border: borderTokenRegex,
          borderRadius: borderRadiusTokenRegex,
          borderWidth: borderWidthTokenRegex,
          fill: fillTokenRegex,
          horizontalPadding: spacingTokenRegex,
          verticalPadding: spacingTokenRegex,
        }),
        type: compositionTokenRegex,
      }),
    }),
    hover: z.object({
      value: z.object({
        border: borderTokenRegex,
        borderRadius: borderRadiusTokenRegex,
        borderWidth: borderWidthTokenRegex,
        fill: fillTokenRegex,
        horizontalPadding: spacingTokenRegex,
        verticalPadding: spacingTokenRegex,
      }),
      type: compositionTokenRegex,
    }),
  }),
  text: z.object({
    default: z.object({
      mobile: z.object({
        value: z.object({
          fill: fillTokenRegex,
          typography: typographyTokenRegex,
        }),
        type: compositionTokenRegex,
      }),
      tablet: z.object({
        value: z.object({
          fill: fillTokenRegex,
          typography: typographyTokenRegex,
        }),
        type: compositionTokenRegex,
      }),
      desktop: z.object({
        value: z.object({
          fill: fillTokenRegex,
          typography: typographyTokenRegex,
        }),
        type: compositionTokenRegex,
      }),
    }),
    hover: z.object({
      value: z.object({
        fill: fillTokenRegex,
        typography: typographyTokenRegex,
      }),
      type: compositionTokenRegex,
    }),
  }),
  icon: z.object({
    default: z.object({
      mobile: z.object({
        value: z.object({
          height: heightTokenRegex,
          width: widthTokenRegex,
        }),
        type: compositionTokenRegex,
      }),
      tablet: z.object({
        value: z.object({
          height: heightTokenRegex,
          width: widthTokenRegex,
        }),
        type: compositionTokenRegex,
      }),
      desktop: z.object({
        value: z.object({
          height: heightTokenRegex,
          width: widthTokenRegex,
        }),
        type: compositionTokenRegex,
      }),
    }),
    hover: z.object({
      value: z.object({
        height: heightTokenRegex,
        width: widthTokenRegex,
      }),
      type: compositionTokenRegex,
    }),
  }),
});
export type ButtonComponents = z.infer<typeof buttonComponents>;

export const buttonSchema = z.object({
  primary: buttonComponents,
  secondary: buttonComponents,
});
export type Button = z.infer<typeof buttonSchema>;
