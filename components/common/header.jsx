import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
export default function Header() {
  const [jwt, setJwt] = useState();

  useEffect(() => {
    try {
      if (localStorage.getItem("jwt")) {
        setJwt(localStorage.getItem("jwt"));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <header className="header">
        <section className="fixed inset-x-0 top-0 z-10 flex items-center h-16 bg-white border-b border-gray-200">
          <div className="relative w-full max-w-screen-xl px-6 mx-auto">
            <div className="flex items-center -mx-6">
              <div className="pl-6 pr-6 lg:w-1/4 xl:w-1/5 lg:pr-8">
                <div className="flex items-center">
                  <Link href="/">
                    <a className="flex-shrink-0 block lg:mr-4">
                      <img src="/img/logo.png" className="w-20" alt="logo" />
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
                <div className="hidden lg:flex lg:items-center lg:justify-between px-6">
                  <div className="flex justify-start items-center text-gray-500">
                    <Link href="/wishlist">
                      <a className="block flex items-center hover:text-gray-700 mr-5">
                        위시리스트
                      </a>
                    </Link>
                    {jwt ? (
                      <button className="block flex items-center hover:text-gray-700 mr-5">
                        Sign out
                      </button>
                    ) : (
                      <button className="block flex items-center hover:text-gray-700 mr-5">
                        Sign in
                      </button>
                    )}

                    <Link href="/">
                      <a className="flex items-center mr-5 hover:text-gray-700">
                        마이페이지
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
 