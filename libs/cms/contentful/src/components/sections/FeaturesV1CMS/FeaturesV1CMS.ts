import type { FeaturesV1CMSType } from '@ring/contracts';

import type { TypeFeaturesV1 } from '../../../types/generated/contentful';

export function FeaturesV1CMS({ fields, sys }: TypeFeaturesV1): FeaturesV1CMSType {
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
          icon: item.fields.icon.fields.name,
        };
      }),
    },
  };
}
