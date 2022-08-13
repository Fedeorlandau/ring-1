import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import React from 'react';
import { Heading } from 'src/components/elements/Heading';
import { Paragraph } from 'src/components/elements/Paragraph';

const icons = [GlobeAltIcon, ScaleIcon, LightningBoltIcon, AnnotationIcon];

export type FeaturesV1Section = {
  id: string;
  name: 'FeaturesV1';
  props: FeaturesV1Props;
};

export type FeaturesV1Props = {
  features: Array<{ title: string; subtitle: string }>;
  title: string;
  pretitle: string;
  subtitle: string;
};

export function FeaturesV1({ title, pretitle, subtitle, features }: FeaturesV1Props) {
  const featuresWithIcon = features.map((feature, index) => {
    return { ...feature, icon: icons[index] };
  });

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="mb-2">
            <Heading variant="FeaturesV1B">{pretitle}</Heading>
          </div>
          <div className="mb-4">
            <Paragraph fontWeight="extrabold" variant="md">
              {title}
            </Paragraph>
          </div>
          <div className="max-w-2xl lg:mx-auto">
            <Paragraph variant="sm">{subtitle}</Paragraph>
          </div>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {featuresWithIcon.map((feature) => (
              <div key={feature.title} className="relative">
                <dt aria-label={feature.title}>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <div className="ml-16">
                    <Paragraph variant="md">{feature.title}</Paragraph>
                  </div>
                </dt>
                <dd aria-label={feature.subtitle} className="mt-2 ml-16 text-base text-gray-500">
                  {feature.subtitle}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
