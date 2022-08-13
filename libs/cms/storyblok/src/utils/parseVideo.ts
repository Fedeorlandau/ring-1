import type { Video } from '@ring/ui-tailwind';

export type StoryblokVideo = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
};

export function parseVideo(video: StoryblokVideo): Video {
  return { src: video.filename, alt: video.alt || video.name };
}
