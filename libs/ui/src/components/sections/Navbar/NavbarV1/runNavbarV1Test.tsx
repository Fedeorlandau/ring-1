import userEvent from '@testing-library/user-event';
import { screen } from 'src/__test__/test-utils';

import type { NavbarV1Props } from './NavbarV1';

export async function runNavbarV1Test(mock: NavbarV1Props) {
  expect(screen.getByRole('navigation', { name: '' })).toBeInTheDocument();

  expect(screen.getByRole('img', { name: mock.logo.alt })).toHaveAttribute('src', mock.logo.src);
  expect(screen.getByRole('link', { name: `${mock.title} ${mock.logo.alt}` })).toHaveAttribute('href', '/');

  mock.navigation.forEach((item) => {
    if (item.items) {
      expect(screen.getByRole('button', { name: item.title })).toBeInTheDocument();
    } else {
      expect(screen.getByRole('link', { name: item.title })).toHaveAttribute('href', item.link);
    }
  });

  expect(screen.getByRole('link', { name: mock.primaryButtonTitle })).toHaveAttribute('href', mock.primaryButtonLink);
  expect(screen.getByRole('link', { name: mock.secondaryButtonTitle })).toHaveAttribute(
    'href',
    mock.secondaryButtonLink,
  );

  await userEvent.click(screen.getByRole('button', { name: mock.navigation[0].title }));

  mock.navigation[0].items?.forEach((item) => {
    expect(screen.getByRole('link', { name: `${item.title} ${item.description}` })).toHaveAttribute('href', item.link);
  });

  mock.navigation[0].callsToAction?.items.forEach((item) => {
    expect(screen.getByRole('link', { name: item.title })).toHaveAttribute('href', item.link);
  });

  await userEvent.click(screen.getByRole('button', { name: mock.navigation[2].title }));

  mock.navigation[2].items?.forEach((item) => {
    expect(screen.getByRole('link', { name: `${item.title} ${item.description}` })).toHaveAttribute('href', item.link);
  });

  expect(screen.getByRole('heading', { name: mock.navigation[2].list?.title, level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: mock.navigation[2].list?.link.title })).toHaveAttribute(
    'href',
    mock.navigation[2].list?.link.link,
  );
  mock.navigation[2].list?.items.forEach((item) => {
    expect(screen.getByRole('link', { name: item.title })).toHaveAttribute('href', item.link);
  });
}
