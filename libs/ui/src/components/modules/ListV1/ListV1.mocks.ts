import type { ListV1Type } from '@ring/contracts';

export const ListV1Mock: ListV1Type = {
  title: 'My List',
  link: {
    title: 'View all',
    link: '/',
  },
  items: [
    { title: 'Watch Demo', link: '/' },
    { title: 'Contact Sales', link: '/' },
  ],
};
