import type { GetStaticPropsContext } from 'next';

export function getSlug(params: GetStaticPropsContext['params']) {
  if (!params || !params.slug) {
    return '/';
  }

  if (typeof params.slug === 'string') {
    return params.slug;
  }

  return params.slug.join('/');
}
