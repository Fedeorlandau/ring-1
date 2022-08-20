import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render, screen } from 'src/__test__/test-utils';

import { ProductListV1Mock } from './ProductListV1.mocks';
import * as stories from './ProductListV1.stories';

const { Default } = composeStories(stories);

test('<ProductListV1 />', () => {
  render(<Default />);

  expect(screen.getByRole('heading', { name: ProductListV1Mock.title, level: 2 })).toBeInTheDocument();

  ProductListV1Mock.products.forEach((product) => {
    expect(screen.getByRole('heading', { name: product.name, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: product.name })).toHaveAttribute('href', `/p/${product.slug}`);
    expect(screen.getByRole('img', { name: product.images[0].alt })).toBeInTheDocument();
  });
});
