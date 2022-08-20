import { z } from 'zod';

const BlogPost = z.object({
  date: z.string(),
  description: z.string(),
  link: z.string(),
  tags: z.array(z.string()),
  title: z.string(),
  author: z.string().optional(),
});

export const BlogPostListV1CMSSchema = z.object({
  id: z.string(),
  name: z.literal('BlogPostListV1'),
  props: z.object({
    description: z.string(),
    title: z.string(),
    list: z.array(BlogPost),
  }),
});

export type BlogPostListV1CMSType = z.infer<typeof BlogPostListV1CMSSchema>;
