import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Angel from "@/components/Logo/angel";
import PointLogo from "@/components/Logo/pointLogo";
import Maincarousel from "@/components/main/maincarousel";
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
    title: string;
    productId: number;
    price: number;
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

  const { register, handleSubmit } = useForm<typeReservation>();

  React.useEffect(() => {
    if (!recent.map(({ title }) => title).includes(post.title)) {
      dispatch(
        addRecent({
          title: post.title,
          id: router.query.productId,
          img: post.images[0],
        })
      );
    }
  }, []);

  const number2 = new Intl.NumberFormat("ko", {
    style: "currency",
    currency: "krw",
  }).format(post.price);
  const HeroImage = post.images[0];

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
        <title>{post.title}</title>
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
              <h2 className="lg:text-3xl sm:text-2xl">{post.title}</h2>
              <h3 className="lg:text-2xl text-number-color">{number2}</h3>
              <div className="absolute px-10 py-8 mt-10 text-sm rounded-2xl bg-zinc-100">
                <div>
                  <PointLogo />
                  {post.title} ??????
                </div>
                <div>
                  <PointLogo />??? ?????? ???????????? ?????? ????????? ???????????????!
                </div>
                <div>
                  <PointLogo />
                  ???????????? ???????????? ??????????????? ???????????? ?????????~
                </div>
              </div>
              <div className="text-base font-bold mt-60">
                <p className="text-number-color">
                  ????????????
                  <span className="pl-2 font-normal text-black">??????</span>
                </p>
                <p className="pt-2 text-number-color">
                  ????????????
                  <span className="pl-2 font-normal text-black">
                    5???~3?????? ??????(???????????? ?????????)
                  </span>
                </p>
                <p className="pt-2 text-number-color">
                  ????????????
                  <span className="pl-2 font-normal text-black">??????</span>
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
                      ?????????(??????)
                    </label>
                    <select
                      {...register("reservationDate", {
                        required: true,
                      })}
                      name="reservationDate"
                      required
                      className="ml-5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-none"
                    >
                      <option value="">?????????(??????)</option>
                      <option value={post.startDates[0]}>
                        {post.startDates[0]}
                      </option>
                      <option value={post.startDates[1]}>
                        {post.startDates[1]}
                      </option>
                      <option value={post.startDates[2]}>
                        {post.startDates[2]}
                      </option>
                    </select>
                    {/* ???????????? 2 */}
                    <label htmlFor="personnel" className="text-lg text-center">
                      ?????????(??????)
                    </label>
                    <select
                      {...register("personnel", {
                        required: true,
                      })}
                      required
                      name="personnel"
                      className="ml-5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-none"
                    >
                      <option value="">?????????(??????)</option>
                      <option value={1}>1???</option>
                      <option value={2}>2???</option>
                      <option value={3}>3???</option>
                      <option value={4}>4???</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="flex justify-center px-10 py-4 mx-10 mr-40 text-xl font-bold mt-7 rounded-2xl text-number-color bg-zinc-100"
                  >
                    ????????????
                  </button>
                </form>
              ) : loginUser.username ? (
                <div className="m-10"></div>
              ) : (
                <div className="m-10">????????? ???????????? ?????? ???????????????</div>
              )}
            </div>
          </div>
          {loginUser.username ? (
            <div className="flex flex-col pb-16 border-b">
              <p className="mt-10 text-2xl font-bold text-black">
                {loginUser.username}?????????{" "}
                <span className="text-number-color">??? ????????? ??? ?????????!</span>
              </p>
              <div className="flex justify-center py-10 bg-white sm:w-4/5 lg:mx-24 lg:mt-12 rounded-2xl drop-shadow-2xl shadow-slate-50">
                <Angel />
                <p className="font-semibold">
                  {loginUser.username}?????? ??????{" "}
                  <span className="font-bold text-number-color">
                    ???????????? ???????????? 86%
                  </span>
                  ???<br />??? ????????? ???????????????!
                </p>
              </div>
            </div>
          ) : null}

          {/* ???????????? */}
          <div className="flex flex-col py-10 lg:mx-24 lg:mt-12 bg-white rounded-2xl drop-shadow-2xl shadow-slate-50">
            <p className="flex justify-center mt-10 text-2xl font-bold text-black">
              ?????? ????????? ??????????????? ????
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
