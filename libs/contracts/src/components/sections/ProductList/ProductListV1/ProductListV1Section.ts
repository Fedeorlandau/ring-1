import { z } from 'zod';

import { ProductListV1UISchema } from './ProductListV1UI';

export const ProductListV1SectionSchema = z.object({
  id: z.string(),
  name: z.literal('ProductListV1'),
  props: ProductListV1UISchema,
});

export type ProductListV1SectionType = z.infer<typeof ProductListV1SectionSchema>;
