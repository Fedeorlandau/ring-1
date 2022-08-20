import { z } from 'zod';

import { HeroV1UISchema } from './HeroV1UI';

export const HeroV1SectionSchema = z.object({
  id: z.string(),
  name: z.literal('HeroV1'),
  props: HeroV1UISchema,
});

export type HeroV1SectionType = z.infer<typeof HeroV1SectionSchema>;
