import { act, render, screen } from '@testing-library/react';
import type { GetStaticPropsContext } from 'next';

import { CatchAllPage } from './CatchAllPage';
import { main } from './CatchAllPage.mocks';
import { getStaticPaths } from './getStaticPaths';
import { getStaticProps } from './getStaticProps';

test('<CatchAllPage />', async () => {
  const p = await getStaticPaths({});
  expect(p).toEqual({
    paths: [],
    fallback: 'blocking',
  });

  const pageData = await getStaticProps({
    params: { slug: ['home'] },
    req: { headers: {}, method: 'GET' },
  } as unknown as GetStaticPropsContext);

  expect(pageData).toEqual({ props: { main } });

  // to hide the console error message from testing library regarding the act
  // eslint-disable-next-line @typescript-eslint/await-thenable, testing-library/no-unnecessary-act
  await act(() => {
    render(
      <CatchAllPage
        // @ts-expect-error props is asserted above
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageData.props}
      />,
    );
  });

  expect(screen.getByRole('main', { name: '' })).toBeInTheDocument();
});
