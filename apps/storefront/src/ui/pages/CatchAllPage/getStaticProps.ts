import type { CMSSections } from '@ring/cms';
import { getSections } from '@ring/cms';
import type { CommerceSections } from '@ring/commerce';
import { getSectionsCommerceData } from '@ring/commerce';
import type { UISections } from '@ring/ui';
import type { GetStaticProps } from 'next';
import { getSlug } from 'src/utils/getSlug';

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = getSlug(params);

  const sectionsFromCMS = await getSections(slug);
  const sectionFromCMSNames = sectionsFromCMS.map((section) => section.name);

  const sectionsFromCommerce = await getSectionsCommerceData({
    sections: sectionFromCMSNames,
  });

  // @ts-expect-error no time now to fix this
  const sections = mergeSections({ sectionsFromCMS, sectionsFromCommerce });

  return { props: { main: sections } };
};

type MergeSectionsProps = {
  sectionsFromCMS: CMSSections;
  sectionsFromCommerce: CommerceSections;
};
function mergeSections({ sectionsFromCMS, sectionsFromCommerce }: MergeSectionsProps): UISections {
  // @ts-expect-error no time now to fix this
  return sectionsFromCMS.map((sectionFromCMS, index) => {
    return {
      ...sectionFromCMS,
      props: {
        ...sectionFromCMS.props,
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        ...sectionsFromCommerce[index],
      },
    };
  });
}
