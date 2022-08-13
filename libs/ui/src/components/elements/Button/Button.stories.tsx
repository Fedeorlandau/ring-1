import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { ButtonProps } from './Button';
import { Button } from './Button';

export default {
  title: 'Elements/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} href="/">
    Button
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
