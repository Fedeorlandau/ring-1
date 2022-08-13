import type { ContentPageStoryblok } from './generated';

export type Story = {
  _uid: string;
  content: ContentPageStoryblok['content'];
};
