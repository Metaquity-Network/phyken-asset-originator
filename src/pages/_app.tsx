import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ReduxProvider } from "../reducers/provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Metaquity Network</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </React.Fragment>
  );
}

export default MyApp;
