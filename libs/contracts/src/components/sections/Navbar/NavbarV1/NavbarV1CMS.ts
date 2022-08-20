import { ImageSchema } from 'src/components/elements';
import { IconNameSchema } from 'src/components/elements/Icon';
import { ListV1Schema, ListV2Schema, ListV3Schema } from 'src/components/modules';
import { z } from 'zod';

const NavigationItemSchema = z.object({
  title: z.string(),
  link: z.string(),
  icon: IconNameSchema.optional(),
  items: ListV2Schema.optional(),
  callsToAction: ListV3Schema.optional(),
  list: ListV1Schema.optional(),
});

export const NavbarV1CMSSchema = z.object({
  id: z.string(),
  name: z.literal('NavbarV1'),
  props: z.object({
    title: z.string(),
    logo: ImageSchema,
    navigation: z.array(NavigationItemSchema),
    primaryButtonLink: z.string(),
    primaryButtonTitle: z.string(),
    secondaryButtonLink: z.string(),
    secondaryButtonTitle: z.string(),
  }),
});

export type NavbarV1CMSType = z.infer<typeof NavbarV1CMSSchema>;
