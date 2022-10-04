import Layout from "../componenets/common/layout";
import "../styles/globals.css";
import "../styles/styles.css";
import { store } from "./../rtk/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
