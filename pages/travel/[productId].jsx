import React from "react";
import axios from "axios";
import Head from "next/head";
import Angel from "@/components/Logo/angel";
import PointLogo from "@/components/Logo/pointLogo";
import { API_URL } from "./../../config/index";

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
  return {
    props: { post },
  };
};

const ProductId = ({ post }) => {
  const number = 123456789;
  const number2 = post?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const HeroImage = post?.images[0];

  const startDates = post?.startDates;

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>

      <section className="relative flex justify-center">
        <div className="max-w-6xl px-4 sm:px-6">
          <div className="pt-1 md:pt-10 md:pb-20 ">
            <div>
              <div
                className="relative flex mb-8"
                // data-aos="zoom-y-out"
                // data-aos-delay="450"
              >
                <div>
                  <img
                    className="mx-auto"
                    src={HeroImage}
                    width="400"
                    height="400"
                    alt="Hero"
                  />
                </div>
                <div className="pl-20 text-3xl font-semibold">
                  {post.title}
                  <div className="absolute text-number-color">{number2}원</div>
                  <div className="absolute px-10 py-8 mt-20 text-sm rounded-2xl bg-zinc-100">
                    <div>
                      <PointLogo />
                      5070 누구나 참가할 수 있는 중남미 8개국 여행
                    </div>
                    <div>
                      <PointLogo />한 번의 여행으로 중남미 완전정복
                    </div>
                    <div>
                      <PointLogo />
                      패키지의 안전함과 자유여행의 즐거움을 동시에~
                    </div>
                  </div>
                  <div className="text-xs font-bold mt-72">
                    <p className="text-number-color">
                      여행지역
                      <span className="pl-2 font-normal text-black">
                        콜롬비아/페루/볼리비아/칠레/아르헨티나/브라질/쿠바/멕시코
                      </span>
                    </p>
                    <p className="pt-2 text-number-color">
                      여행특징
                      <span className="pl-2 font-normal text-black">
                        5성~3성급 호텔/포함투어 25개(타사상품 비교必)
                      </span>
                    </p>
                    <p className="pt-2 text-number-color">
                      여행항공
                      <span className="pl-2 font-normal text-black">
                        국적기+라탐항공 이용/중남미 내 항공 16회
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center py-4 mx-10 text-xl font-bold mt-7 rounded-2xl text-number-color bg-zinc-100">
                    예약하기
                  </div>
                </div>
              </div>

              <div className="pb-16 border-b">
                <p className="mt-10 text-2xl font-bold text-black">
                  형우님에게{" "}
                  <span className="text-number-color">
                    딱 어울릴 것 같아요!
                  </span>
                </p>
                <div className="flex justify-center py-10 mx-24 mt-12 bg-white rounded-2xl drop-shadow-2xl shadow-slate-50">
                  <Angel />
                  <p className="font-semibold">
                    형우님과 같은{" "}
                    <span className="font-bold text-number-color">
                      자유로운 여행자의 86%
                    </span>
                    가<br />이 여행을 선택했어요!
                  </p>
                </div>
              </div>
              {/* 펼쳐보기 */}
              <div className="pb-16 border-b">
                <p className="mt-10 text-2xl font-bold text-black">
                  이런 여행을 떠날거에요 😃
                </p>
                <div className="flex justify-center py-10 mx-24 mt-12 bg-white rounded-2xl drop-shadow-2xl shadow-slate-50">
                  <p className="font-semibold">펼쳐보기 ▼</p>
                </div>
              </div>


              <div className="border-b">
                <p className="mt-10 text-2xl font-bold text-black">
                  여행을 준비해볼까요 😄
                </p>
                <div className="flex justify-center py-2 mt-12 mb-16">
                  <div className="relative w-full lg:max-w-sm">
                    {/* 드롭다운 1 */}
                    <div className="flex justify-center">
                    <select className="w-full text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-none">
                      <option>출발일 선택(필수)</option>
                      <option>{post?.startDates[0]}</option>
                      <option>{post?.startDates[1]}</option>
                      <option>{post?.startDates[2]}</option>
                    </select>
                    {/* 드롭다운 2 */}
                    <select className="w-full ml-5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-none">
                      <option>싱글차지(필수)</option>
                      <option>{post?.startDates[0]}</option>
                      <option>{post?.startDates[1]}</option>
                      <option>{post?.startDates[2]}</option>
                    </select>
                    </div>
                  </div>
                </div>
                </div>
                
                <div className="pb-16">
                <p className="mt-10 text-2xl font-bold text-black">
                  이런 여행은 어떠신가요?
                </p>
                <div className="flex justify-center py-10 mx-24 mt-12">
                  <div className="relative w-full lg:max-w-sm">
                  </div>
                </div>
                

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductId;
