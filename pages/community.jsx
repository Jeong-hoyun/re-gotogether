import React from "react";
import CommunityImg from "../public/img/community-bg.png";
import Image from "next/image";
import Link from "next/link";
import Union from "@/components/Logo/union";
import { Pagination } from "@mui/material";

export default function Community() {
  return (
    <>
      {/* <div className="relative bg-cover"> */}
      <div className="relative bg-cover">
        <Image
          src={CommunityImg}
          className="w-full"
          alt="Picture of CommunityImg"
        />
        <span className="absolute text-2xl font-semibold top-1/4 left-1/4">
          여행, 안전히 다녀오셨나요?
          <br />
          생생한 후기를 전해보세요!
          <br />
          <span className="text-sm text-gray-400">
            추첨을 통해 커피 쿠폰을 드려요 :❩
          </span>
        </span>
      </div>
      {/* </div> */}

      <nav className="text-sm text-black bg-white pb-7 pt-7 mt-30 drop-shadow-xl">
        <ul className="flex justify-center text-sm font-medium lg:space-x-5">
          <li>
            <Link href="/">
              <a className="block px-10 py-3 bg-zinc-100">
                <div>여행후기</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block px-10 py-3 bg-zinc-100">
                <div>공지사항</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block px-10 py-3 bg-zinc-100">
                <div>자료실</div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="relative pt-2 mt-12 text-black mx-52">
        <input
          className="h-10 text-sm border-none rounded-lg pr-14 bg-neutral-100 focus:outline-none"
          type="search"
          name="search"
          placeholder="여행 후기를 검색해 보세요"
        />
        <div className="absolute ml-48 top-5">
          <Union />
        </div>
        <button className="absolute right-0 h-10 px-4 text-sm text-white rounded-2xl bg-sky-500">
          글쓰기
        </button>
      </div>

      <Pagination
        count={10}
        shape="rounded"
        className="flex justify-center mt-10"
      />
    </>
  );
}
