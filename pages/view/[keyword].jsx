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
  const wish = useSelector((state) => state.wish);
  const dispatch = useDispatch();
  const wishItem = useMemo(() => wish.map((e) => e.id));

  if (searchData?.products.length === 0) {
    return <div className="flex mt-20">현재 패키지 여행 준비중입니다</div>;
  }
  return (
    <>
      <Head>
        <title>{mainTitle}</title>
      </Head>
      <main className="max-w-7xl mx-auto mt-20">
        <div className="flex justify-between flex-wrap">
          {searchData &&
            searchData.products.map((item) => {
              const { title, productId } = item;
              const image1 = item.images[0];
              return (
                <div
                  className="w-1/3 mb-10 rounded-lg border border-gray-200 shadow-md  "
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
                    <p className="text-sm mb-1 font-sm text-gray-700 font-bold">
                      {title}
                    </p>
                  </div>
                  <button
                    className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
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
              );
            })}
        </div>
      </main>
    </>
  );
};

export default Keyword;
