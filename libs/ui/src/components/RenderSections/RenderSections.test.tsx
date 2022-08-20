import React from 'react';
import { render, screen } from 'src/__test__/test-utils';

import { FeaturesV1SectionMock } from '../sections/Features/FeaturesV1/FeaturesV1.mocks';
import { RenderSections } from './RenderSections';

describe('RenderSections', () => {
  test('With sections', () => {
    render(<RenderSections sections={[FeaturesV1SectionMock]} />);

    expect(screen.getByRole('heading', { name: FeaturesV1SectionMock.props.pretitle, level: 2 })).toBeInTheDocument();
  });

  test('With unknown section', () => {
    // @ts-expect-error force an error
    const { container } = render(<RenderSections sections={[{ id: 'unknown', name: 'unknown', props: {} }]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
