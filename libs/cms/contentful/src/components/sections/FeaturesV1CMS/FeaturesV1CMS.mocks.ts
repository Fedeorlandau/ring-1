import type { TypeFeaturesV1 } from '../../../types/generated/contentful';

export const featuresV1Mock: TypeFeaturesV1 = {
  metadata: { tags: [] },
  sys: {
    space: { sys: { type: 'Link', linkType: 'Space', id: '54qcnb7au56m' } },
    id: '141tBP3pVhqZ6LhQWJvdqW',
    type: 'Entry',
    createdAt: '2022-07-27T09:45:02.845Z',
    updatedAt: '2022-07-27T09:45:02.845Z',
    environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
    revision: 1,
    contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'FeaturesV1' } },
    locale: 'en',
  },
  fields: {
    pretitle: 'Transactions',
    title: 'A better way to send money',
    subtitle:
      'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
    features: [
      {
        metadata: { tags: [] },
        sys: {
          space: { sys: { type: 'Link', linkType: 'Space', id: '54qcnb7au56m' } },
          id: 'bYQfNqIUumItPoIoehNwp',
          type: 'Entry',
          createdAt: '2022-07-27T09:44:33.664Z',
          updatedAt: '2022-07-27T09:44:33.664Z',
          environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
          revision: 1,
          contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'FeaturesV1item' } },
          locale: 'en',
        },
        fields: {
          title: 'Competitive exchange rates',
          subtitle:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        },
      },
    ],
  },
};
