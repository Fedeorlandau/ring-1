import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render } from 'src/__test__/test-utils';

import { blogPostListV1Mock } from './BlogPostListV1.mocks';
import * as stories from './BlogPostListV1.stories';
import { runBlogPostListV1Test } from './runBlogPostListV1Test';

const { BlogPostListV1 } = composeStories(stories);

// eslint-disable-next-line jest/expect-expect
test('<BlogPostListV1 />', () => {
  render(<BlogPostListV1 />);

  runBlogPostListV1Test(blogPostListV1Mock);
});
