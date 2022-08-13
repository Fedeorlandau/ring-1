import { screen } from 'src/__test__/test-utils';

import type { FeaturesV1Props } from './FeaturesV1';

export function runFeaturesV1Test(mock: FeaturesV1Props) {
  expect(screen.getByRole('heading', { name: mock.pretitle, level: 2 })).toBeInTheDocument();
  expect(screen.getByText(mock.title)).toBeInTheDocument();
  expect(screen.getByText(mock.subtitle)).toBeInTheDocument();

  mock.features.forEach((feature) => {
    expect(screen.getByRole('term', { name: feature.title })).toBeInTheDocument();
    expect(screen.getByRole('definition', { name: feature.subtitle })).toBeInTheDocument();
  });
}
