import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { LinkProps } from './Link';
import { Link } from './Link';

export default {
  title: 'Elements/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <Link {...args} href="/">
    Link
  </Link>
);

export const Default = Template.bind({});
Default.args = {};

export const Gray500 = Template.bind({});
Gray500.args = {
  variant: 'gray-500',
};

export const Gray700 = Template.bind({});
Gray700.args = {
  variant: 'gray-700',
};

export const Gray900 = Template.bind({});
Gray900.args = {
  variant: 'gray-900',
};
