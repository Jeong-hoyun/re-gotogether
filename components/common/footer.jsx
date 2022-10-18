import Image from "next/image";
import company_logo2 from "../../public/img/company_logo2.png";
import Link from "next/link";
import Share from "../Logo/share.jsx";
import Youtube from "../Logo/youtube.jsx";
import Call from "../Logo/call.jsx";
import Location from "../Logo/Location.jsx";
import Mail from "../Logo/Mail.jsx";

export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-24 pb-10 relative">
      {/* logo */}
      <div className="mb-2 bg-footer-color">
        <div className="md:mx-44 lg:mx-44 p-2 xl:py-3 xl:px-5 md:py-3 md:px-5 w-56 mb-7 transition-all">
          <div className="mt-2">
            <Image src={company_logo2} alt="company_logo" />
          </div>
        </div>

        <a
          href="#"
          className="hidden xl:block xl:absolute xl:w-7 xl:right-[268px] xl:top-8"
        >
          <Youtube />
        </a>
        <a
          href="#"
          className="hidden xl:block xl:absolute xl:w-7 xl:right-[215px] xl:top-8"
        >
          <Share width="10" height="10" fill="blue" />
        </a>
      </div>

      {/* logo */}

      <div className="hidden xl:block xl:float-right xl:pr-48 xl:mt-10 ">
        <a
          href="#"
          className="inline-block p-3 mr-5 border rounded-full divide-double"
        >
          <Call />
        </a>
        <a href="#" className="inline-block p-3 mr-5 border rounded-full">
          <Location />
        </a>
        <a href="#" className="inline-block p-3 mr-5 border rounded-full">
          <Mail />
        </a>
      </div>

      {/* 안심카드결제 | 이용약관 | 개인정보처리방침 | 여행약관 */}

      <div className="xl:pl-2 xl:mx-48 md:pl-2 md:mx-48 mb-5 mx-2 transition-all">
        <div className="md:justify-between">
          <div className="container w-[500px]">
            <span className="mr-4 text-sm text-gray-400">안심카드결제</span>
            <span className="mt-4 mr-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0">
              이용약관
            </span>
            <span className="mt-4 mr-4 text-sm font-semibold text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0">
              개인정보처리방침
            </span>
            <span className="mt-4 text-sm text-gray-400 text-s sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0">
              여행약관
            </span>
          </div>
        </div>
      </div>

      {/* 고객센터 | 입금계좌 */}

      <div className="flex xl:ml-48 md:ml-48  transition-all">
        <div className="w-full mx-2 w-[240px]">
          <h2 className="mb-2 text-sm font-medium tracking-wider text-gray-300 title-font">
            고객센터
          </h2>
          <ul className="mb-6 text-lg list-none">
            <li className="text-base text-gray-200">
              영업시간 : 09:00 ~ 18:00
            </li>
            <li className="mb-1 text-2xl font-medium text-gray-100 text-number-color">
              02-6105-7711
            </li>
            <li className="mb-1 text-sm text-gray-400">
              토/일요일 및 공휴일 휴무
            </li>
          </ul>
        </div>
        <div className="w-full w-[240px]">
          <h2 className="mb-2 text-sm font-medium tracking-wider text-gray-300 title-font">
            입금계좌
          </h2>
          <ul className="mb-6 text-lg list-none">
            <li className="text-base text-gray-200">KEB하나은행</li>
            <li className="mb-1 text-2xl font-medium text-gray-100 text-number-color">
              267-910020-36604
            </li>
            <li className="mb-1 text-sm text-gray-400">(주)더샤이니</li>
          </ul>
        </div>
      </div>
      <div>
        {/* 상호명 | 주소 | 카피라이트 */}

        <div className="container flex flex-col flex-wrap xl:ml-48 md:ml-48 pl-2 bg-gray-800 transition-all">
          <p className="text-xs text-gray-400 text-left">
            상호명: (주)더샤이니ㅣ대표: 김소영ㅣ개인정보보호책임자: 김승덕 |
            주소: 서울특별시 중구 청계천로40(한국관광공사 서울센터) 707호
          </p>
          <p className="text-xs text-gray-400 text-left">
            사업자등록번호: 495-87-02492ㅣ통신판매업신고번호:
            2021-서울중구-2450ㅣ이메일: gotogether@shinytravels.com
          </p>
          <p className="text-xs text-gray-400 text-left">
            고투게더 서비스 내 결제 발생 시 고객상담, 취소, 환불 등의 거래에
            대하여 책임을 집니다.
          </p>
          <p className="text-xs text-center text-gray-400 sm:text-left">
            고투게더는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
            상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.
            <a className="ml-64">
              Copyright ⓒ 2022 고투게더 All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
