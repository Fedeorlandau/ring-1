import { z } from 'zod';

export const ListV1Schema = z.object({
  title: z.string(),
  link: z.object({ title: z.string(), link: z.string() }),
  items: z.array(z.object({ title: z.string(), link: z.string() })),
});

export type ListV1Type = z.infer<typeof ListV1Schema>;
