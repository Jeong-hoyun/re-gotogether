import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="header">
        <section className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-30 h-16 items-center">
          <div className="w-full max-w-screen-xl relative mx-auto px-6">
            <div className="flex items-center -mx-6">
              <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
                <div className="flex items-center">
                  <a href="/" className="block lg:mr-4 flex-shrink-0">
                    <img src="/img/logo.png" className="w-20" alt="logo" />
                  </a>
                </div>
              </div>

              <div className="flex flex-grow lg:w-3/4 xl:w-4/5 justify-end">
                <button className="flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700">
                  <svg
                    className="fill-current w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
                <div className="hidden lg:flex lg:items-center lg:justify-between px-6">
                  <div className="flex justify-start items-center text-gray-500">
                    <a
                      className="block flex items-center hover:text-gray-700 mr-5"
                      href={"/"}
                    >
                      위시리스트
                    </a>
                    <a
                      className="block flex items-center hover:text-gray-700 mr-5"
                      href={"/"}
                    >
                      로그인
                    </a>
                    <a
                      className="block flex items-center hover:text-gray-700 mr-5"
                      href={"/"}
                    >
                      마이페이지
                    </a>
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
