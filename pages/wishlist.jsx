import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Recent from './../components/common/recent';

const Wishlist = () => {
  const wish = useSelector((state) => state.wish.wish);
  return (
    <>
    <Head>
    <title>위시리스트|고투게더</title>
    <link rel="canonical" href="/wishlist" />
    </Head>
    <div className="mt-10 ">
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4 mt-12 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="rounded-t mb-0 py-6 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-normal text-xl tracking-wider text-Gray-500">
                    위시리스트
                  </h3>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse table-fixed">
                  <tbody>
                    {wish.length <= 1 ? (
                      <td className="border-t-0 text-neutral-400 pt-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                        위시리스트가 없습니다 🫥
                      </td>
                    ) : (
                      wish
                        .filter((_, i) => i !== 0)
                        .map((item) => {
                          const { title, img, id } = item;
                          return (
                            <tr
                              key={id}
                              className="border-t-0 text-neutral-400 pt-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap  hover:opacity-75"
                            >
                              <td>
                                <Link href={`/travel/${id}`}>
                                  <a>
                                    <Image
                                      className="rounded-lg object-cover"
                                      src={img}
                                      alt={title}
                                      width={500}
                                      height={300}
                                    />
                                  </a>
                                </Link>
                                <h4 className="">{title}</h4>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white rounded w-16 h-10">
                                  삭제
                                </button>
                              </td>

                              <td className="hidden lg:text-xs lg:font-bold lg:flex lg:flex-col lg:mt-40 lg:ml-10">
                                <p className="text-number-color">
                                  여행지역
                                  <span className="pl-2 font-normal text-black">
                                    {title}
                                  </span>
                                </p>
                                <p className="flex justify-start pt-2 text-number-color">
                                  여행특징
                                  <span className="pl-2 font-normal text-black">
                                    5성~3성급 호텔/포함투어 25개(타사상품
                                    비교必)
                                  </span>
                                </p>
                                <p className="pt-2 text-number-color">
                                  여행항공
                                  <span className="pl-2 font-normal text-black">
                                    미정
                                  </span>
                                </p>
                              </td>
                            </tr>
                          );
                        })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </div>
        </section>
        <Recent/>
      </div>
    </>
  );
};

export default Wishlist;
