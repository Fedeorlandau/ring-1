import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render } from 'src/__test__/test-utils';

import { navbarV1Mock } from './NavbarV1.mocks';
import * as stories from './NavbarV1.stories';
import { runNavbarV1Test } from './runNavbarV1Test';

const { NavbarV1 } = composeStories(stories);

// eslint-disable-next-line jest/expect-expect
test('<NavbarV1 />', async () => {
  render(<NavbarV1 />);

  await runNavbarV1Test(navbarV1Mock);
});
