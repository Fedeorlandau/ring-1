import type { ListV3Type } from '@ring/contracts';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ListV3 as ListV3UI } from './ListV3';
import { ListV3Mock } from './ListV3.mocks';

export default {
  title: 'Modules/List',
  component: ListV3UI,
} as Meta;

const Template: Story<ListV3Type> = (args) => <ListV3UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ListV3 = Template.bind({});
ListV3.args = ListV3Mock;
