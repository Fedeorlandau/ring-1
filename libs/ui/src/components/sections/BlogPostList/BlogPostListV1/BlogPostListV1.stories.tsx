import type { BlogPostListV1UIType } from '@ring/contracts';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { BlogPostListV1 as BlogPostListV1UI } from './BlogPostListV1';
import { BlogPostListV1Mock } from './BlogPostListV1.mocks';

export default {
  title: 'Sections/BlogPostList',
  component: BlogPostListV1UI,
} as Meta;

const Template: Story<BlogPostListV1UIType> = (args) => <BlogPostListV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const BlogPostListV1 = Template.bind({});
BlogPostListV1.args = BlogPostListV1Mock;
