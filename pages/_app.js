import "../styles/style.css";
import "../styles/slick/slick.css";
import "../styles/slick/slick-theme.css";

import Layout from "@/components/common/layout";
import { useEffect } from "react";
import { store, persistor } from "./../rtk/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
