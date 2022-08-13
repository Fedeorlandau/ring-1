import type { HeroV1Props } from './HeroV1';

export const heroV1Mock: HeroV1Props = {
  title: 'Ring',
  logo: {
    src: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg',
    alt: 'Ring Logo',
  },
  titleFirstRow: 'Data to enrich your',
  titleSecondRow: 'online business',
  subtitle:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  image: {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    alt: 'cover',
  },
  navigation: [
    { title: 'Product', link: '#' },
    { title: 'Features', link: '#' },
    { title: 'Marketplace', link: '#' },
    { title: 'Company', link: '#' },
  ],
  buttonPrimaryLink: '/',
  buttonPrimaryText: 'Get started',
  buttonSecondaryLink: '/',
  buttonSecondaryText: 'Live Demo',
};
