import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { HeroV1Props } from './HeroV1';
import { HeroV1 as HeroV1UI } from './HeroV1';
import { heroV1Mock } from './HeroV1.mocks';

export default {
  title: 'Sections/Hero',
  component: HeroV1UI,
} as Meta;

const Template: Story<HeroV1Props> = (args) => <HeroV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const HeroV1 = Template.bind({});
HeroV1.args = heroV1Mock;
