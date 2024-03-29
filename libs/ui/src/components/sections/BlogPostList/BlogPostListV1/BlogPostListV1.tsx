import type { BlogPostListV1UIType } from '@ring/contracts';
import React from 'react';
import { Button } from 'src/components/elements/Button';
import { Image } from 'src/components/elements/Image';
import { Link } from 'src/components/elements/Link';
import { Text } from 'src/components/elements/Text';
import { cn } from 'src/utils';

function useTheme() {
  return 'light';
}

export function BlogPostListV1({ list, description, title }: BlogPostListV1UIType) {
  const theme = useTheme();

  return (
    <section
      className={cn({
        'bg-white': theme === 'light',
        'bg-gray-900': theme === 'dark',
      })}
    >
      <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <Text tag="h2" variant="4xl">
            {title}
          </Text>
          <Text variant="md">{description}</Text>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {list.map((blogPost) => (
            <article
              key={blogPost.title}
              className={cn('flex flex-col justify-between rounded-lg border p-6 shadow-md', {
                'border-gray-200 bg-white': theme === 'light',
                'border-gray-700 bg-gray-800': theme === 'dark',
              })}
            >
              <div>
                <div className="mb-5 flex items-center justify-between text-gray-500">
                  <span className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
                    <svg
                      className="mr-1 h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    {blogPost.tags[0]}
                  </span>
                  <span className="text-sm">{blogPost.date}</span>
                </div>
                <Text tag="h2" variant="2xl">
                  <Link href={blogPost.link}>{blogPost.title}</Link>
                </Text>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{blogPost.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {blogPost.author && (
                    <>
                      <div className="relative h-7 w-7">
                        <Image
                          alt="Jese Leos avatar"
                          className="rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        />
                      </div>
                      <Text variant="xs">{blogPost.author}</Text>
                    </>
                  )}
                </div>
                <Button
                  href={blogPost.link}
                  iconEnd={{ name: 'ChevronRightIcon', size: 'md', color: 'light', variant: 'outline' }}
                  variant="primary"
                >
                  Read more
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
