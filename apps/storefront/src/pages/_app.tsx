import 'src/ui/styles/globals.css';

import type { AppProps } from 'next/app';

if (process.env.API_MOCKING === 'enabled') {
  require('../mocks');
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...pageProps}
    />
  );
}
