import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render } from 'src/__test__/test-utils';

import { featuresV1Mock } from './FeaturesV1.mocks';
import * as stories from './FeaturesV1.stories';
import { runFeaturesV1Test } from './runFeaturesV1Test';

const { FeaturesV1 } = composeStories(stories);

// eslint-disable-next-line jest/expect-expect
test('<FeaturesV1 />', () => {
  render(<FeaturesV1 />);

  runFeaturesV1Test(featuresV1Mock);
});
