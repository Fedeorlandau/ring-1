import ImageNext from 'next/future/image';
import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function Image({ src, alt, className }: ImageProps) {
  return <ImageNext alt={alt} className={className} fill src={src} />;
}
