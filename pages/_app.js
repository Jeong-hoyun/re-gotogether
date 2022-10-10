import "../styles/style.css";
import Layout from "@/components/common/layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { store } from "./../rtk/store";
import { Provider } from "react-redux";

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
