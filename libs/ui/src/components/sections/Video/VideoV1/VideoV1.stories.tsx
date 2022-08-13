import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { VideoV1Props } from './VideoV1';
import { VideoV1 as VideoV1UI } from './VideoV1';
import { videoV1Mock } from './VideoV1.mocks';

export default {
  title: 'Sections/Video',
  component: VideoV1UI,
} as Meta;

const Template: Story<VideoV1Props> = (args) => <VideoV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const VideoV1 = Template.bind({});
VideoV1.args = videoV1Mock;
