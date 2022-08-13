import type { GetStaticProps } from 'next';

import { main } from './CatchAllPage.mocks';

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = () => {
  return { props: { main } };
};
