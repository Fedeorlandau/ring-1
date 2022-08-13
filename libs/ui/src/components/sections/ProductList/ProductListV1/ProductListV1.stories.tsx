import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { ProductListV1Props } from './ProductListV1';
import { ProductListV1 as ProductListV1UI } from './ProductListV1';
import { productListV1Mock } from './ProductListV1.mocks';

export default {
  title: 'Sections/ProductList',
  component: ProductListV1UI,
} as Meta;

const Template: Story<ProductListV1Props> = (args) => <ProductListV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ProductListV1 = Template.bind({});
ProductListV1.args = productListV1Mock;
