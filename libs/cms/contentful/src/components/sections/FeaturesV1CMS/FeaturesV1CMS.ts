import type { FeaturesV1Props, FeaturesV1Section } from '@ring/ui';

import type { TypeFeaturesV1 } from '../../../types/generated/contentful';

export type FeaturesV1CMSReturn = Omit<FeaturesV1Section, 'props'> & {
  props: Omit<FeaturesV1Props, 'features'> & { features: Features };
};

type Features = Array<Omit<FeaturesV1Props['features'][number], 'icon'> & Icon>;

type Icon = Pick<FeaturesV1Props['features'][number], 'icon'>;

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
          icon: item.fields.icon.fields.name,
        };
      }),
    },
  };
}
