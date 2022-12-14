import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { BehaviorSubject, mergeMap, from, map } from "rxjs";
import { useObservable } from "@/components/common/searchBar";

import { fetchByReservation } from "@/rtk/features/reservationSlice";
import { fetchByReservationCancel } from "@/rtk/features/cancelSlice";
import { useAppStore, useAppDispatch } from "@/rtk/store";
import { typeReservation, typeSearchData } from "../types/common";
import { getPrice } from "./../config/price";

export const getReserveItem = async (ProductIds: number) => {
  const { data: products } = await axios.get(`/api/products/`);
  if (ProductIds) {
    const productsItems = products.products.map((item: typeSearchData) => item);
    const ReserveItem = productsItems.filter(
      (e: typeSearchData) => ProductIds === e.productId
    );
    return ReserveItem;
  } else {
    return null;
  }
};

let Subject$ = new BehaviorSubject("");
let ResultObservable = Subject$.pipe(
  map((val) => val),
  mergeMap((val) => from(getReserveItem(Number(val))))
);

/** 마이페이지 **/
const Mypage = () => {
  const dispatch = useAppDispatch();
  const wish = useAppStore((state) => state.wish.wish);
  const login = useAppStore((state) => state.login.login);
  const [reserve, setReserve] = useState<Array<typeReservation>>();
  const [result, setResult] = useState<Array<typeSearchData>>();
  const router = useRouter();

  useEffect(() => {
    login.username === undefined ? router.push("./") : null;
    (async () => {
      try {
        const res = await dispatch(fetchByReservation());
        const reserveData = res.payload.reservations;
        setReserve(reserveData);
        const dataSet = reserveData.map((e: typeSearchData) => e.productId);
        Subject$.next(dataSet);
      } catch (e) {
        console.error(e);
      }
    })();
    return () => {};
  }, [login.username]);

  const onCancel = async (path: number) => {
    try {
      dispatch(fetchByReservationCancel(path));
    } catch (e) {
      console.error(e);
    }
  };

  useObservable(ResultObservable, setResult);

  return (
    <>
      <Head>
        <title>마이페이지|고투게더</title>
        <link rel="canonical" href="/mypage" />
      </Head>

      <div className="mt-10">
        {login.username ? (
          <h2 className="w-full xl:w-9/12  lg:text-3xl lg:mb-12 xl:mb-0 px-4 lg:mt-24 mx-auto">
            {login.username}님 환영합니다.
          </h2>
        ) : null}
        <section className="py-1 bg-blueGray-50">
          <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4 mt-24 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
              <div className="rounded-t mb-0 py-6 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-normal text-2xl tracking-wider text-blueGray-700">
                      예약상품
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-blueGray-50 text-neutral-400 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal text-left">
                        상품 정보
                      </th>
                      <th className="pl-5 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                        인원
                      </th>
                      <th className="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                        예약 금액
                      </th>
                      <th className="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                        예약 정보
                      </th>
                      <th className="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                        체크
                      </th>
                    </tr>
                  </thead>

                  <tbody className="border-b">
                    {reserve ? (
                      reserve.map((item) => {
                        return (
                          <tr key={item.reservationId}>
                            <th className="bg-blueGray-50 text-neutral-400 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal text-left">
                              {result &&
                                result.map(({ title, productId }) =>
                                  item.productId === productId ? title : null
                                )}
                            </th>
                            <th className="pl-5 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                              {item.personnel}인
                            </th>
                            <th className="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                              {result &&
                                result.map(({ price, productId }) =>
                                  item.productId === productId
                                    ? getPrice(price)
                                    : null
                                )}
                            </th>
                            <th className="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                              {item.paymentState}
                            </th>
                            <th className="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                              <button
                                onClick={() => onCancel(item.reservationId)}
                              >
                                취소
                              </button>
                            </th>
                          </tr>
                        );
                      })
                    ) : (
                      <tr className="text-center">
                        <td className="border-t-0 text-neutral-400 py-32 pl-8 align-middle border-l-0 border-r-0 text-sm">
                          예약상품이 비어있습니다
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
                  <button
                    className="text-sky-700 border-b border-sky-700 text-sm font-medium uppercase px-0.5 py-0.5 focus:outline-none mr-1 mt-10 ease-linear transition-all duration-150"
                    type="button"
                  >
                    계속 둘러보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right mt-0"></div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className=" table-auto items-center bg-transparent w-full border-collapse">
                  <tbody>
                    <tr className="text-center">
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
                              <td
                                key={title}
                                className="ml-3 border-t-0   text-neutral-400 pt-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap cursor-pointer hover:opacity-75"
                              >
                                <Link href={`view/${id}`}>
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
                              </td>
                            );
                          })
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Mypage;
