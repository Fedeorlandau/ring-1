import type { ListV2Type } from '@ring/contracts';
import React from 'react';
import { Icon } from 'src/components/elements/Icon';

export function ListV2({ items }: ListV2Type) {
  return (
    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
      {items.map((item) => (
        <a key={item.title} className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50" href={item.link}>
          {item.icon && <Icon name={item.icon} />}
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">{item.title}</p>
            <p className="mt-1 hidden text-sm text-gray-500 md:flex">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
