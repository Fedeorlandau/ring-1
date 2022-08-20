import type { ProductListV1UIType } from '@ring/contracts';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductListV1 } from './ProductListV1';
import { ProductListV1Mock } from './ProductListV1.mocks';

export default {
  title: 'Sections/ProductList',
  component: ProductListV1,
} as Meta;

const Template: Story<ProductListV1UIType> = (args) => <ProductListV1 {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.storyName = 'ProductListV1';
Default.args = ProductListV1Mock;
