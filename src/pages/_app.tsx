import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReduxProvider } from '../reducers/provider';
import { ToastContainer } from 'react-toastify';

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
