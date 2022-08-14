import type { FeaturesV1Props, FeaturesV1Section } from './FeaturesV1';

export const featuresV1Mock: FeaturesV1Props = {
  title: 'A better way to send money',
  pretitle: 'Transactions',
  subtitle:
    'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
  features: [
    {
      title: 'Competitive exchange rates',
      subtitle:
        '1 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: 'AcademicCapIcon',
    },
    {
      title: 'No hidden fees',
      subtitle:
        '2 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: 'AdjustmentsIcon',
    },
    {
      title: 'Transfers are instant',
      subtitle:
        '3 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: 'AnnotationIcon',
    },
    {
      title: 'Mobile notifications',
      subtitle:
        '4 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: 'ArchiveIcon',
    },
  ],
};

export const featuresV1SectionMock: FeaturesV1Section = {
  id: 'FeaturesV1',
  name: 'FeaturesV1',
  props: featuresV1Mock,
};
