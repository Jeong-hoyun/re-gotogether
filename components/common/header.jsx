import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "rtk/features/loginSlice";
import Search from "./search";

export default function Header() {
  const loginUser = useSelector((state) => state.login.login);
  const dispatch = useDispatch();

  return (
    <>
      <header className="header">
        <div className=" flex items-center h-20 bg-white border-b border-gray-200 z-10">
          <div className="relative w-full max-w-screen-xl px-6 mx-auto">
            <div className="flex items-center -mx-6">
              <div className="pl-6 pr-6 lg:w-1/4 xl:w-1/5 lg:pr-8">
                <div className="flex items-center">
                  <Link href="/">
                    <a className="flex-shrink-0 block lg:mr-4">
                      <Image
                        src="/img/logo.png"
                        className="w-21"
                        alt="logo"
                        width={250}
                        height={41}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <Search />
              <div className="flex flex-grow justify-end flex-wrap items-center">
                <button className="flex items-center px-6 text-gray-500 lg:hidden focus:outline-none focus:text-gray-700">
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
                <div className="hidden lg:flex lg:items-center ">
                  <div className="flex ">
                    <Link href="/wishlist">
                      <a className="flex items-center hover:text-gray-700 mr-5">
                        여행
                      </a>
                    </Link>
                    {loginUser.username ? (
                      <button
                        onClick={() => dispatch(logout(loginUser.email))}
                        className="flex items-center hover:text-gray-700 mr-5"
                      >
                        로그아웃
                      </button>
                    ) : (
                      <Link href="/login">
                        <a className="flex items-center mr-5 hover:text-gray-700">
                          로그인
                        </a>
                      </Link>
                    )}
                    {loginUser.username ? (
                      <Link href="/mypage">
                        <a className="flex items-center mr-5 hover:text-gray-700">
                          마이페이지
                        </a>
                      </Link>
                    ) : (
                      <Link href="/signup">
                        <a className="flex items-center mr-5 hover:text-gray-700">
                          회원가입
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
