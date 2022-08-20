import type { z } from 'zod';

import { FeaturesV1CMSSchema } from './FeaturesV1CMS';

export const FeaturesV1UISchema = FeaturesV1CMSSchema.shape.props;

// type
export type FeaturesV1UIType = z.infer<typeof FeaturesV1UISchema>;
