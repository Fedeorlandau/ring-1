import React from 'react';

export type ListV1Props = {
  title: string;
  link: { title: string; link: string };
  items: Array<{ title: string; link: string }>;
};

export function ListV1({ title, link, items }: ListV1Props) {
  return (
    <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
      <div>
        {title && <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">{title}</h3>}
        <ul className="mt-4 space-y-4">
          {items.map((listItem) => (
            <li key={listItem.title} className="truncate text-base">
              <a className="font-medium text-gray-900 hover:text-gray-700" href={listItem.link}>
                {listItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {link && (
        <div className="mt-5 text-sm">
          <a className="font-medium text-indigo-600 hover:text-indigo-500" href={link.link}>
            {link.title} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      )}
    </div>
  );
}
