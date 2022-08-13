import { z } from 'zod';

export const compositionTokenRegex = z.string().regex(/^(composition)$/);

export const borderTokenRegex = z.string().regex(/{palette.(.*?)}/);
export const borderRadiusTokenRegex = z.string().regex(/{borderRadius.(.*?)}/);
export const borderWidthTokenRegex = z.string().regex(/{borderWidth.(.*?)}/);
export const heightTokenRegex = z.string().regex(/{sizing.(.*?)}/);
export const fillTokenRegex = z.string().regex(/{palette.(.*?)}/);
export const spacingTokenRegex = z.string().regex(/{spacing.(.*?)}/);
export const typographyTokenRegex = z.string().regex(/{text.(.*?)}/);
export const widthTokenRegex = z.string().regex(/{sizing.(.*?)}/);
