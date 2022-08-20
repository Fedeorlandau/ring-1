import { ImageSchema } from 'src/components/elements';
import { IconNameSchema } from 'src/components/elements/Icon';
import { ListV1Schema, ListV2Schema, ListV3Schema } from 'src/components/modules';
import { z } from 'zod';

const NavigationItemSchema = z.object({
  title: z.string(),
  link: z.string(),
  icon: IconNameSchema.nullable(),
  items: ListV2Schema.nullable(),
  callsToAction: ListV3Schema,
  list: ListV1Schema.nullable(),
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
