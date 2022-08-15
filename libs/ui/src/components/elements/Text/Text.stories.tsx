import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { TextProps } from './Text';
import { Text } from './Text';

export default {
  title: 'Elements/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text {...args}>
    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
    veniam occaecat fugiat aliqua.
  </Text>
);

export const XS = Template.bind({});
XS.args = {
  variant: 'xs',
};

export const SM = Template.bind({});
SM.args = {
  variant: 'sm',
};

export const MD = Template.bind({});
MD.args = {
  variant: 'md',
};

export const LG = Template.bind({});
LG.args = {
  variant: 'lg',
};

export const XL = Template.bind({});
XL.args = {
  variant: 'xl',
};
