import type { Sections } from '@ring/contracts';
import React from 'react';
import { RenderSections } from 'src/components';

export type DefaultLayoutProps = {
  main: Sections;
  footer?: Sections;
  header?: Sections;
};

export function DefaultLayout({ header, footer, main }: DefaultLayoutProps) {
  return (
    <>
      <div className="container mx-auto">
        {header && (
          <header>
            <RenderSections sections={header} />
          </header>
        )}
        <main>
          <RenderSections sections={main} />
        </main>
      </div>
      {footer && (
        <footer>
          <RenderSections sections={footer} />
        </footer>
      )}
    </>
  );
}
