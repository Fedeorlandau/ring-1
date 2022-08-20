import type { VideoType } from '@ring/contracts';
import React from 'react';

export type VideoV1Props = {
  autoPlay?: boolean;
  video: VideoType;
};

export function VideoV1({ autoPlay, video }: VideoV1Props) {
  return (
    <section>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video autoPlay={autoPlay} controls width="100%">
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
