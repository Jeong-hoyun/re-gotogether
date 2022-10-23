import content from "../../json/search.content.json";
import { useRouter } from "next/router";
import Head from "next/head";
import { API_URL } from "../../config/index";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addwish, delwish } from "rtk/features/wishSlice";
import { useMemo } from "react";
import Groupnav from "@/components/common/groupnav";

export function getStaticPaths() {
  const paths = content.search.map((item) => {
    return { params: { keyword: item.key } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { keyword } = context.params;
  const { data: searchData } = await axios.get(
    `${API_URL}/api/products/?keyword=${keyword}`,
  );
  if (!searchData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      searchData,
    },
  };
}

const Keyword = ({ searchData }) => {
  const location = useRouter();
  const mainTitle = useMemo(
    () =>
      content.search
        .filter((e) => e.key === location.query.keyword)
        .map((e) => e.title)[0],
  );
  const wish = useSelector((state) => state.wish.wish);
  const dispatch = useDispatch();
  const wishItem = useMemo(() => wish.map((e) => e.id));

  if (searchData.products.length === 0) {
    return (
      <main className="max-w-7xl mx-auto mt-20 flex justify-between flex-wrap">
        현재 패키지 여행 준비중입니다
      </main>
    );
  }
  return (
    <>
      <Head>
        <title>{mainTitle}</title>
      </Head>
      <Groupnav/>
      <main className="max-w-7xl mx-auto mt-20">
        <div className="flex justify-between flex-wrap lg:m-1 sm:m-5">
          {searchData &&
            searchData.products.map((item) => {
         
              const { title, productId } = item;
              const  price= item.price !== null ?
               `${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
              : "가격문의";
              const image1 = item.images[0];
              return (
                <div
                  className="lg:w-1/3 sm:w-1/2 mb-10 flex flex-col rounded-lg border border-gray-200 shadow-md  "
                  key={title}
                >
            
                  <Link href={`/travel/${productId}`}>
                    <a alt={title}>
                      <Image
                        className="rounded-t-lg object-cover"
                        src={image1}
                        alt={title}
                        width={500}
                        height={300}
                      />
                    </a>
                  </Link>
                  <div className="p-5">
                    <p className="text-sm text-gray-700 font-extralight">
                      {title}
                    </p>
                  </div>
                  <div className="pl-5">
                  <h4 className="text-sm font-sm text-gray-700 font-bold">
                    {price}
                  </h4>
                  <div className="flex justify-end p-5">
                  <button
                    className="flex"
                    type="button"
                    aria-label="Like"
                    onClick={
                      wishItem.includes(productId)
                        ? () => dispatch(delwish(productId))
                        : () =>
                            dispatch(
                              addwish({
                                id: productId,
                                title: title,
                                img: image1,
                              }),
                            )
                    }
                  >
                    <svg
                      width="20"
                      height="20"
                      fill={wishItem.includes(productId) ? "red" : "blue"}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      />
                    </svg>
                  </button>
                  </div>
                 </div>
                  
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
};

export default Keyword;
