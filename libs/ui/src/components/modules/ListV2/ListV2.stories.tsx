import type { ListV2Type } from '@ring/contracts';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ListV2 as ListV2UI } from './ListV2';
import { ListV2Mock } from './ListV2.mocks';

export default {
  title: 'Modules/List',
  component: ListV2UI,
} as Meta;

const Template: Story<ListV2Type> = (args) => <ListV2UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ListV2 = Template.bind({});
ListV2.args = ListV2Mock;
