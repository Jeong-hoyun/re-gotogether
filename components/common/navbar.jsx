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
     {/* 왜 내꺼는 mt-32해도 언니랑 다르게 스크롤 내릴때 헤더 사라지고 헤더랑 네브바 사이에 이상한 공간이 생기지 */}
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 -mt-16 flex fixed inset-x-0 z-20 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="flex items-center lg:order-2">
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
            
                        <button>
                        <li> 
                            <Logo1 className="hover: <Logo2/>"/>
                            <Link href="#" className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"> 여행 큐레이션 </Link>    
                        </li>
                        </button>

                        <li>
                            <Logo3/>
                            <Link href="#" className="block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">그룹별 여행</Link>
                        </li>

                        <li>
                            <Logo5/>
                            <Link href="#" className="block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">지역별 여행</Link>
                        </li>
                        <li>
                            <Logo7/>
                            <Link href="#" className="block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">테마별 여행</Link>
                        </li>
                        <li>
                            <Logo9/>
                            <Link href="#" className="block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">커뮤니티</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</>
  )}