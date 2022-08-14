import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { act, render } from 'src/__test__/test-utils';

import { blogPostListV1Mock } from './BlogPostListV1.mocks';
import * as stories from './BlogPostListV1.stories';
import { runBlogPostListV1Test } from './runBlogPostListV1Test';

const { BlogPostListV1 } = composeStories(stories);

// eslint-disable-next-line jest/expect-expect
test('<BlogPostListV1 />', async () => {
  // to hide the console error message from testing library regarding the act
  // eslint-disable-next-line @typescript-eslint/await-thenable, testing-library/no-unnecessary-act
  await act(() => {
    render(<BlogPostListV1 />);
  });

  runBlogPostListV1Test(blogPostListV1Mock);
});
