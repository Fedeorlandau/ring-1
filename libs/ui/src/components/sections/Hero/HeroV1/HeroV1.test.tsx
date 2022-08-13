import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render } from 'src/__test__/test-utils';

import { heroV1Mock } from './HeroV1.mocks';
import * as stories from './HeroV1.stories';
import { runHeroV1Test } from './runHeroV1Test';

const { HeroV1 } = composeStories(stories);

// eslint-disable-next-line jest/expect-expect
test('<HeroV1 />', () => {
  render(<HeroV1 />);

  runHeroV1Test(heroV1Mock);
});
