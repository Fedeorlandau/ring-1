import type { ProductListV1CMSType } from '@ring/contracts';

import type { TypeProductListV1 } from '../../../types/generated/contentful';

export function ProductListV1CMS({ fields, sys }: TypeProductListV1): ProductListV1CMSType {
  return {
    id: sys.id,
    name: 'ProductListV1',
    props: {
      title: fields.title,
    },
  };
}
