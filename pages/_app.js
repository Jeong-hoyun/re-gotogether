import Layout from '../componenets/common/layout'
import '../styles/globals.css'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
    ) 
}

export default MyApp
