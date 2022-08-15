import React from 'react';
import { Heading } from 'src/components/elements/Heading';
import type { Icons } from 'src/components/elements/Icon';
import { Icon } from 'src/components/elements/Icon';
import { Text } from 'src/components/elements/Text';

export type FeaturesV1Section = {
  id: string;
  name: 'FeaturesV1';
  props: FeaturesV1Props;
};

export type FeaturesV1Props = {
  features: Array<{ title: string; subtitle: string; icon: Icons }>;
  title: string;
  pretitle: string;
  subtitle: string;
};

export function FeaturesV1({ title, pretitle, subtitle, features }: FeaturesV1Props) {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="mb-2">
            <Heading variant="FeaturesV1B">{pretitle}</Heading>
          </div>
          <div className="mb-4">
            <Text fontWeight="extrabold" variant="md">
              {title}
            </Text>
          </div>
          <div className="max-w-2xl lg:mx-auto">
            <Text variant="sm">{subtitle}</Text>
          </div>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <dt aria-label={feature.title}>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <Icon name={feature.icon} />
                  </div>
                  <div className="ml-16">
                    <Text variant="md">{feature.title}</Text>
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
