import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { HeadingProps } from './Heading';
import { Heading } from './Heading';

export default {
  title: 'Elements/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args}>Data to enrich your online business</Heading>;

export const FeaturesV1A = Template.bind({});
FeaturesV1A.args = {
  variant: 'FeaturesV1A',
};

export const FeaturesV1B = Template.bind({});
FeaturesV1B.args = {
  variant: 'FeaturesV1B',
};

export const ProductListV1A = Template.bind({});
ProductListV1A.args = {
  variant: 'ProductListV1A',
};

export const ProductListV1B = Template.bind({});
ProductListV1B.args = {
  variant: 'ProductListV1B',
};
