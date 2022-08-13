import type { ParsedUrlQuery } from 'querystring';

export function getSlug(params: ParsedUrlQuery) {
  // if (params.slug && params.slug[0] === '_global') {
  //   return 'home';
  // }

  if (Array.isArray(params.slug)) {
    return params.slug.join('/');
  }

  return 'home';
}
