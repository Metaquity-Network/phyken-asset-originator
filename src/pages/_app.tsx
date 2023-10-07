import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReduxProvider } from '../reducers/provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReduxProvider>
        <Component {...pageProps} />;
      </ReduxProvider>
      ;
    </>
  );
}

export default MyApp;
