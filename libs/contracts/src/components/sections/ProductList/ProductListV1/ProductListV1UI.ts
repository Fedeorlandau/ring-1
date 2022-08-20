import type { z } from 'zod';

import { ProductListV1CMSSchema } from './ProductListV1CMS';
import { ProductListV1CommerceSchema } from './ProductListV1Commerce';

export const ProductListV1UISchema = ProductListV1CMSSchema.shape.props.merge(ProductListV1CommerceSchema);

export type ProductListV1UIType = z.infer<typeof ProductListV1UISchema>;
