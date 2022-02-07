import Head from 'next/head'
import Nav from "@/components/Nav";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ian Pratt | Just a gay programmer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Nav />
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
