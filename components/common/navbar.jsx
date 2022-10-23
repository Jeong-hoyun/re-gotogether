import React, { useState } from "react";
import Link from "next/link";
import Logo1 from "../NavbarLogo/travel1";
import Logo2 from "../NavbarLogo/travel2";
import Logo3 from "../NavbarLogo/group3";
import Logo4 from "../NavbarLogo/group4";
import Logo5 from "../NavbarLogo/region5";
import Logo6 from "../NavbarLogo/region6";
import Logo7 from "../NavbarLogo/theme7";
import Logo8 from "../NavbarLogo/theme8";
import Logo9 from "../NavbarLogo/community9";
import Logo10 from "../NavbarLogo/community10";
import navMenus from "../../json/navbar.content.json";
import DownArrow from "../NavbarLogo/downArrow";

export default function navbar() {
  const [display, setDisplay] = useState(false);
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav
        data-collapse-toggle="mobile-menu-2"
        className="flex items-center visible text-xxs sm:invisible"
      >
        <ul className="flex m-auto space-x-2 mt-1 font-medium lg:flex-row lg:space-x-5 lg:mt-0 px-auto">
          <li>
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo2/>
                <div>큐레이션</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo4 />
                <div>그룹별</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo6 />
                <div>지역별</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo8 />
                <div>테마별</div>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="block pl-3 lg:p-0">
                <Logo10 />
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
          
          <ul className="flex space-x-10 text-sm lg:flex-row mb-20px"
          >
            <li onMouseLeave={() => setDisplay(false)}>
              <Link href="/">
                <a
                  className="block border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
                  onMouseEnter={() => setDisplay(true)}
                >
                  <Logo1 />
                  여행 큐레이션
                </a>
              </Link>

              {display && (
                <div className="absolute z-10 top-30  bg-white rounded-md">
                  <ul className="py-1 text-sm">
                    {navMenus.curations.map((curation) => {
                      return (
                        <li className="hover:bg-logo-color animate-fade-in-down">
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
                </div>
              )}
            </li>

            <li onMouseLeave={() => setDisplay1(false)}>
              <Link href="/">
                <a
                  className="block border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
                  onMouseEnter={() => setDisplay1(true)}
                >
                  <Logo3 />
                  그룹별 여행
                </a>
              </Link>

              {display1 && (
                <div className="absolute z-10 top-30  bg-white rounded-md" display1={display1}>
                  <ul className="py-1 text-sm ">
                    {navMenus.groups.map((group) => {
                      return (
                        <li className="hover:bg-logo-color animate-fade-in-down">
                          <Link href={group.link}>
                            <a id={group.id} className="flex px-4 py-2 bg-gray">
                              {group.text}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>

            <li onMouseLeave={() => setDisplay2(false)}>
              <Link href="/">
                <a
                  className="block border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 "
                  onMouseEnter={() => setDisplay2(true)}
                >
                  <Logo5 />
                  지역별 여행
                </a>
              </Link>

              {display2 && (
                <div className=" absolute z-10 top-30  bg-white animate-fade-in-down rounded-md ">
                  <ul className="py-1 text-sm ">
                    {navMenus.countries.map((country) => {
                      return (
                        <li className="hover:bg-logo-color  animate-fade-in-down">
                          <Link href={country.link}>
                            <a
                              id={country.id}
                              className="flex px-4 py-2 bg-gray"
                            >
                              {country.text}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>

            <li onMouseLeave={() => setDisplay3(false)}>
              <Link href="/">
                <a
                  className="block border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                  onMouseEnter={() => setDisplay3(true)}
                >
                  <Logo7 />
                  테마별 여행
                </a>
              </Link>
              {display3 && (
                <div className=" absolute z-10 top-30 bg-white rounded-md">
                  <ul className="py-1 text-sm ">
                    {navMenus.themes.map((theme) => {
                      return (
                        <li className="hover:bg-logo-color  animate-fade-in-down">
                          <Link href={theme.link}>
                            <a id={theme.id} className="flex px-4 py-2 bg-gray">
                              {theme.text}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>

            <li onMouseLeave={() => setDisplay4(false)}>
              <Link href="/">
                <a className="block border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                  onMouseEnter={() => setDisplay4(true)}>
                  <Logo9 />
                  커뮤니티
                </a>
              </Link>
              {display4 && (
              <div className=" absolute z-10 top-30 bg-white border rounded-md">
                <ul className="px-0 py-1 text-sm ">
                  {navMenus.communities.map((community) => {
                    return (
                      <li className="hover:bg-logo-color  animate-fade-in-down">
                        <Link href={community.link}>
                          <a id={community.id} className="flex px-4 py-2 bg-gray">
                            {community.text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                </div>
                )}
            </li>

          
         {/* 메가 드롭다운 버튼  */}
            <li>       
                <button onClick={() => setIsOpen(!isOpen)}
                className="block border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                전체보기 <DownArrow/>                
                </button>           
            </li>

            {isOpen ? (
            <div id="dropdown-bg" className=' absolute z-10 grid grid-cols-5 text-sm bg-white border inset-x-30 top-40'>
            
            <ul className="py-1 text-sm "> 
              { navMenus.curations.map(curation => {
                return(
                  <li key={`${curation.link}${curation.id}`}>
                    <Link href={curation.link}>
                    <a
                      id={curation.id} 
                      className="flex px-4 py-2 bg-gray">
                        {curation.text}
                    </a>
                    </Link>
                  </li>
                )
              })}
              </ul>

              <ul className="py-1 text-sm "> 
                { navMenus.groups.map(group => {
                  return(
                    <li key={`${group.link}${group.id}`}>
                    <Link href={group.link}>
                    <a
                      id={group.id} 
                      className="flex px-4 py-2 bg-gray">
                      {group.text}
                    </a>
                    </Link>
                  </li>
                  )
                })}
                </ul>

                <ul className="py-1 text-sm "> 
                { navMenus.countries.map(country => {
                  return(
                    <li key={`${country.link}${country.id}`}>
                    <Link href={country.link}>
                    <a
                      id={country.id} 
                      className="flex px-4 py-2 bg-gray">
                      {country.text}
                    </a>
                    </Link>
                  </li>
                  )
                })}
                </ul>

                <ul className="py-1 text-sm "> 
                { navMenus.themes.map(theme => {
                  return(
                    <li key={`${theme.link}${theme.id}`}>
                    {/* <li> */}
                    <Link href={theme.link}>
                    <a
                      id={theme.id} 
                      className="flex px-4 py-2 bg-gray">
                      {theme.text}
                    </a>
                    </Link>
                  </li>
                  )
                })}
                </ul>

                <ul className="px-0 py-1 text-sm "> 
                { navMenus.communities.map(community => {
                  return(
                    <li key={`${community.link}${community.id}`}>
                    <Link href={community.link}>
                    <a
                      id={community.id} 
                      className="flex px-4 py-2 bg-gray">
                      {community.text}
                    </a>
                    </Link>
                  </li>
                  )
                })}
                </ul>

            </div>
              ): null}




          </ul>
        </div>
      </nav>
    </>
  );
}