import type { FeaturesV1UIType } from '@ring/contracts';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { FeaturesV1 as FeaturesV1UI } from './FeaturesV1';
import { FeaturesV1Mock } from './FeaturesV1.mocks';

export default {
  title: 'Sections/Features',
  component: FeaturesV1UI,
} as Meta;

const Template: Story<FeaturesV1UIType> = (args) => <FeaturesV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const FeaturesV1 = Template.bind({});
FeaturesV1.args = FeaturesV1Mock;
