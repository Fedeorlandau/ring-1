import { screen, within } from 'src/__test__/test-utils';

import type { BlogPostListV1Props } from './BlogPostListV1';

export function runBlogPostListV1Test(mock: BlogPostListV1Props) {
  expect(screen.getByRole('heading', { name: mock.title, level: 2 })).toBeInTheDocument();
  expect(screen.getByText(mock.description)).toBeInTheDocument();

  const articles = screen.getAllByRole('article');
  articles.forEach((article, index) => {
    expect(within(article).getByRole('heading', { name: mock.list[index].title, level: 2 })).toBeInTheDocument();
    expect(within(article).getByRole('link', { name: mock.list[index].title })).toHaveAttribute(
      'href',
      mock.list[index].link,
    );
    expect(within(article).getByRole('link', { name: 'Read more' })).toHaveAttribute('href', mock.list[index].link);
  });
}
