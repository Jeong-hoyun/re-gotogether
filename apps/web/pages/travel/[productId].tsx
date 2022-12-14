import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Angel from "@/components/Logo/angel";
import PointLogo from "@/components/Logo/pointLogo";
import Maincarousel from "@/components/main/maincarousel";
import { API_URL } from "../../config/index";
import { useForm } from "react-hook-form";
import { SetReservation } from "../../config/reservation";
import { useRouter } from "next/router";
import Image from "next/image";
import { addRecent } from "@/rtk/features/recentSlice";
import { useAppDispatch, useAppStore } from "@/rtk/store";
import { typeReservation, typeSearchData } from "../../types/common";

type typeParams = {
  params: {
    productId: string;
  };
};
type typePosts = {
  post: {
    title: number;
    productId: number;
    price: string;
    images: string[];
    startDates: string[];
  };
};

export const getStaticPaths = async () => {
  const post = await axios.get(`http://localhost:3000/api/products/`);
  const posts = await post.data;
  return {
    paths: posts.products.map((item: typeSearchData) => {
      return {
        params: {
          productId: item.productId.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: typeParams) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/products/?id=${params.productId}`
    );
    const post = await response.data;
    return {
      props: { post },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const ProductId = ({ post }: typePosts) => {
  const loginUser = useAppStore((state) => state.login.login);
  const recent = useAppStore((state) => state.recent.recent);
  const router = useRouter();
  const [toggle, setToggle] = useState(true);
  const dispatch = useAppDispatch();
  const detailPageData = post.reduce((_, cur) => cur, {});

  const { register, handleSubmit } = useForm<typeReservation>();

  React.useEffect(() => {
    if (!recent.map(({ title }) => title).includes(post.title)) {
      dispatch(
        addRecent({
          title: detailPageData.title,
          id: router.query.productId,
          img: detailPageData.images[0],
        })
      );
    }
  }, []);

  const number2 = new Intl.NumberFormat("ko", {
    style: "currency",
    currency: "krw",
  }).format(detailPageData.price);
  const HeroImage = detailPageData.images[0];

  const submitForm = (data: typeReservation) => {
    try {
      SetReservation(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>{detailPageData.title}</title>
        <link rel="canonical" href={`/travel/${router.query.productId}`} />
      </Head>

      <section className="flex flex-col">
        <div className="w-full px-4 mx-auto mt-24 mb-12 xl:w-11/12 xl:mb-0">
          <div className=" sm:flex lg:hidden">
            <Image src={HeroImage} width={384} height={384} alt="Hero" />
          </div>
          <div className="flex xl:mr-40">
            <div className="hidden sm:mx-auto lg:block">
              <Image src={HeroImage} width={384} height={384} alt="Hero" />
            </div>

            <div className="font-semibold">
              <h2 className="lg:text-3xl sm:text-2xl">
                {detailPageData.title}
              </h2>
              <h3 className="lg:text-2xl text-number-color">{number2}</h3>
              <div className="absolute px-10 py-8 mt-10 text-sm rounded-2xl bg-zinc-100">
                <div>
                  <PointLogo />
                  {detailPageData.title} 여행
                </div>
                <div>
                  <PointLogo />한 번의 여행으로 나의 취향을 만끽하세요!
                </div>
                <div>
                  <PointLogo />
                  패키지의 안전함과 자유여행의 즐거움을 동시에~
                </div>
              </div>
              <div className="text-base font-bold mt-60">
                <p className="text-number-color">
                  여행지역
                  <span className="pl-2 font-normal text-black">미정</span>
                </p>
                <p className="pt-2 text-number-color">
                  여행특징
                  <span className="pl-2 font-normal text-black">
                    5성~3성급 호텔(타사상품 비교必)
                  </span>
                </p>
                <p className="pt-2 text-number-color">
                  여행항공
                  <span className="pl-2 font-normal text-black">미정</span>
                </p>
              </div>
              {post.startDates && loginUser.username ? (
                <form onSubmit={handleSubmit(submitForm)}>
                  <div className="flex flex-col justify-center ">
                    <input
                      type="hidden"
                      value={router.query.productId}
                      {...register("productId")}
                    />
                    <input
                      type="hidden"
                      value={1}
                      {...register("paymentState")}
                    />
                    <label
                      htmlFor="reservationDate"
                      className="text-lg text-center"
                    >
                      출발일(필수)
                    </label>
                    <select
                      {...register("reservationDate", {
                        required: true,
                      })}
                      name="reservationDate"
                      required
                      className="ml-5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-none"
                    >
                      <option value="">출발일(필수)</option>
                      <option value={detailPageData.startDates[0]}>
                        {detailPageData.startDates[0]}
                      </option>
                      <option value={detailPageData.startDates[1]}>
                        {detailPageData.startDates[1]}
                      </option>
                      <option value={detailPageData.startDates[2]}>
                        {detailPageData.startDates[2]}
                      </option>
                    </select>
                    {/* 드롭다운 2 */}
                    <label htmlFor="personnel" className="text-lg text-center">
                      인원수(필수)
                    </label>
                    <select
                      {...register("personnel", {
                        required: true,
                      })}
                      required
                      name="personnel"
                      className="ml-5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-none"
                    >
                      <option value="">인원수(필수)</option>
                      <option value={1}>1인</option>
                      <option value={2}>2인</option>
                      <option value={3}>3인</option>
                      <option value={4}>4인</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="flex justify-center px-10 py-4 mx-10 mr-40 text-xl font-bold mt-7 rounded-2xl text-number-color bg-zinc-100"
                  >
                    예약하기
                  </button>
                </form>
              ) : loginUser.username ? (
                <div className="m-10"></div>
              ) : (
                <div className="m-10">예약은 회원가입 이후 가능합니다</div>
              )}
            </div>
          </div>
          {loginUser.username ? (
            <div className="flex flex-col pb-16 border-b">
              <p className="mt-10 text-2xl font-bold text-black">
                {loginUser.username}님에게{" "}
                <span className="text-number-color">딱 어울릴 것 같아요!</span>
              </p>
              <div className="flex justify-center py-10 bg-white sm:w-4/5 lg:mx-24 lg:mt-12 rounded-2xl drop-shadow-2xl shadow-slate-50">
                <Angel />
                <p className="font-semibold">
                  {loginUser.username}님과 같은{" "}
                  <span className="font-bold text-number-color">
                    자유로운 여행자의 86%
                  </span>
                  가<br />이 여행을 선택했어요!
                </p>
              </div>
            </div>
          ) : null}

          {/* 펼쳐보기 */}
          <div className="flex flex-col py-10 lg:mx-24 lg:mt-12 bg-white rounded-2xl drop-shadow-2xl shadow-slate-50">
            <p className="flex justify-center mt-10 text-2xl font-bold text-black">
              이런 여행을 떠날거에요 😃
            </p>
            <div
              onClick={() => (toggle ? setToggle(false) : setToggle(true))}
              tabIndex={1}
              className="flex flex-col justify-center py-10 lg:mx-24 mt-12 bg-white rounded-2xl drop-shadow-2xl shadow-slate-50"
            >
              <div></div>
            </div>
          </div>
          <div className="pb-16">
            <Maincarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductId;
