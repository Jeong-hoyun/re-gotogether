import React from "react";
import CommunityImg from "../public/img/community-bg.png";
import Image from "next/image";
import Link from "next/link";
import Union from "@/components/Logo/union";
import { Pagination } from "@mui/material";
import communtiyReview from "../json/community.content.json";
import Head from "next/head";

export default function Community() {
  return (
    <>
    <Head>
    <title>커뮤니티|고투게더</title>
    <link rel="canonical" href="/community" />
    </Head>
      {/* <div className="relative bg-cover"> */}
      <div className="relative mt-4 bg-cover">
        <Image
          src={CommunityImg}
          className="w-full"
          alt="Picture of CommunityImg"
        />
        <span className="absolute hidden text-2xl font-medium top-1/4 left-1/4 xl:block">
          여행, 안전히 다녀오셨나요?
          <br />
          생생한 후기를 전해보세요!
          <br />
          <span className="text-sm font-medium text-gray-500">
            추첨을 통해 커피 쿠폰을 드려요 :❩
          </span>
        </span>
      </div>
      {/* </div> */}

      <nav className="pt-6 pb-6 text-sm text-black bg-white mt-30 drop-shadow-xl">
        <ul className="flex justify-center space-x-4 text-sm font-medium lg:space-x-5">
          <li>
            <Link href="/">
              <a className="block px-10 py-3 bg-zinc-100 rounded-2xl hover:bg-black hover:text-white">
                <div>여행후기</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block px-10 py-3 bg-zinc-100 rounded-2xl hover:bg-black hover:text-white">
                <div>공지사항</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block px-10 py-3 bg-zinc-100 rounded-2xl hover:bg-black hover:text-white">
                <div>자료실</div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="relative pt-5 mx-10 mt-12 text-black lg:mx-72">
        <input
          className="w-64 h-10 text-sm border-none rounded-lg pr-14 bg-neutral-100 placeholder:text-gray-400"
          type="text"
          name="search"
          placeholder="여행 후기를 검색해 보세요."
        />
        <div className="absolute ml-56 top-8">
          <Union />
        </div>
        <button className="absolute right-0 h-10 px-4 text-sm text-white rounded-2xl bg-number-color">
          글쓰기
        </button>
      </div>

      {/* 여행후기 */}

      <ul className="grid grid-cols-1 gap-4 mx-10 mt-8 text-sm mb-14 lg:mx-72 lg:grid-cols-4">
        {communtiyReview.community.map((review) => {
          return (
            <li
              className="px-5 py-5 mb-3 bg-white rounded-2xl drop-shadow-2xl"
              key={`${review.img}${review.title}${review.name}${review.date}`}
            >
              <img className="w-full h-48 bg-auto rounded-2xl" src={review.img} />
              <p className="pt-10 text-sm font-semibold">{review.title}</p>
              <div className="float-left pt-2 text-xs">{review.name}</div>
              <div className="inline-block float-right pt-2 text-xs">{review.date}</div>
            </li>
          );
        })}
      </ul>

      <Pagination
        count={10}
        shape="rounded"
        className="flex justify-center mt-10"
      />
    </>
  );
}
