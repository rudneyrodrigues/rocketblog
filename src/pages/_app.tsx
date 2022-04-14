import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Header } from '../components/Header';

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
