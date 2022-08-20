import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render, screen } from 'src/__test__/test-utils';

import { HeroV1Mock } from './HeroV1.mocks';
import * as stories from './HeroV1.stories';

const { HeroV1 } = composeStories(stories);

test('<HeroV1 />', () => {
  render(<HeroV1 />);

  expect(screen.getByRole('navigation', { name: 'main' })).toBeInTheDocument();

  expect(screen.getByRole('img', { name: HeroV1Mock.logo.alt })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: `${HeroV1Mock.title} ${HeroV1Mock.logo.alt}` })).toHaveAttribute('href', '/');

  HeroV1Mock.navigation.forEach((item) => {
    expect(screen.getByRole('link', { name: item.title })).toHaveAttribute('href', item.link);
  });

  expect(screen.getByText(HeroV1Mock.titleFirstRow)).toBeInTheDocument();
  expect(screen.getByText(HeroV1Mock.titleSecondRow)).toBeInTheDocument();

  expect(screen.getByRole('link', { name: HeroV1Mock.buttonPrimaryText })).toHaveAttribute(
    'href',
    HeroV1Mock.buttonPrimaryLink,
  );
  if (HeroV1Mock.buttonSecondaryText && HeroV1Mock.buttonSecondaryLink) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(screen.getByRole('link', { name: HeroV1Mock.buttonSecondaryText })).toHaveAttribute(
      'href',
      HeroV1Mock.buttonSecondaryLink,
    );
  }

  expect(screen.getByRole('img', { name: HeroV1Mock.image.alt })).toBeInTheDocument();
});
