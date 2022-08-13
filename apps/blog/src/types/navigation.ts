export type Navigation = Array<NavigationItem>;

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};
