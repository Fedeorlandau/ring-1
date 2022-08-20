import type { ListV3Type } from '@ring/contracts';
import React from 'react';
import { Icon } from 'src/components/elements/Icon/Icon';

export function ListV3({ items }: ListV3Type) {
  return (
    <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
      {items.map((item) => (
        <div key={item.title} className="flow-root">
          <a
            className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            href={item.link}
          >
            <Icon color="light" name={item.icon} />
            <span className="ml-3">{item.title}</span>
          </a>
        </div>
      ))}
    </div>
  );
}
