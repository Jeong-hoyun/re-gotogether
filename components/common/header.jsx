import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "rtk/features/loginSlice";
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
        <div className="z-10 flex items-center bg-white border-b border-gray-200">
          <div className="relative w-full max-w-screen-xl px-6 mx-auto">
            <div
              id="MainDiv"
              className="grid grid-cols-2 gap-x-2 grid-flow-row-dense md:flex md:items-center md:mx-6"
            >
              <div id="firstdiv" className="lg:w-1/4 xl:w-1/5 lg:pr-8">
                <div className="shrink-0 block mt-10px lg:mr-4">
                  <Link href="/">
                    <a>
                      <PageLogo className="w-110px lg:text-xl" />
                    </a>
                  </Link>
                </div>
              </div>

              {/* <Search /> */}
              {/* 화면이 작아지면 다음줄로 넘어가게*/}
              <div id="seconddiv" className="col-span-3 lg:mt-2 lg:mx-auto sm:flex-initial">
               <SearchBar />
              </div>
              <div className="flex flex-wrap items-center lg:justify-end sm:justify-center flex-grow col-span-3 sm:mb-1">
                <div className="lg:flex lg:items-center ">
                  <div className="flex">
                    <Link href="/wishlist">
                      <a className="flex shrink-0 items-center hover:text-gray-700">
                        <Wishlist />
                        <div className="mr-2 sm:text-xs lg:text-base">
                          관심상품
                        </div>
                      </a>
                    </Link>
                    {loginUser.username ? (
                      <button
                        onClick={() => dispatch(logout(loginUser.email))}
                        className="shrink-0 flex items-center mr-2 hover:text-gray-700"
                      >
                        <Login />
                        로그아웃
                      </button>
                    ) : (
                      <Link href="/login">
                        <a className="flex shrink-0 items-center mr-2 hover:text-gray-700">
                          <Login />
                          <div className="sm:text-xs lg:text-base">로그인</div>
                        </a>
                      </Link>
                    )}
                    {loginUser.username ? (
                      <Link href="/mypage">
                        <a className="flex shrink-0 items-center mr-2 hover:text-gray-700">
                          <div className="sm:text-xs lg:text-base">
                            마이페이지
                          </div>
                        </a>
                      </Link>
                    ) : (
                      <Link href="/signup">
                        <a className="flex shrink-0 items-center mr-2 hover:text-gray-700">
                          <Signup />
                          <div className="sm:text-xs lg:text-base">회원가입</div>
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
