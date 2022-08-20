import { z } from 'zod';

import { NavbarV1UISchema } from './NavbarV1UI';

export const NavbarV1SectionSchema = z.object({
  id: z.string(),
  name: z.literal('NavbarV1'),
  props: NavbarV1UISchema,
});

export type NavbarV1sectionType = z.infer<typeof NavbarV1SectionSchema>;
