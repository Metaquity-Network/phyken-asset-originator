import '@/styles/globals.css';
import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ReduxProvider } from '@/reducers/provider';
import { UIProvider } from './providers/nextUIProvider';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Metaquity Network</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <UIProvider>
        <ReduxProvider>
          <Component {...pageProps} />
        </ReduxProvider>
      </UIProvider>
    </React.Fragment>
  );
}

export default MyApp;
