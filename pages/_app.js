import "../styles/style.css";
import "../styles/slick/slick.css";
import "../styles/slick/slick-theme.css";

import Layout from "@/components/common/layout";
import { store, persistor } from "./../rtk/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
        <Head>
        <title>고투게더</title>
         </Head>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
