import type { UISections } from '@ring/ui';
import { DefaultLayout } from '@ring/ui';
import React from 'react';

export type PageProps = {
  footer?: UISections;
  header?: UISections;
  main: UISections;
};

export function CatchAllPage({ footer, header, main }: PageProps) {
  return <DefaultLayout footer={footer} header={header} main={main}></DefaultLayout>;
}
