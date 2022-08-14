import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Button } from 'src/components/elements/Button';
import type { IconProps } from 'src/components/elements/Icon/Icon';
import { Icon } from 'src/components/elements/Icon/Icon';
import { Image } from 'src/components/elements/Image';
import { Link } from 'src/components/elements/Link';
import type { ListV1Props } from 'src/components/modules/ListV1';
import { ListV1 } from 'src/components/modules/ListV1';
import type { ListV2Props } from 'src/components/modules/ListV2';
import { ListV2 } from 'src/components/modules/ListV2';
import type { ListV3Props } from 'src/components/modules/ListV3';
import { ListV3 } from 'src/components/modules/ListV3';
import type { ImageModel } from 'src/types';
import { cn } from 'src/utils';

export type NavbarV1Section = {
  id: string;
  name: 'NavbarV1';
  props: NavbarV1Props;
};

export type NavbarV1Props = {
  title: string;
  logo: ImageModel;
  navigation: Array<NavigationItem>;
  primaryButtonLink: string;
  primaryButtonTitle: string;
  secondaryButtonLink: string;
  secondaryButtonTitle: string;
};

type NavigationItem = {
  title: string;
  link: string;
  icon?: IconProps['name'];
  description?: string;
  items?: ListV2Props['items'];
  callsToAction?: ListV3Props;
  list?: ListV1Props;
};

export function NavbarV1({
  title,
  logo,
  navigation,
  primaryButtonLink,
  primaryButtonTitle,
  secondaryButtonLink,
  secondaryButtonTitle,
}: NavbarV1Props) {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">{title}</span>
              <Image alt={logo.alt} className="h-8 w-auto sm:h-10" src={logo.src} />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Icon name="MenuIcon" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {navigation.map((navigationLevelOneItem) => {
              if (navigationLevelOneItem.items === undefined) {
                return (
                  <Link key={navigationLevelOneItem.title} href={navigationLevelOneItem.link} variant="gray-500">
                    {navigationLevelOneItem.title}
                  </Link>
                );
              }

              return (
                <Popover key={navigationLevelOneItem.title} className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={cn(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                        )}
                      >
                        <span>{navigationLevelOneItem.title}</span>
                        <div className="ml-2">
                          <Icon color={open ? 'dark' : 'light'} name="ChevronDownIcon" size="sm" variant="outline" />
                        </div>
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            {navigationLevelOneItem?.items && (
                              <ListV2
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                items={navigationLevelOneItem.items}
                              />
                            )}

                            {navigationLevelOneItem?.callsToAction && (
                              <ListV3
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...navigationLevelOneItem.callsToAction}
                              />
                            )}

                            {navigationLevelOneItem?.list && (
                              <ListV1
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...navigationLevelOneItem.list}
                              />
                            )}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              );
            })}
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <div className="whitespace-nowrap">
              <Link href={secondaryButtonLink} variant="gray-500">
                {secondaryButtonTitle}
              </Link>
            </div>
            <div className="ml-8 whitespace-nowrap">
              <Button href={primaryButtonLink} variant="primary">
                {primaryButtonTitle}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden" focus>
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image alt={logo.alt} className="h-8 w-auto" src={logo.src} />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <Icon name="XIcon" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav aria-label="main" className="grid gap-y-8">
                  {navigation[0]?.items && (
                    <ListV2
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      items={navigation[0].items}
                    />
                  )}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {navigation.map((item) => (
                  <Link key={item.title} href={item.link}>
                    {item.title}
                  </Link>
                ))}
              </div>
              <div>
                <a
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  href={primaryButtonLink}
                >
                  {primaryButtonTitle}
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  <a className="text-indigo-600 hover:text-indigo-500" href={secondaryButtonLink}>
                    {secondaryButtonTitle}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
