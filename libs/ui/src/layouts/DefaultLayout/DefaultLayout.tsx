import React from 'react';
import type { UISections } from 'src/components';
import { RenderSections } from 'src/components';

export type DefaultLayoutProps = {
  main: UISections;
  footer?: UISections;
  header?: UISections;
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
