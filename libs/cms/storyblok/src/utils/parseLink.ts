export type StoryblokLink =
  | {
      cached_url?: string;
      linktype?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      linktype?: 'story';
      story: {
        url: string;
      };
    }
  | {
      url?: string;
      cached_url?: string;
      linktype?: 'asset' | 'url';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: 'email';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [k: string]: any;
    };

export function parseLink(link: StoryblokLink): string {
  if (link.linktype === 'url') {
    return link.url as string;
  }

  if (link.linktype === 'story') {
    return (link.story ? link.story.url : '/') as string;
  }

  return '/';
}
