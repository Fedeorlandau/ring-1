import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { act, render } from 'src/__test__/test-utils';

import { heroV1Mock } from './HeroV1.mocks';
import * as stories from './HeroV1.stories';
import { runHeroV1Test } from './runHeroV1Test';

const { HeroV1 } = composeStories(stories);

// eslint-disable-next-line jest/expect-expect
test('<HeroV1 />', async () => {
  // to hide the console error message from testing library regarding the act
  // eslint-disable-next-line @typescript-eslint/await-thenable, testing-library/no-unnecessary-act
  await act(() => {
    render(<HeroV1 />);
  });

  runHeroV1Test(heroV1Mock);
});
