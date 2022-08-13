import StoryblokClient from 'storyblok-js-client';

export const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});
