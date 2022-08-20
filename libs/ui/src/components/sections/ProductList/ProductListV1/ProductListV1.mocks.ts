import type { ProductListV1SectionType, ProductListV1UIType } from '@ring/contracts';

export const ProductListV1Mock: ProductListV1UIType = {
  title: 'Customers also purchased',
  products: [
    {
      name: 'Product name 1',
      slug: 'product-name',
      price: '20',
      currency: 'EUR',
      images: [
        {
          alt: 'Alt 1',
          src: 'https://cdn.lorem.space/images/watch/.cache/800x800/taylor-beach-z7zo6b1nfKM-unsplash.jpg',
        },
      ],
    },
    {
      name: 'Product name 2',
      slug: 'product-name',
      price: '20',
      currency: 'EUR',
      images: [
        {
          alt: 'Alt 2',
          src: 'https://cdn.lorem.space/images/shoes/.cache/800x800/trendest-studio-XZ3EmAIWuz0-unsplash.jpg',
        },
      ],
    },
    {
      name: 'Product name 3',
      slug: 'product-name',
      price: '20',
      currency: 'EUR',
      images: [
        {
          alt: 'Alt 3',
          src: 'https://cdn.lorem.space/images/shoes/.cache/800x800/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg',
        },
      ],
    },
    {
      name: 'Product name 4',
      slug: 'product-name',
      price: '20',
      currency: 'EUR',
      images: [
        {
          alt: 'Alt 4',
          src: 'https://cdn.lorem.space/images/shoes/.cache/800x800/maksim-larin-NOpsC3nWTzY-unsplash.jpg',
        },
      ],
    },
    {
      name: 'Product name 5',
      slug: 'product-name',
      price: '20',
      currency: 'EUR',
      images: [
        {
          alt: 'Alt 5',
          src: 'https://cdn.lorem.space/images/shoes/.cache/800x800/usama-akram-kP6knT7tjn4-unsplash.jpg',
        },
      ],
    },
    {
      name: 'Product name 6',
      slug: 'product-name',
      price: '20',
      currency: 'EUR',
      images: [
        {
          alt: 'Alt 6',
          src: 'https://cdn.lorem.space/images/shoes/.cache/800x800/irene-kredenets-dwKiHoqqxk8-unsplash.jpg',
        },
      ],
    },
  ],
};

export const ProductListV1SectionMock: ProductListV1SectionType = {
  id: 'ProductListV1',
  name: 'ProductListV1',
  props: ProductListV1Mock,
};
