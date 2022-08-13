import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render } from 'src/__test__/test-utils';

import * as stories from './VideoV1.stories';

const { VideoV1 } = composeStories(stories);

// eslint-disable-next-line jest/expect-expect
test('<VideoV1 />', () => {
  render(<VideoV1 />);
});
