import type { Meta, Story } from '@storybook/react';
import React from 'react';
import { FeaturesV1SectionMock } from 'src/components/sections/Features/FeaturesV1/FeaturesV1.mocks';
import { NavbarV1SectionMock } from 'src/components/sections/Navbar/NavbarV1/NavbarV1.mocks';
import { ProductListV1SectionMock } from 'src/components/sections/ProductList/ProductListV1/ProductListV1.mocks';

import type { DefaultLayoutProps } from './DefaultLayout';
import { DefaultLayout as DefaultLayoutUI } from './DefaultLayout';

export default {
  title: 'Layouts/DefaultLayout',
  component: DefaultLayoutUI,
} as Meta;

const Template: Story<DefaultLayoutProps> = (args) => <DefaultLayoutUI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const DefaultLayout = Template.bind({});
DefaultLayout.args = {
  header: [NavbarV1SectionMock],
  main: [FeaturesV1SectionMock],
  footer: [ProductListV1SectionMock],
};
