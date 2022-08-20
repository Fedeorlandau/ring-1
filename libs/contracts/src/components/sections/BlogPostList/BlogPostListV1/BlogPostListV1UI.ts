import type { z } from 'zod';

import { BlogPostListV1CMSSchema } from './BlogPostListV1CMS';

export const BlogPostListV1UISchema = BlogPostListV1CMSSchema.shape.props;

export type BlogPostListV1UIType = z.infer<typeof BlogPostListV1UISchema>;
