import type { GetStaticPropsContext } from 'next';
import { blogPost } from 'src/api';
import { act, render, screen } from 'src/ui/test-utils';

import { CatchAllPage } from './CatchAllPage';
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

  expect(pageData).toEqual({ props: { main: [blogPost.find()] } });

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
