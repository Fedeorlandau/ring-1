import { ListV1Mock } from 'src/components/modules/ListV1/ListV1.mocks';
import { ListV2Mock } from 'src/components/modules/ListV2/ListV2.mocks';
import { ListV3Mock } from 'src/components/modules/ListV3/ListV3.mocks';

import type { NavbarV1Props, NavbarV1Section } from './NavbarV1';

export const navbarV1Mock: NavbarV1Props = {
  title: 'Ring',
  logo: {
    src: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg',
    alt: 'Ring Logo',
  },
  navigation: [
    {
      title: 'Solutions',
      link: '',
      items: ListV2Mock.items,
      callsToAction: ListV3Mock,
    },
    {
      title: 'Docs',
      link: '/',
    },
    {
      title: 'Resources',
      link: '/',
      items: ListV2Mock.items,
      list: ListV1Mock,
    },
  ],
  primaryButtonLink: '/',
  primaryButtonTitle: 'Sign up',
  secondaryButtonLink: '/',
  secondaryButtonTitle: 'Sign in',
};

export const navbarV1SectionMock: NavbarV1Section = {
  id: 'NavbarV1',
  name: 'NavbarV1',
  props: navbarV1Mock,
};
