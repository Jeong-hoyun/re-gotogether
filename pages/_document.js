import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
  } from 'next/document';
  import { ServerStyleSheet } from 'styled-components';
  

const SITE_NAME = '고투게더|같이 가고 싶은 파트너와 함께 가는 여행';
const SITE_TITLE = '고투게더';
const SITE_DESCRIPTION = '같이 가고 싶은 파트너와 함께 가는 여행';


  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />)
          });
  
        const initialProps = await Document.getInitialProps(ctx);
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          )
        };
      } finally {
        sheet.seal();
      }
    }
  
    redirectIEtoEdge() {
    return {
      __html: `
      if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        window.location = 'microsoft-edge:' + window.location;
        setTimeout(function() {
          window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
        }, 1);
      }`,
    };
  }


    render() {
      return (
        <Html>
          <Head >
          <title>{SITE_NAME}</title>
          <script dangerouslySetInnerHTML={this.redirectIEtoEdge()} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* SEO */}    
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="canonical" href="http://localhost:3000/" />
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />       
          <meta name="format-detection"  content="telephone=no, address=no, email=no"/>
          <link rel="shortcut icon" href="/favicon.ico" />   
          {/* Global site tag (gtag.js) - Google Analytics */}   
          
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;