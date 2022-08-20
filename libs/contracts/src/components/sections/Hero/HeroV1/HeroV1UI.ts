import type { z } from 'zod';

import { HeroV1CMSSchema } from './HeroV1CMS';

export const HeroV1UISchema = HeroV1CMSSchema.shape.props;

export type HeroV1UIType = z.infer<typeof HeroV1UISchema>;
