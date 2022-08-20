import type { NavbarV1sectionType, NavbarV1UIType } from '@ring/contracts';
import { ListV1Mock } from 'src/components/modules/ListV1/ListV1.mocks';
import { ListV2Mock } from 'src/components/modules/ListV2/ListV2.mocks';
import { ListV3Mock } from 'src/components/modules/ListV3/ListV3.mocks';

export const NavbarV1Mock: NavbarV1UIType = {
  title: 'Ring',
  logo: {
    src: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg',
    alt: 'Ring Logo',
  },
  navigation: [
    {
      title: 'Solutions',
      link: '',
      items: ListV2Mock,
      callsToAction: ListV3Mock,
    },
    {
      title: 'Docs',
      link: '/',
    },
    {
      title: 'Resources',
      link: '/',
      items: ListV2Mock,
      list: ListV1Mock,
    },
  ],
  primaryButtonLink: '/',
  primaryButtonTitle: 'Sign up',
  secondaryButtonLink: '/',
  secondaryButtonTitle: 'Sign in',
};

export const NavbarV1SectionMock: NavbarV1sectionType = {
  id: 'NavbarV1',
  name: 'NavbarV1',
  props: NavbarV1Mock,
};
