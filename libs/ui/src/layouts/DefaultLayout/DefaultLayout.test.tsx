import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { act, render, screen } from 'src/__test__/test-utils';

import * as stories from './DefaultLayout.stories';

const { DefaultLayout } = composeStories(stories);

test('<DefaultLayout />', async () => {
  // to hide the console error message from testing library regarding the act
  // eslint-disable-next-line @typescript-eslint/await-thenable, testing-library/no-unnecessary-act
  await act(() => {
    render(<DefaultLayout />);
  });

  // header
  expect(screen.getByRole('banner', { name: '' })).toBeInTheDocument();

  // main
  expect(screen.getByRole('main', { name: '' })).toBeInTheDocument();

  // footer
  expect(screen.getByRole('contentinfo', { name: '' })).toBeInTheDocument();
});
