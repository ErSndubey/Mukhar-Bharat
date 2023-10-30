import { SessionProvider } from 'next-auth/react'; // Import SessionProvider
import { Provider } from 'react';

import Layout from '../components/Layout';
import '../app/globals.css';

function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
