import "../styles/style.css";
import "../styles/slick/slick.css";
import "../styles/slick/slick-theme.css";

import "aos/dist/aos.css";
import Layout from "@/components/common/layout";
import AOS from "aos";
import { useEffect } from "react";
import { store, persistor } from "./../rtk/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

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
