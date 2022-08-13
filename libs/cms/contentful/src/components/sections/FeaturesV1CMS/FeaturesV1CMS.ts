import type { FeaturesV1Section } from '@ring/ui';

import type { TypeFeaturesV1 } from '../../../types/generated/contentful';

export type FeaturesV1CMSReturn = FeaturesV1Section;

export function FeaturesV1CMS({ fields, sys }: TypeFeaturesV1): FeaturesV1CMSReturn {
  return {
    id: sys.id,
    name: 'FeaturesV1',
    props: {
      title: fields.title,
      pretitle: fields.pretitle,
      subtitle: fields.subtitle,
      features: fields.features.map((item) => {
        return {
          title: item.fields.title,
          subtitle: item.fields.subtitle,
        };
      }),
    },
  };
}
