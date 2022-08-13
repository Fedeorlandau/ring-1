import { logger } from '@ring/logger';
import { ProductListV1Commerce } from 'src/components/sections/ProductListV1Commerce/ProductListV1Commerce';

type GetSectionsCommerceDataProps = {
  sections: Array<'BlogPostListV1' | 'ProductListV1' | 'FeaturesV1' | 'HeroV1' | 'NavbarV1'>;
};

export async function getSectionsCommerceData({ sections }: GetSectionsCommerceDataProps) {
  const sectionsFetcher = sections.map((section) => {
    switch (section) {
      case 'ProductListV1':
        return ProductListV1Commerce();

      default:
        return new Promise<Record<string, never>>((resolve) => {
          resolve({});
        });
    }
  });

  // eslint-disable-next-line no-console
  const sectionsCommerceData = await Promise.all(sectionsFetcher).catch(console.error);

  if (sectionsCommerceData === undefined) {
    logger.error(sectionsCommerceData);
    throw new Error('The sections with commerce data is undefined');
  }

  return sectionsCommerceData;
}
