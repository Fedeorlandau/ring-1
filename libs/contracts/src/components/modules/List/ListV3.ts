import { IconNameSchema } from 'src/components/elements/Icon';
import { z } from 'zod';

export const ListV3Schema = z.object({
  items: z.array(z.object({ title: z.string(), link: z.string(), icon: IconNameSchema })),
});

export type ListV3Type = z.infer<typeof ListV3Schema>;
