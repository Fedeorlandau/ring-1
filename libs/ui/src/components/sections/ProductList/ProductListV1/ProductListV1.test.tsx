import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { render } from 'src/__test__/test-utils';

import { productListV1Mock } from './ProductListV1.mocks';
import * as stories from './ProductListV1.stories';
import { runProductListV1Test } from './runProductListV1Test';

const { ProductListV1 } = composeStories(stories);

// eslint-disable-next-line jest/expect-expect
test('<ProductListV1 />', () => {
  render(<ProductListV1 />);

  runProductListV1Test(productListV1Mock);
});
