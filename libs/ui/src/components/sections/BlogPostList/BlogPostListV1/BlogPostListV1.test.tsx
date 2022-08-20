import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render, screen, within } from 'src/__test__/test-utils';

import { BlogPostListV1Mock } from './BlogPostListV1.mocks';
import * as stories from './BlogPostListV1.stories';

const { BlogPostListV1 } = composeStories(stories);

test('<BlogPostListV1 />', () => {
  render(<BlogPostListV1 />);

  expect(screen.getByRole('heading', { name: BlogPostListV1Mock.title, level: 2 })).toBeInTheDocument();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  expect(screen.getByText(BlogPostListV1Mock.description)).toBeInTheDocument();

  const articles = screen.getAllByRole('article');
  articles.forEach((article, index) => {
    expect(
      within(article).getByRole('heading', { name: BlogPostListV1Mock.list[index].title, level: 2 }),
    ).toBeInTheDocument();
    expect(within(article).getByRole('link', { name: BlogPostListV1Mock.list[index].title })).toHaveAttribute(
      'href',
      BlogPostListV1Mock.list[index].link,
    );
    expect(within(article).getByRole('link', { name: 'Read more' })).toHaveAttribute(
      'href',
      BlogPostListV1Mock.list[index].link,
    );
  });
});
