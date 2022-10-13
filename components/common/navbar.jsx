import Link from "next/link";
import Logo1 from "../NavbarLogo/travelQ1";
import Logo3 from "../NavbarLogo/group3";
import Logo5 from "../NavbarLogo/region5";
import Logo7 from "../NavbarLogo/theme7";
import Logo9 from "../NavbarLogo/community9";

export default function navbar() {
  return (
    <>

    <nav
        data-collapse-toggle="mobile-menu-2"
        className="items-center visible ml-1 text-sm text-gray-500 rounded-lg sm:invisible p-0 m-0"
      >

        <ul className="flex mt-1 font-medium lg:flex-row lg:space-x-5 lg:mt-0 rounded-lg text-sm px-auto sm:space-x-5 ">
          <li>
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo1 />
                <div>큐레이션</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo3 />
                <div>그룹별</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo5 />
                <div>지역별</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo7 />
                <div>테마별</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo9 />
                <div>커뮤니티</div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        className="items-center justify-between hidden w-full mx-auto text-sm sm:flex lg:items-center lg:justify-between md:flex md:w-auto"
        id="navbar-search"
      >
        <div
          className="items-center justify-between w-full mx-auto mb-2 lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex space-x-10 text-sm lg:flex-row mb-20px ">
            <li>
              <Link href="/">
                <a className="block  border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700">
                  <Logo1 />
                  여행 큐레이션
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="block border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                  <Logo3 />
                  그룹별 여행
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="block border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                  <Logo5 />
                  지역별 여행
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="block border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                  <Logo7 />
                  테마별 여행
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="block border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                  <Logo9 />
                  커뮤니티
                </a>
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              >
                더보기
                </Link>
              <svg
                class=" inline-block ml-2 h-6 w-6 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
                
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
