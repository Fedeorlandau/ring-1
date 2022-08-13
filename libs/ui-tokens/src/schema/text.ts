import { z } from 'zod';

const Typography = z.object({
  value: z.object({
    fontSize: z.string(),
    lineHeight: z.string(),
  }),
  type: z.string().regex(/^(typography)$/),
});

const tokens = ['xs', 'sm', 'md', 'lg', 'xl'];

export const text = z.object(
  tokens.reduce((acc, token) => {
    return {
      ...acc,
      [token]: Typography,
    };
  }, {}),
);
