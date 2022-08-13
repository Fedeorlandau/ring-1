import { z } from 'zod';

import { colors } from './colors';
import { palette } from './palette';
import { text } from './text';

export const tailwindSchema = z.object({
  colors,
  palette,
  text,
});
