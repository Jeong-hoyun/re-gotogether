import "../styles/style.css";
import Layout from "@/components/common/layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const location = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); 


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
