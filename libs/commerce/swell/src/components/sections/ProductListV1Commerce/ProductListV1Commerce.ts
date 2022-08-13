import type { ProductListV1Section } from '@ring/ui';
import fetch from 'node-fetch';
import { SWELL_URL } from 'src/api/swell';
import type { ProductSwell } from 'src/types';
import { imageParser } from 'src/utils/imageParser';

export type ProductListV1CommerceResult = Promise<{ products: ProductListV1Section['props']['products'] }>;

export async function ProductListV1Commerce(): ProductListV1CommerceResult {
  const response = await fetch(`${SWELL_URL}/products`);
  const data = await response.json();

  const products: Array<ProductSwell> = data.results;

  return {
    products: products.map((product) => {
      return {
        name: product.name,
        slug: product.slug,
        price: Number(product.price).toString(),
        currency: product.currency,
        images: product.images.map(imageParser),
      };
    }),
  };
}
