import { logger } from '@ring/logger';

import type { TypePageFields } from '../types/generated/contentful';

export type LinkParserProps = {
  fields: TypePageFields;
};

export function linkParser({ fields }: LinkParserProps) {
  if (fields) {
    return fields.slug;
  }

  logger.error('Undefined link');

  return '';
}
