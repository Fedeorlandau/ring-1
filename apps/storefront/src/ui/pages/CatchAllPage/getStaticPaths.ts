import type { GetStaticPaths } from 'next';

// eslint-disable-next-line func-style
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
