import React from 'react';
import type { VideoModel } from 'src/types';

export type VideoV1Props = {
  autoPlay?: boolean;
  video: VideoModel;
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
