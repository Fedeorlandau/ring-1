import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { ListV1Props } from './ListV1';
import { ListV1 as ListV1UI } from './ListV1';
import { ListV1Mock } from './ListV1.mocks';

export default {
  title: 'Modules/List',
  component: ListV1UI,
} as Meta;

const Template: Story<ListV1Props> = (args) => <ListV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ListV1 = Template.bind({});
ListV1.args = ListV1Mock;
