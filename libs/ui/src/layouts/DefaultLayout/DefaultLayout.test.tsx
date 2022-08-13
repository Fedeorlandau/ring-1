import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render, screen } from 'src/__test__/test-utils';

import * as stories from './DefaultLayout.stories';

const { DefaultLayout } = composeStories(stories);

test('<DefaultLayout />', () => {
  render(<DefaultLayout />);

  // header
  expect(screen.getByRole('banner', { name: '' })).toBeInTheDocument();

  // main
  expect(screen.getByRole('main', { name: '' })).toBeInTheDocument();

  // footer
  expect(screen.getByRole('contentinfo', { name: '' })).toBeInTheDocument();
});
