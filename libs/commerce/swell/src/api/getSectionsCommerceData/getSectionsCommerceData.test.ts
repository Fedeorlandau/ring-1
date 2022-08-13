import { rest } from 'msw';
import { server } from 'src/mocks/server';

import { getProductsResultMock } from '../../components/sections/ProductListV1Commerce/ProductListV1Commerce.mocks';
import { getSectionsCommerceData } from './getSectionsCommerceData';

describe('ProductListV1Commerce', () => {
  test('A section with commerce data and a section without commerce data', async () => {
    const sectionsCommerceData = await getSectionsCommerceData({ sections: ['BlogPostListV1', 'ProductListV1'] });

    expect(sectionsCommerceData).toEqual([{}, getProductsResultMock]);
  });

  test('No sections', async () => {
    server.use(rest.get('https://api.swell.store/products', (_, res, ctx) => res(ctx.status(500), ctx.json({}))));

    await expect(getSectionsCommerceData({ sections: ['ProductListV1'] })).rejects.toThrow(
      'The sections with commerce data is undefined',
    );
  });
});
