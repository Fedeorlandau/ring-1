import assert from 'assert';
import type { ContentfulClientApi } from 'contentful';
import { createClient } from 'contentful';

assert(process.env.CONTENTFUL_SPACE_ID);
assert(process.env.CONTENTFUL_ACCESS_TOKEN);
assert(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN);

const client: ContentfulClientApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: 'cdn.contentful.com',
});

const previewClient: ContentfulClientApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

export function getClient(preview?: boolean): ContentfulClientApi {
  if (preview) {
    return previewClient;
  }

  return client;
}
