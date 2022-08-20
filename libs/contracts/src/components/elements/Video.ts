import { z } from 'zod';

export const VideoSchema = z.object({
  src: z.string(),
  alt: z.string(),
});
export type VideoType = z.infer<typeof VideoSchema>;
