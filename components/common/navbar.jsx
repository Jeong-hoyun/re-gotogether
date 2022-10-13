import Link from "next/link";
import Logo1 from "../CustomLogo/여행큐레이션1";
import Logo3 from "../CustomLogo/그룹별여행3";
import Logo5 from "../CustomLogo/지역별여행5";
import Logo7 from "../CustomLogo/테마별여행7";
import Logo9 from "../CustomLogo/커뮤니티9";

export default function navbar() {
  return (
    <>
<header>           
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 -mt-16 flex items-center fixed inset-x-0 z-20">
            <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">     

                                 {/* 모바일 화면 */}
                    <div data-collapse-toggle="mobile-menu-2" className="visible sm:invisible items-center p-2 ml-1 text-sm text-gray-500 rounded-lg">
                    <ul className="flex mt-4 font-medium lg:flex-row lg:space-x-5 lg:mt-0 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 sm:space-x-5">
                        <li>
                            <Link href="/">
                                <a className="block pl-3 lg:p-0"> 
                                <Logo1/>
                                <div>큐레이션</div>
                                </a>
                            </Link>   
                        </li>
                        
                            
                        <li>
                            <Link href="/">
                                <a className="block pl-3 lg:p-0"> 
                                <Logo3/>
                                <div>그룹별</div>
                                </a>
                            </Link>   
                        </li>

                        <li>
                            <Link href="/">
                                <a className="block pl-3 lg:p-0"> 
                                <Logo5/>
                                <div>지역별</div>
                                </a>
                            </Link>   
                        </li>


                        <li>
                            <Link href="/">
                                <a className="block pl-3 lg:p-0"> 
                                <Logo7/>
                                <div>테마별</div>
                                </a>
                            </Link>   
                        </li>

                        <li>
                            <Link href="/">
                                <a className="block pl-3 lg:p-0"> 
                                <Logo9/>
                                <div>커뮤니티</div>
                                </a>
                            </Link>   
                        </li>
                      </ul> 

                    </div>
                </div>


                                                {/* 큰 화면 */}
                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">      
                   <div className="hidden sm:flex lg:items-center lg:justify-between justify-between items-center w-full md:flex md:w-auto p-2 ml-1 text-sm" id="navbar-search">
                    <div className="mx-[10vw] justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                       <ul className="flex font-medium lg:flex-row space-x-10 lg:mt-0 rounded-lg text-sm ">

                            <li>
                            <Link href="/">
                                <a className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"> 
                                <Logo1/>여행 큐레이션
                                </a>
                            </Link>   
                            </li>
                        

                            <li>
                            <Link href="/">
                                <a className="block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Logo3/>그룹별 여행
                                </a>
                            </Link>
                            </li>

                            <li>
                            <Link href="/">
                                <a className="block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Logo5/>지역별 여행
                                </a>
                            </Link>
                            </li>
                            
                            <li>
                            <Link href="/">
                                <a className="block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Logo7/>테마별 여행
                                </a>
                            </Link>
                            </li>

                            <li>
                            <Link href="/">
                                <a className="block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Logo9/>커뮤니티
                                </a>
                            </Link>
                            </li>

                            <li>
                            <Link href="#" className="block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">더보기</Link>
                                <svg class=" inline-block ml-2 h-6 w-6 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </li>
                    </ul>
               </div>
            </div>
            </div>
        </nav>
    </header>

</>
  )}
