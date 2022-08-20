import type { NavbarV1UIType } from '@ring/contracts';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { NavbarV1 as NavbarV1UI } from './NavbarV1';
import { NavbarV1Mock } from './NavbarV1.mocks';

export default {
  title: 'Sections/Navbar',
  component: NavbarV1UI,
} as Meta;

const Template: Story<NavbarV1UIType> = (args) => <NavbarV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const NavbarV1 = Template.bind({});
NavbarV1.args = NavbarV1Mock;
