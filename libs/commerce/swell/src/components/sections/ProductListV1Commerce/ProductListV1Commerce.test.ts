import { ProductListV1Commerce } from './ProductListV1Commerce';
import { getProductsResultMock } from './ProductListV1Commerce.mocks';

describe('ProductListV1Commerce', () => {
  test('ProductListV1Commerce', async () => {
    const products = await ProductListV1Commerce();

    expect(products).toEqual(getProductsResultMock);
  });
});
