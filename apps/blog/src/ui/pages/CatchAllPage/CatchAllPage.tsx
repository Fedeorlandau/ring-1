import type { Sections } from '@ring/contracts';
import { DefaultLayout } from '@ring/ui';
import React from 'react';

export type PageProps = {
  footer?: Sections;
  header?: Sections;
  main: Sections;
};

export function CatchAllPage({ footer, header, main }: PageProps) {
  return <DefaultLayout footer={footer} header={header} main={main}></DefaultLayout>;
}
