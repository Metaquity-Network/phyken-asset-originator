import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReduxProvider } from '../reducers/provider';
import { Provider } from 'react-redux';
import { store } from '../reducers/store';
import Head from 'next/head';
// import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Metaquity network: Originator </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="assets/login/metaquity-logo.png" />
      </Head>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Component {...pageProps} />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}

export default MyApp;
