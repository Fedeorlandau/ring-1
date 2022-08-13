import 'src/ui/styles/global.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

if (process.env.MOCKING === 'enabled') {
  require('../mocks');
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-mono text-white">
      <Head>
        <title>Lorenzo GM</title>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      {/* <DefaultLayout footer={<></>} header={pageProps.header}> */}
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
      {/* </DefaultLayout> */}
    </div>
  );
}
