// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import type { CMSSections } from '../../components/sections';
import { featuresV1Mock } from '../../components/sections/FeaturesV1CMS/FeaturesV1CMS.mocks';
import { heroV1Mock } from '../../components/sections/HeroV1CMS/HeroV1CMS.mocks';
import { productListV1Mock } from '../../components/sections/ProductListV1CMS/ProductListV1CMS.mocks';

type GetEntriesHandlerProps = {
  mock: Record<string, unknown>;
};
export function getEntriesHandler({ mock }: GetEntriesHandlerProps) {
  return rest.get('https://cdn.contentful.com/spaces/CONTENTFUL_SPACE_ID/environments/master/entries', (_, res, ctx) =>
    res(ctx.status(200), ctx.json(mock)),
  );
}

export const getSectionsMock = {
  sys: { type: 'Array' },
  total: 1,
  skip: 0,
  limit: 2,
  items: [
    {
      metadata: { tags: [] },
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '54qcnb7au56m' } },
        id: '62048Cl8kW1qLJemK95epv',
        type: 'Entry',
        createdAt: '2022-07-26T14:06:05.670Z',
        updatedAt: '2022-07-27T09:45:08.422Z',
        environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
        revision: 2,
        contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'Page' } },
        locale: 'en',
      },
      fields: {
        title: 'Home Page',
        slug: '/',
        sections: [heroV1Mock, featuresV1Mock, productListV1Mock],
      },
    },
  ],
};
export const getSectionsHandler = getEntriesHandler({ mock: getSectionsMock });

export const getSectionsExpectedResult: CMSSections = [
  {
    id: '2NbmpbgYU2Ee9ykiOwUDEl',
    name: 'HeroV1',
    props: {
      buttonPrimaryLink: 'link',
      buttonPrimaryText: 'Get Started',
      buttonSecondaryLink: 'link',
      buttonSecondaryText: 'Live demo',
      image: {
        alt: '',
        src: '',
      },
      logo: {
        alt: '',
        src: '//images.ctfassets.net/54qcnb7au56m/PcSUX1RjdbC1UEZu9C0Ap/decb85031e48ebefde6486b1b4cc84da/valtech_white.png',
      },
      navigation: [{ link: 'product-list-page', title: 'Product List Page' }],
      subtitle:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
      title: 'Ring',
      titleFirstRow: 'Data to enrich your',
      titleSecondRow: 'online business',
    },
  },
  {
    id: '141tBP3pVhqZ6LhQWJvdqW',
    name: 'FeaturesV1',
    props: {
      features: [
        {
          subtitle:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          title: 'Competitive exchange rates',
        },
      ],
      pretitle: 'Transactions',
      subtitle:
        'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
      title: 'A better way to send money',
    },
  },
  {
    id: 'ProductListV1',
    name: 'ProductListV1',
    props: {
      title: 'Ring',
    },
  },
];

export const noSectionsMock = {
  sys: { type: 'Array' },
  total: 1,
  skip: 0,
  limit: 2,
  items: [],
};
export const noSectionsHandler = getEntriesHandler({ mock: noSectionsMock });

const unkwownSection = {
  metadata: { tags: [] },
  sys: {
    space: { sys: { type: 'Link', linkType: 'Space', id: '54qcnb7au56m' } },
    id: '2NbmpbgYU2Ee9ykiOwUDEl',
    type: 'Entry',
    createdAt: '2022-07-26T13:59:42.194Z',
    updatedAt: '2022-07-27T09:25:05.967Z',
    environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
    revision: 7,
    contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'UnknownSection' } },
    locale: 'en',
  },
  fields: {
    title: 'Ring',
    logo: {
      metadata: { tags: [] },
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '54qcnb7au56m' } },
        id: 'PcSUX1RjdbC1UEZu9C0Ap',
        type: 'Asset',
        createdAt: '2021-06-11T08:19:49.916Z',
        updatedAt: '2021-06-11T08:19:49.916Z',
        environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
        revision: 1,
        locale: 'en',
      },
      fields: {
        title: 'Valtech white',
        file: {
          url: '//images.ctfassets.net/54qcnb7au56m/PcSUX1RjdbC1UEZu9C0Ap/decb85031e48ebefde6486b1b4cc84da/valtech_white.png',
          details: { size: 1998, image: { width: 500, height: 500 } },
          fileName: 'valtech_white.png',
          contentType: 'image/png',
        },
      },
    },
    navigation: [
      {
        metadata: { tags: [] },
        sys: {
          space: { sys: { type: 'Link', linkType: 'Space', id: '54qcnb7au56m' } },
          id: '2Pj2WsQveywkhSo9aVwPmM',
          type: 'Entry',
          createdAt: '2022-07-27T09:23:56.155Z',
          updatedAt: '2022-07-27T09:24:34.715Z',
          environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
          revision: 2,
          contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'Page' } },
          locale: 'en',
        },
        fields: { title: 'Product List Page', slug: 'product-list-page' },
      },
    ],
    titleFirstRow: 'Data to enrich your',
    titleSecondRow: 'online business',
    subtitle:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    buttonPrimaryText: 'Get Started',
    buttonPrimaryLink: {
      slug: 'link',
    },
    buttonSecondaryText: 'Live demo',
    buttonSecondaryLink: {
      fields: {
        slug: 'link',
      },
    },
    image: {
      metadata: { tags: [] },
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '54qcnb7au56m' } },
        id: '7g1gyCN3iSwIpo7OoOTGzq',
        type: 'Asset',
        createdAt: '2022-07-26T14:47:25.276Z',
        updatedAt: '2022-07-26T14:48:53.676Z',
        environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
        revision: 2,
        locale: 'en',
      },
      fields: {
        title: 'HeroV1',
        description: '',
      },
    },
  },
};

export const unknownSectionMock = {
  sys: { type: 'Array' },
  total: 1,
  skip: 0,
  limit: 2,
  items: [
    {
      metadata: { tags: [] },
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '54qcnb7au56m' } },
        id: '62048Cl8kW1qLJemK95epv',
        type: 'Entry',
        createdAt: '2022-07-26T14:06:05.670Z',
        updatedAt: '2022-07-27T09:45:08.422Z',
        environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
        revision: 2,
        contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'Page' } },
        locale: 'en',
      },
      fields: {
        title: 'Home Page',
        slug: '/',
        sections: [unkwownSection],
      },
    },
  ],
};

export const unknownSectionHandler = getEntriesHandler({ mock: unknownSectionMock });
