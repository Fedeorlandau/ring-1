import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

export function Image({ src, alt, className }: ImageProps) {
  return <img alt={alt} className={className} src={src} />;
}
