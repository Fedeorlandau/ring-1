import type { BlogPostListV1Props, BlogPostListV1Section } from './BlogPostListV1';

export const blogPostListV1Mock: BlogPostListV1Props = {
  title: 'title',
  description: 'description',
  list: [
    {
      date: 'October 07, 2020',
      description: 'Must have dev tools',
      link: '/blog/2020-10-07-4-pain-points-to-make-your-project-more-maintainable',
      tags: ['project-management'],
      title: '4 Pain-points to make your project more maintainable',
      author: 'John Doe',
    },
    {
      date: 'October 22, 2020',
      description: 'Comparison between rendering on the client, server and static-site generation',
      link: '/blog/2020-10-22-rendering-on-the-web',
      tags: ['rendering'],
      title: 'Rendering on the web',
    },
    {
      date: 'November 02, 2020',
      description: 'Building a blog with Next.js, Tailwind CSS and Contentful as headless CMS',
      link: '/blog/2020-11-02-blog-with-nextjs-and-contentful',
      tags: ['blog'],
      title: 'Blog with Next.js and Contentful',
    },
  ],
};

export const blogPostListV1SectionMock: BlogPostListV1Section = {
  id: 'BlogPostListV1',
  name: 'BlogPostListV1',
  props: blogPostListV1Mock,
};
