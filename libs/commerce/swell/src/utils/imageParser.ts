export type ImageParserProps = {
  file: { url: string };
};

export function imageParser({ file }: ImageParserProps) {
  return {
    src: file.url,
    alt: '',
  };
}
