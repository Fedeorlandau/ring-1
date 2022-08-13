import { ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Button } from 'src/components/elements/Button';
import { Heading } from 'src/components/elements/Heading';
import { Image } from 'src/components/elements/Image';
import { Paragraph } from 'src/components/elements/Paragraph';
import { cn } from 'src/utils';

export type BlogPostListV1Section = {
  id: string;
  name: 'BlogPostListV1';
  props: BlogPostListV1Props;
};

export type BlogPostListV1Props = {
  description: string;
  title: string;
  list: Array<BlogPost>;
};

type BlogPost = {
  date: string;
  description: string;
  link: string;
  tags: Array<string>;
  title: string;
  author?: string;
};

function useTheme() {
  return 'light';
}

export function BlogPostListV1({ list, description, title }: BlogPostListV1Props) {
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
          <Heading tag="h2" variant="FeaturesV1A">
            {title}
          </Heading>
          <Paragraph variant="md">{description}</Paragraph>
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
                <Heading variant="ProductListV1A">
                  <a href={blogPost.link}>{blogPost.title}</a>
                </Heading>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{blogPost.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {blogPost.author && (
                    <>
                      <Image
                        alt="Jese Leos avatar"
                        className="h-7 w-7 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      />
                      <span
                        className={cn('font-medium', {
                          'text-gray-500': theme === 'light',
                          'text-white': theme === 'dark',
                        })}
                      >
                        {blogPost.author}
                      </span>
                    </>
                  )}
                </div>
                <Button href={blogPost.link} IconEnd={ChevronRightIcon} variant="primary">
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
