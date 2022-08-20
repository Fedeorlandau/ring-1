import { z } from 'zod';

import { BlogPostListV1UISchema } from './BlogPostListV1UI';

export const BlogPostListV1SectionSchema = z.object({
  id: z.string(),
  name: z.literal('BlogPostListV1'),
  props: BlogPostListV1UISchema,
});

export type BlogPostListV1SectionType = z.infer<typeof BlogPostListV1SectionSchema>;
