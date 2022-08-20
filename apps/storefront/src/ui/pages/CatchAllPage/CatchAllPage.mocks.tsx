import { getSectionsExpectedResult } from '@ring/cms/src/api/getSections/getSections.mocks';
import { getProductsResultMock } from '@ring/commerce/src/components/sections/ProductListV1Commerce/ProductListV1Commerce.mocks';
import type { Sections } from '@ring/contracts';

export const header: Sections = [];

// @ts-expect-error won't fix this today
export const main: Sections = getSectionsExpectedResult.map((section) => {
  if (section.name === 'ProductListV1') {
    return { ...section, props: { ...section.props, ...getProductsResultMock } };
  }
  return section;
});
