import { z } from 'zod';

export const ProductListV1CMSSchema = z.object({
  id: z.string(),
  name: z.literal('ProductListV1'),
  props: z.object({
    title: z.string().optional(),
  }),
});

export type ProductListV1CMSType = z.infer<typeof ProductListV1CMSSchema>;
