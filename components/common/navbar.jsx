import React, { useState } from "react";
import Link from "next/link";
import Logo1 from "../NavbarLogo/travelQ1";
import Logo3 from "../NavbarLogo/group3";
import Logo5 from "../NavbarLogo/region5";
import Logo7 from "../NavbarLogo/theme7";
import Logo9 from "../NavbarLogo/community9";
import navMenus from "../../json/navbar.content.json";
import DownArrow from "../NavbarLogo/downArrow";
/** 기본 레이아웃에서 링크를 담당하고 있다 */
export default function navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        data-collapse-toggle="mobile-menu-2"
        className="flex items-center visible text-xxs sm:invisible"
      >
        <ul className="flex m-auto mt-1 space-x-2 font-medium lg:flex-row lg:space-x-5 lg:mt-0 px-auto">
          {/* svg사이즈 어떻게 조절해요... 반응형으로 */}
          <li className="">
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo1 className="w-25" />
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
                <a className="block border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700">
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
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              >
                전체보기 <DownArrow />
              </button>
            </li>
            {/* 버튼 클릭하면 드랍다운메뉴들 보이게  */}
            {/* 해야할거: 버튼 모양이 클릭할때마다 바뀌게하기 */}
            {/* 하얀바탕화면이 레프트 훅 맞은거 css 고치기... 하... */}
            {isOpen ? (
              <div
                id="dropdown-bg"
                className="absolute z-10 grid grid-flow-col text-sm bg-white border gap-x-3 top-40 "
              >
                <ul className="py-1 text-sm ">
                  {navMenus.curations.map((curation) => {
                    return (
                      <li key={`${curation.link}${curation.id}`}>
                        <Link href={curation.link}>
                          <a
                            id={curation.id}
                            className="flex px-4 py-2 bg-gray"
                          >
                            {curation.text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <ul className="py-1 text-sm">
                  {navMenus.groups.map((group) => {
                    return (
                      <li key={`${group.link}${group.id}`}>
                        <Link href={group.link}>
                          <a id={group.id} className="flex px-4 py-2 bg-gray">
                            {group.text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <ul className="py-1 text-sm ">
                  {navMenus.countries.map((country) => {
                    return (
                      <li key={`${country.link}${country.id}`}>
                        <Link href={country.link}>
                          <a id={country.id} className="flex px-4 py-2 bg-gray">
                            {country.text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <ul className="py-1 text-sm ">
                  {navMenus.themes.map((theme) => {
                    return (
                      <li>
                        <Link href={theme.link}>
                          <a id={theme.id} className="flex px-4 py-2 bg-gray">
                            {theme.text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <ul className="px-0 py-1 text-sm ">
                  {navMenus.communities.map((community) => {
                    return (
                      <li key={community.link}>
                        <Link href={community.link}>
                          <a
                            id={community.id}
                            className="flex px-4 py-2 bg-gray"
                          >
                            {community.text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </ul>
        </div>
      </nav>
    </>
  );
}