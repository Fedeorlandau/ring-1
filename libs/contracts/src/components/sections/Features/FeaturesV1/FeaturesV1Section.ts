import { z } from 'zod';

import { FeaturesV1UISchema } from './FeaturesV1UI';

export const FeaturesV1SectionSchema = z.object({
  id: z.string(),
  name: z.literal('FeaturesV1'),
  props: FeaturesV1UISchema,
});

export type FeaturesV1SectionType = z.infer<typeof FeaturesV1SectionSchema>;
