import type { UISections } from '@ring/ui';
import { blogPost } from 'src/api';

export const main: UISections = [
  {
    id: '00',
    name: 'HeroV1',
    props: {
      title: 'Lorenzo GM',
      logo: {
        src: '',
        alt: 'Lorenzo GM',
      },
      navigation: [
        { title: 'Blog', link: '/blog' },
        { title: 'GitHub', link: 'https://github.com/lorenzogm/lorenzogm' },
      ],
      titleFirstRow: "Hello, I'm Lorenzo and",
      titleSecondRow: 'I do stuff with code',
      subtitle: 'The journey of a developer working in the React and Node ecosystem.',
      buttonPrimaryText: 'Read the blog',
      buttonPrimaryLink: '/blog',
      image: {
        src: '/logo.png',
        alt: 'Lorenzo GM',
      },
    },
  },
  {
    id: '01',
    name: 'BlogPostListV1',
    props: {
      description: 'The journey of a developer working in the React and Node ecosystem',
      title: 'Blog recommendations',
      list: blogPost.find(),
    },
  },
];
