import { screen } from 'src/__test__/test-utils';

import type { ProductListV1Props } from './ProductListV1';

export function runProductListV1Test(mock: ProductListV1Props) {
  expect(screen.getByRole('heading', { name: mock.title, level: 2 })).toBeInTheDocument();

  mock.products.forEach((product) => {
    expect(screen.getByRole('heading', { name: product.name, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: product.name })).toHaveAttribute('href', `/p/${product.slug}`);
    expect(screen.getByRole('img', { name: product.images[0].alt })).toBeInTheDocument();
  });
}
