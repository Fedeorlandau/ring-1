import type { TypeProductListV1 } from '../../../types/generated/contentful';

export const productListV1Mock: TypeProductListV1 = {
  metadata: { tags: [] },
  sys: {
    space: { sys: { type: 'Link', linkType: 'Space', id: '54qcnb7au56m' } },
    id: 'ProductListV1',
    type: 'Entry',
    createdAt: '2022-07-26T13:59:42.194Z',
    updatedAt: '2022-07-27T09:25:05.967Z',
    environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
    revision: 7,
    contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'ProductListV1' } },
    locale: 'en',
  },
  fields: {
    title: 'Ring',
  },
};
