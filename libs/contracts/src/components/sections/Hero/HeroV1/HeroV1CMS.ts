import { ImageSchema } from 'src/components/elements';
import { z } from 'zod';

export const HeroV1CMSSchema = z.object({
  id: z.string(),
  name: z.literal('HeroV1'),
  props: z.object({
    title: z.string(),
    logo: ImageSchema,
    buttonPrimaryLink: z.string(),
    buttonPrimaryText: z.string(),
    buttonSecondaryLink: z.string().nullable(),
    buttonSecondaryText: z.string().nullable(),
    image: ImageSchema,
    navigation: z.array(z.object({ title: z.string(), link: z.string() })),
    subtitle: z.string(),
    titleFirstRow: z.string(),
    titleSecondRow: z.string(),
  }),
});

export type HeroV1CMSType = z.infer<typeof HeroV1CMSSchema>;
