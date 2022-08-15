import { logger } from '@ring/logger';
import type { Asset } from 'contentful';

export type ImageParserProps = {
  fields: Asset['fields'];
};

export function imageParser({ fields }: ImageParserProps) {
  if (!fields || !fields.file) {
    logger.error('Undefined image');
    return { src: '', alt: fields.description || '' };
  }

  return { src: fields.file.url.replace('//', 'https://'), alt: fields.description || '' };
}
