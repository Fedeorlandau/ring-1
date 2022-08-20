import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render, screen } from 'src/__test__/test-utils';

import { FeaturesV1Mock } from './FeaturesV1.mocks';
import * as stories from './FeaturesV1.stories';

const { FeaturesV1 } = composeStories(stories);

test('<FeaturesV1 />', () => {
  render(<FeaturesV1 />);

  expect(screen.getByRole('heading', { name: FeaturesV1Mock.pretitle, level: 2 })).toBeInTheDocument();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  expect(screen.getByText(FeaturesV1Mock.title)).toBeInTheDocument();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  expect(screen.getByText(FeaturesV1Mock.subtitle)).toBeInTheDocument();

  FeaturesV1Mock.features.forEach((feature) => {
    expect(screen.getByRole('term', { name: feature.title })).toBeInTheDocument();
    expect(screen.getByRole('definition', { name: feature.subtitle })).toBeInTheDocument();
  });
});
