import { IconNameSchema } from 'src/components/elements/Icon';
import { z } from 'zod';

export const ListV2Schema = z.object({
  items: z.array(z.object({ title: z.string(), link: z.string(), icon: IconNameSchema, description: z.string() })),
});

export type ListV2Type = z.infer<typeof ListV2Schema>;
