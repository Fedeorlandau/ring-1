import { IconNameSchema } from 'src/components/elements';
import { z } from 'zod';

const Features = z.object({
  title: z.string(),
  subtitle: z.string(),
  icon: IconNameSchema,
});

export const FeaturesV1CMSSchema = z.object({
  id: z.string(),
  name: z.literal('FeaturesV1'),
  props: z.object({
    title: z.string(),
    pretitle: z.string(),
    subtitle: z.string(),
    features: z.array(Features),
  }),
});

export type FeaturesV1CMSType = z.infer<typeof FeaturesV1CMSSchema>;
