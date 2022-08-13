import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { ParagraphProps } from './Paragraph';
import { Paragraph } from './Paragraph';

export default {
  title: 'Elements/Paragraph',
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args) => (
  <Paragraph {...args}>
    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
    veniam occaecat fugiat aliqua.
  </Paragraph>
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
