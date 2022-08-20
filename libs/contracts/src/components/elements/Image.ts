import { z } from 'zod';

export const ImageSchema = z.object({
  src: z.string().startsWith('https://'),
  alt: z.string(),
});
export type ImageType = z.infer<typeof ImageSchema>;
