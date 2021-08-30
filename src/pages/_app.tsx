import '@src/styles/reset.css';
import '@src/styles/tailwind.css';
import { VFC } from 'react';
import { AppProps } from 'next/app';
import 'what-input';

import '@src/lib/firebase'

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
