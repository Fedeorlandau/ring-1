import { z } from 'zod';

import { ImageSchema } from '../../../elements/Image';

const ProductListV1ProductSchema = z.object({
  name: z.string(),
  slug: z.string(),
  price: z.string(),
  currency: z.string(),
  images: z.array(ImageSchema),
});

export const ProductListV1CommerceSchema = z.object({
  products: z.array(ProductListV1ProductSchema),
});

export type ProductListV1CommerceType = z.infer<typeof ProductListV1CommerceSchema>;
