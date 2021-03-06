import '@src/styles/reset.css';
import '@src/styles/tailwind.css';
import { VFC } from 'react';
import { AppProps } from 'next/app';
import 'what-input';

import '@src/lib/Firebase/firebase';
import '@src/lib/Firebase/auth';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
