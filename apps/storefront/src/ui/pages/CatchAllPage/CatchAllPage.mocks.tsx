import { getSectionsExpectedResult } from '@ring/cms/src/api/getSections/getSections.mocks';
import { getProductsResultMock } from '@ring/commerce/src/components/sections/ProductListV1Commerce/ProductListV1Commerce.mocks';
import type { UISections } from '@ring/ui';

export const header: UISections = [];

export const main: UISections = getSectionsExpectedResult.map((section) => {
  if (section.name === 'ProductListV1') {
    return { ...section, props: { ...section.props, ...getProductsResultMock } };
  }
  return section;
});
