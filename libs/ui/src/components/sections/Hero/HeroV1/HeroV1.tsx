import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Button } from 'src/components/elements/Button';
import { Icon } from 'src/components/elements/Icon';
import { Image } from 'src/components/elements/Image';
import { Link } from 'src/components/elements/Link';
import { Text } from 'src/components/elements/Text';
import type { ImageModel } from 'src/types';

export type HeroV1Section = {
  id: string;
  name: 'HeroV1';
  props: HeroV1Props;
};

export type HeroV1Props = {
  title: string;
  logo: ImageModel;
  buttonPrimaryLink: string;
  buttonPrimaryText: string;
  buttonSecondaryLink?: string;
  buttonSecondaryText?: string;
  image: ImageModel;
  navigation: Array<{ title: string; link: string }>;
  subtitle: string;
  titleFirstRow: string;
  titleSecondRow: string;
};

export function HeroV1({
  title,
  logo,
  titleFirstRow,
  titleSecondRow,
  subtitle,
  image,
  navigation,
  buttonPrimaryLink,
  buttonPrimaryText,
  buttonSecondaryLink,
  buttonSecondaryText,
}: HeroV1Props) {
  return (
    <section className="relative overflow-hidden bg-white ">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            aria-hidden="true"
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav aria-label="main" className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <Link href="/">
                      <span className="sr-only">{title}</span>
                      <Image alt={logo.alt} className="h-8 w-auto sm:h-10" src={logo.src} />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <Icon name="MenuIcon" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <Link key={item.title} href={item.link} variant="gray-500">
                      {item.title}
                    </Link>
                  ))}
                  {/* <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/">
                    Log in
                  </a> */}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                focus
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <Image alt={logo.alt} className="h-8 w-auto" src={logo.src} />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <Icon name="XIcon" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation?.map((item) => (
                      <Link key={item.title} href={item.link} variant="gray-700">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  {/* <a
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                    href="/"
                  >
                    Log in
                  </a> */}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <Text tag="h2" variant="4xl">
                <span className="block xl:inline">{titleFirstRow}</span>{' '}
                <span className="block text-indigo-600 xl:inline">{titleSecondRow}</span>
              </Text>
              <Text variant="lg">{subtitle}</Text>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button href={buttonPrimaryLink} variant="primary">
                  {buttonPrimaryText}
                </Button>
                {buttonSecondaryText && buttonSecondaryLink && (
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button href={buttonSecondaryLink} variant="secondary">
                      {buttonSecondaryText}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          alt={image.alt}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={image.src}
        />
      </div>
    </section>
  );
}
