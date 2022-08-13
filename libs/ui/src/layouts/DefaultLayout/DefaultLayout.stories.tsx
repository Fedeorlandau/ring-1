import type { Meta, Story } from '@storybook/react';
import React from 'react';
import { featuresV1SectionMock } from 'src/components/sections/Features/FeaturesV1/FeaturesV1.mocks';
import { navbarV1SectionMock } from 'src/components/sections/Navbar/NavbarV1/NavbarV1.mocks';
import { productListV1SectionMock } from 'src/components/sections/ProductList/ProductListV1/ProductListV1.mocks';

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
  header: [navbarV1SectionMock],
  // @ts-expect-error forcing an error for testing
  main: [featuresV1SectionMock, { id: 'unknown', name: 'unknown', props: {} }],
  footer: [productListV1SectionMock],
};
