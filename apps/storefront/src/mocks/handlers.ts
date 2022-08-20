import { getEntriesByPageMock } from '@ring/contentful/src/api/getSections/getSections.mocks';
import { getProductsHandler } from '@ring/swell/src/components/sections/ProductListV1Commerce/ProductListV1Commerce.mocks';

export const handlers = [getEntriesByPageMock, getProductsHandler];
