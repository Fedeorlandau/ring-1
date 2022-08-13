import type { ProductListV1Props, ProductListV1Section } from '@ring/ui';

import type { TypeProductListV1 } from '../../../types/generated/contentful';

export type ProductListV1CMSReturn = Omit<ProductListV1Section, 'props'> & {
  props: Omit<ProductListV1Props, 'products'>;
};

export function ProductListV1CMS({ fields, sys }: TypeProductListV1): ProductListV1CMSReturn {
  return {
    id: sys.id,
    name: 'ProductListV1',
    props: {
      title: fields.title,
    },
  };
}
