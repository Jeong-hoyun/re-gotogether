import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "rtk/features/loginSlice";
import Search from "./search";
import PageLogo from "../HeaderLogo/pageLogo";
import Wishlist from "../HeaderLogo/wishlist";
import Login from "../HeaderLogo/login";
import Signup from "../HeaderLogo/signup";
import SearchBar from "../HeaderLogo/searchBar";

export default function Header() {
  const loginUser = useSelector((state) => state.login.login);
  const dispatch = useDispatch();

  return (
    <>
      <header className="header">
        <div className="z-10 flex items-center h-20 bg-white border-b border-gray-200 ">
          <div className="relative w-full max-w-screen-xl px-6 mx-auto">
            <div className="flex items-center -mx-6">
              <div className="pl-6 pr-6 lg:w-1/4 xl:w-1/5 lg:pr-8">
                <div className="flex items-center">
                  <Link href="/">
                    <a className="flex-shrink-0 block lg:mr-4">
                      <PageLogo/>
                    </a>
                  </Link>
                </div>
              </div>
              {/* <Search /> */}
              {/* 화면이 작아지면 다음줄로 넘어가게 이것저것해보는중 */}
              <SearchBar className="lg:flex-row"/>

              <div className="flex flex-wrap items-center justify-end flex-grow">
                {/* <button className="flex items-center px-6 text-gray-500 lg:hidden focus:outline-none focus:text-gray-700">Í
                </button> */}
                <div className="lg:flex lg:items-center ">
                  <div className="flex ">
                    <Link href="/wishlist">
                      <a className="flex items-center mr-5 hover:text-gray-700">
                        <Wishlist/>
                        
                        <div className="sm:text-xs md:text-sm lg:text-base">관심상품</div> 
                      </a>
                    </Link>
                    {loginUser.username ? (
                      <button
                        onClick={() => dispatch(logout(loginUser.email))}
                        className="flex items-center mr-5 hover:text-gray-700"
                      >
                      <Login/>
                        로그아웃
                      </button>
                    ) : (
                      <Link href="/login">
                        <a className="flex items-center mr-5 hover:text-gray-700">
                        <Login/>
                        <div className="sm:text-xs md:text-sm lg:text-base">로그인</div>
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
                          <Signup/>
                          <div className="sm:text-xs md:text-sm lg:text-base">회원가입</div>
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