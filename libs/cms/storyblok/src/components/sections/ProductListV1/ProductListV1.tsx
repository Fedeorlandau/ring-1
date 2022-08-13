import type { ProductSwell } from '@ring/commerce-swell';
import { ProductListV1 as ProductListV1UI } from '@ring/ui-tailwind';
import type { ReactElement } from 'react';
import React from 'react';

import type { ProductListV1Storyblok } from '../../../types';

type ProductListV1Props = ProductListV1Storyblok & {
  products: Array<ProductSwell>;
};
export function ProductListV1({ title, products }: ProductListV1Props): ReactElement {
  return (
    <ProductListV1UI
      products={products.map((product) => {
        if (!product.images) {
          // eslint-disable-next-line
          console.warn(`Undefined image for product with slug "${product.slug}"`);
        }

        return {
          name: product.name,
          slug: product.slug,
          price: product.price,
          currency: product.currency,
          images:
            product.images.length === 0
              ? [{ src: 'https://via.placeholder.com/1024', alt: 'Placeholder' }]
              : product.images.map((image) => ({
                  src: image.file.url,
                  alt: '',
                })),
        };
      })}
      title={title}
    />
  );
}
