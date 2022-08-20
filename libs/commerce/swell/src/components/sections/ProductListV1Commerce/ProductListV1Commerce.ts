import type { ProductListV1CommerceType } from '@ring/contracts';
import fetch from 'node-fetch';
import { SWELL_URL } from 'src/api/swell';
import type { ProductSwell } from 'src/types';
import { imageParser } from 'src/utils/imageParser';

export async function ProductListV1Commerce(): Promise<ProductListV1CommerceType> {
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
