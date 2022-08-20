import type { HeroV1CMSType } from '@ring/contracts';

import type { TypeHeroV1 } from '../../../types/generated/contentful';
import type { LinkParserProps } from '../../../utils';
import { linkParser } from '../../../utils';
import { imageParser } from '../../../utils/imageParser';

export function HeroV1CMS({ fields, sys }: TypeHeroV1): HeroV1CMSType {
  return {
    id: sys.id,
    name: 'HeroV1',
    props: {
      buttonPrimaryText: fields.buttonPrimaryText,
      buttonPrimaryLink: linkParser(fields.buttonPrimaryLink as unknown as LinkParserProps),
      title: fields.title,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      logo: imageParser(fields.logo),
      image: imageParser(fields.image),
      subtitle: fields.subtitle,
      titleFirstRow: fields.titleFirstRow,
      titleSecondRow: fields.titleSecondRow,
      buttonSecondaryLink: linkParser(fields.buttonSecondaryLink as unknown as LinkParserProps),
      buttonSecondaryText: fields.buttonSecondaryText,
      navigation: fields.navigation.map((item) => {
        return { title: item.fields.title, link: item.fields.slug };
      }),
    },
  };
}
