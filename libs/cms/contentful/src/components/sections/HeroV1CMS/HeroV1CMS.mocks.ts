import type { TypeHeroV1 } from '../../../types/generated/contentful';

export const heroV1Mock: TypeHeroV1 = {
  metadata: { tags: [] },
  sys: {
    space: { sys: { type: 'Link', linkType: 'Space', id: '54qcnb7au56m' } },
    id: '2NbmpbgYU2Ee9ykiOwUDEl',
    type: 'Entry',
    createdAt: '2022-07-26T13:59:42.194Z',
    updatedAt: '2022-07-27T09:25:05.967Z',
    environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
    revision: 7,
    contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'HeroV1' } },
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
        fields: { title: 'Product List Page', slug: 'product-list-page', sections: [] },
      },
    ],
    titleFirstRow: 'Data to enrich your',
    titleSecondRow: 'online business',
    subtitle:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    buttonPrimaryText: 'Get Started',
    buttonPrimaryLink: {
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
        title: 'title',
        slug: 'link',
        sections: [],
      },
    },
    buttonSecondaryText: 'Live demo',
    buttonSecondaryLink: {
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
        title: 'title',
        slug: 'link',
        sections: [],
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
