import React from 'react';

type PlaceholderProps = {
  componentName: string;
};

export function Placeholder({ componentName }: PlaceholderProps): JSX.Element {
  return (
    <p className="text-center">
      The component <strong>{componentName}</strong> has not been created yet.
    </p>
  );
}
