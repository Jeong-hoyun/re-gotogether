import Head from "next/head";
import Footer from "../../componenets/common/footer";
import Header from "../../componenets/common/header";
import Slide from "../../componenets/main/slide";
import { useRouter } from "next/router";
import { useProducts } from "../../swr/useProducts";
import Ripple from "../../componenets/common/spinner";
import { unstable_serialize } from "swr";

export default function Theme() {
  const router = useRouter();
  const theme = router.query.theme;
  const { productList, isLoading, isError } = useProducts();

  if (isError) return <div>Error</div>;
  if (isLoading) return <Ripple />;

  return (
    <div>
      <Head>
        <title>고투게더</title>
        <meta name="description" content="여행 테마" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="MainPage -mt-16">
        <div className="mx-auto">
          <Slide />
          <div className="mx-auto">
            <div className="flex container mx-auto flex-col sm:flex-row">
              <div className="flex-1 mx-4 lg:m-8 lg:ml-32">
                {Array.isArray(productList) &&
                  productList
                    .filter((el) => el.theme === theme)
                    .map((item) => <p key={item._id}>{item.title}</p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
