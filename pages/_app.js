import App from 'next/app'
import { AppContext } from '@context/AppContext';

import '@styles/global.css';

function Application({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

Application.getInitialProps = async (appContext) => {
  console.log('getInitialProps', process.env)
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default Application
