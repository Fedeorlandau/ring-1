import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from 'src/__test__/test-utils';

import { NavbarV1Mock } from './NavbarV1.mocks';
import * as stories from './NavbarV1.stories';

const { NavbarV1 } = composeStories(stories);

test('<NavbarV1 />', async () => {
  render(<NavbarV1 />);

  expect(screen.getByRole('navigation', { name: '' })).toBeInTheDocument();

  expect(screen.getByRole('img', { name: NavbarV1Mock.logo.alt })).toBeInTheDocument();
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  expect(screen.getByRole('link', { name: `${NavbarV1Mock.title} ${NavbarV1Mock.logo.alt}` })).toHaveAttribute(
    'href',
    '/',
  );

  NavbarV1Mock.navigation.forEach((item) => {
    if (item.items) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(screen.getByRole('button', { name: item.title })).toBeInTheDocument();
    } else {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(screen.getByRole('link', { name: item.title })).toHaveAttribute('href', item.link);
    }
  });

  expect(screen.getByRole('link', { name: NavbarV1Mock.primaryButtonTitle })).toHaveAttribute(
    'href',
    NavbarV1Mock.primaryButtonLink,
  );
  expect(screen.getByRole('link', { name: NavbarV1Mock.secondaryButtonTitle })).toHaveAttribute(
    'href',
    NavbarV1Mock.secondaryButtonLink,
  );

  await userEvent.click(screen.getByRole('button', { name: NavbarV1Mock.navigation[0].title }));

  NavbarV1Mock.navigation[0].items?.items?.forEach((item) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    expect(screen.getByRole('link', { name: `${item.title} ${item.description}` })).toHaveAttribute('href', item.link);
  });

  NavbarV1Mock.navigation[0].callsToAction?.items.forEach((item) => {
    expect(screen.getByRole('link', { name: item.title })).toHaveAttribute('href', item.link);
  });

  await userEvent.click(screen.getByRole('button', { name: NavbarV1Mock.navigation[2].title }));

  NavbarV1Mock.navigation[2].items?.items?.forEach((item) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    expect(screen.getByRole('link', { name: `${item.title} ${item.description}` })).toHaveAttribute('href', item.link);
  });

  expect(screen.getByRole('heading', { name: NavbarV1Mock.navigation[2].list?.title, level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: NavbarV1Mock.navigation[2].list?.link.title })).toHaveAttribute(
    'href',
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    NavbarV1Mock.navigation[2].list?.link.link,
  );
  NavbarV1Mock.navigation[2].list?.items.forEach((item) => {
    expect(screen.getByRole('link', { name: item.title })).toHaveAttribute('href', item.link);
  });
});
