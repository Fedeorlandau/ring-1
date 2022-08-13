import { getSlug } from './getSlug';

describe('getSlug', () => {
  test('with empty object', () => {
    const slug = getSlug({});

    expect(slug).toEqual('/');
  });

  test('with slug as string', () => {
    const slug = getSlug({ slug: 'my-slug' });

    expect(slug).toEqual('my-slug');
  });
});
