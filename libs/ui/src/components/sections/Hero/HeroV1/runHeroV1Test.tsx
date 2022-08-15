import { screen } from 'src/__test__/test-utils';

import type { HeroV1Props } from './HeroV1';

export function runHeroV1Test(mock: HeroV1Props) {
  expect(screen.getByRole('navigation', { name: 'main' })).toBeInTheDocument();

  expect(screen.getByRole('img', { name: mock.logo.alt })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: `${mock.title} ${mock.logo.alt}` })).toHaveAttribute('href', '/');

  mock.navigation.forEach((item) => {
    expect(screen.getByRole('link', { name: item.title })).toHaveAttribute('href', item.link);
  });

  expect(screen.getByText(mock.titleFirstRow)).toBeInTheDocument();
  expect(screen.getByText(mock.titleSecondRow)).toBeInTheDocument();

  expect(screen.getByRole('link', { name: mock.buttonPrimaryText })).toHaveAttribute('href', mock.buttonPrimaryLink);
  expect(screen.getByRole('link', { name: mock.buttonSecondaryText })).toHaveAttribute(
    'href',
    mock.buttonSecondaryLink,
  );

  expect(screen.getByRole('img', { name: mock.image.alt })).toBeInTheDocument();
}
