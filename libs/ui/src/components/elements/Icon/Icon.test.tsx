import React from 'react';
import { render } from 'src/__test__/test-utils';

import { Icon } from './Icon';

describe('<Icon />', () => {
  test('Invalid variant', () => {
    expect(() => {
      // @ts-expect-error force invalid variant
      render(<Icon name="AcademicCapIcon" variant="UNKNOWN" />);
    }).toThrow('The icon with name "AcademicCapIcon" has an invalid variant.');
  });
});
