import React from 'react';
import { Image } from 'src/components/elements/Image';
import { Link } from 'src/components/elements/Link';
import { Text } from 'src/components/elements/Text';
import type { ImageModel } from 'src/types';

export type ProductListV1Section = {
  id: string;
  name: 'ProductListV1';
  props: ProductListV1Props;
};

export type ProductListV1Props = {
  products: Array<ProductListV1Product>;
  title?: string;
};

export type ProductListV1Product = {
  name: string;
  slug: string;
  price: string;
  currency: string;
  images: Array<ImageModel>;
};

export function ProductListV1({ products, title }: ProductListV1Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {title && (
          <Text tag="h2" variant="2xl">
            {title}
          </Text>
        )}

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.name} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  alt={product.images[0].alt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  src={product.images[0].src}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <Text tag="h3" variant="sm">
                    <Link href={`/p/${product.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </Text>
                  <Text variant="xs">Black</Text>
                </div>
                <Text variant="sm">
                  {product.price} {product.currency}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
