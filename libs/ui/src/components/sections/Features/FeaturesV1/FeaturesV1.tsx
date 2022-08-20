import type { FeaturesV1UIType } from '@ring/contracts';
import React from 'react';
import { Icon } from 'src/components/elements/Icon';
import { Text } from 'src/components/elements/Text';

export function FeaturesV1({ title, pretitle, subtitle, features }: FeaturesV1UIType) {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="mb-2">
            <Text tag="h2" variant="md">
              {pretitle}
            </Text>
          </div>
          <div className="mb-4">
            <Text fontWeight="extrabold" variant="3xl">
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
