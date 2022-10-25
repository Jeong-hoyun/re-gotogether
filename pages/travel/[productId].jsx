import React, { useMemo, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Angel from "@/components/Logo/angel";
import PointLogo from "@/components/Logo/pointLogo";
import { API_URL } from "./../../config/index";
import { useSelector } from "react-redux";
import Maincarousel from "./../../components/main/maincarousel";
import { useForm } from "react-hook-form";
import { SetReservation } from "../../config/reservation";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Image from "next/image";

export const getStaticPaths = async () => {
  const post = await axios.get(`${API_URL}/api/products?&pageSize=100`);
  const posts = await post.data;
  return {
    paths: posts.products.map((item) => {
      return {
        params: {
          productId: item.productId.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await axios.get(
    `${API_URL}/api/products/${params.productId}`,
  );
  const post = await response.data;

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post },
  };
};

const ProductId = ({ post }) => {
  const loginUser = useSelector((state) => state.login.login);
  const router = useRouter();
  const [reserve, setReserve] = useState();
  const [toggle, setToggle] = useState(true);
  const { register, handleSubmit } = useForm();
  const MySwal = withReactContent(Swal);
  const number2 =
    typeof post.price === "string"
      ? `${post.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`
      : "가격문의";
  const HeroImage = post.images[0];

  const submitForm = (data) => {
    try {
      SetReservation(data).then(() => {
        MySwal.fire({
          title: "<strong>예약되었습니다</strong>",
          icon: "info",
          html:
            '<a href="/mypage">마이페이지</a>에서 결제를 진행해주세요, ' +
            '<a href="/mypage">마이페이지</a> ',
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <section className="flex flex-col">
        <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4 mt-24 mx-auto">
        <div className=" sm:flex lg:hidden">          
        <Image         
          src={HeroImage}
          width={384}
          height={384}
          alt="Hero"
        />
        </div>           
          <div className="flex">           
          <div className="hidden sm:mx-auto lg:block">          
          <Image         
            src={HeroImage}
            width={384}
            height={384}
            alt="Hero"
          />
            </div>
      

                <div className="font-semibold">
                   <h2 className="lg:text-3xl sm:text-2xl">{post.title}</h2>
                  <h3 className="lg:text-2xl text-number-color">{number2}</h3>
                  <div className="absolute px-10 py-8 mt-10 text-sm rounded-2xl bg-zinc-100">
                    <div>
                      <PointLogo />
                      {post.title} 여행
                    </div>
                    <div>
                      <PointLogo />한 번의 여행으로 나의 취향을 만끽하세요!
                    </div>
                    <div>
                      <PointLogo />
                      패키지의 안전함과 자유여행의 즐거움을 동시에~
                    </div>
                  </div>
                  <div className="text-xs font-bold mt-60">
                    <p className="text-number-color">
                      여행지역
                      <span className=" font-normal text-black">
                        콜롬비아/페루/볼리비아/칠레/아르헨티나/브라질/쿠바/멕시코
                      </span>
                    </p>
                    <p className="pt-2 text-number-color">
                      여행특징
                      <span className="font-normal text-black">
                        5성~3성급 호텔/포함투어 25개(타사상품 비교必)
                      </span>
                    </p>
                    <p className="pt-2 text-number-color">
                      여행항공
                      <span className="pl-2 font-normal text-black">미정</span>
                    </p>
                  </div>
                  {post.startDates ? (
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
                          className="text-center text-lg"
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
                        {/* 드롭다운 2 */}
                        <label
                          htmlFor="personnel"
                          className="text-center text-lg"
                        >
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
                        className="flex justify-center mr-40 py-4 px-10 mx-10 text-xl font-bold mt-7 rounded-2xl text-number-color bg-zinc-100"
                      >
                        예약하기
                      </button>
                    </form>
                  ) : null}
                </div>
              </div>
              {loginUser.username ? (
                <div className="flex flex-col pb-16 border-b">
                  <p className="mt-10 text-2xl font-bold text-black">
                    {loginUser.username}님에게{" "}
                    <span className="text-number-color">
                      딱 어울릴 것 같아요!
                    </span>
                  </p>
                  <div className="flex justify-center py-10 sm:w-4/5 lg:mx-24 lg:mt-12 bg-white rounded-2xl drop-shadow-2xl shadow-slate-50">
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
              <div className="flex flex-col py-10 mx-24 mt-12 bg-white rounded-2xl drop-shadow-2xl shadow-slate-50">
                <p className="flex mt-10 justify-center text-2xl font-bold text-black">
                  이런 여행을 떠날거에요 😃
                </p>
                <div
                  onClick={() => (toggle ? setToggle(false) : setToggle(true))}
                  tabIndex="1"
                  className="flex flex-col justify-center py-10 mx-24 mt-12 bg-white rounded-2xl drop-shadow-2xl shadow-slate-50"
                >
                  <div className="font-semibold justify-center w-40">
                    펼쳐보기 ▼
                  </div>
                  <div className={`${toggle && "hidden"} `}>
                    {post.images
                      .filter((_, i) => i !== 0)
                      .map((item) => {
                        return (
                          <Image
                            key={item}
                            src={item}
                            width={640}
                            height={1856}
                            layout="responsive"
                          />
                        );
                      })}
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="pb-16">
                <p className="mt-10 text-2xl font-bold text-black">
                  이런 여행은 어떠신가요?
                </p>
                <Maincarousel />
              </div>
            </div>    
      </section>
    </>
  );
};

export default ProductId;
