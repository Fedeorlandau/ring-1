import type { GetStaticProps } from 'next';
import { blogPost } from 'src/api';

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = () => {
  const blogPostEntries = blogPost.find();

  return { props: { main: [blogPostEntries] } };
};
