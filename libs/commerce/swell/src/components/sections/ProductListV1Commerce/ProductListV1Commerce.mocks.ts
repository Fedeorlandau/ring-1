import { rest } from 'msw';

type GetEntriesHandlerProps = {
  mock: Record<string, unknown>;
};
export function getHandler({ mock }: GetEntriesHandlerProps) {
  return rest.get('https://api.swell.store/products', (_, res, ctx) => res(ctx.status(200), ctx.json(mock)));
}

export const getProductsMock = {
  results: [
    {
      name: 'productName',
      slug: 'productSlug',
      price: '20',
      currency: 'EUR',
      images: [{ file: { url: 'https://fileUrl' } }],
    },
  ],
};
export const getProductsResultMock = {
  products: [
    {
      name: 'productName',
      slug: 'productSlug',
      price: '20',
      currency: 'EUR',
      images: [{ src: 'https://fileUrl', alt: '' }],
    },
  ],
};
export const getProductsHandler = getHandler({ mock: getProductsMock });
