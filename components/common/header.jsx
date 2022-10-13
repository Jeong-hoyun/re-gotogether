import Link from "next/link";
import { useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { logout } from "rtk/features/loginSlice";

export default function Header() {
  const loginUser = useSelector((state) => state.login.login);
  const dispatch= useDispatch()

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
                              {/* 로고 사이즈 20하면 작고 21하면 왜 엄청 커질까*/}
                      <img src="/img/logo.png" className="w-21" alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="flex justify-end flex-grow lg:w-3/4 xl:w-4/5">
                <button className="flex items-center px-6 text-gray-500 lg:hidden focus:outline-none focus:text-gray-700">
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
<<<<<<< HEAD
                <div className="hidden px-6 lg:flex lg:items-center lg:justify-between">
=======
                <div className="hidden lg:flex lg:items-center lg:justify-between px-6">
>>>>>>> 1639ff5c67af662c9ab004a3c69027ea62332fd5
                  <div className="flex justify-start items-center mx-[10vw]">
                    <Link href="/wishlist">
                      <a className="flex items-center mr-5 hover:text-gray-700">
                        여행
                      </a>
                    </Link>
                    {loginUser.username ? (
<<<<<<< HEAD
                      <button  onClick={()=>dispatch(logout(loginUser.email))}  className="flex items-center mr-5 hover:text-gray-700">
=======
                      <button  onClick={()=>dispatch(logout(loginUser.email))}  className="flex items-center hover:text-gray-700 mr-5">
>>>>>>> 1639ff5c67af662c9ab004a3c69027ea62332fd5
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