import type { z } from 'zod';

import { NavbarV1CMSSchema } from './NavbarV1CMS';

export const NavbarV1UISchema = NavbarV1CMSSchema.shape.props;

export type NavbarV1UIType = z.infer<typeof NavbarV1UISchema>;
