import Image from "next/image";
import company_logo2 from "../../public/img/company_logo2.png";
import Share from "../Logo/share";
import Youtube from "../Logo/youtube";
import Call from "../Logo/call";


export default function Footer() {
  return (
    <footer className="relative pb-8 mt-24 bg-gray-800">
      {/* logo */}
      <div className="mb-2 bg-footer-color">
        <div className="w-56 py-3 transition-all md:mx-44 lg:mx-44 xl:px-5 md:px-5 mb-7">
          <div className="mt-2">
            <Image src={company_logo2} alt="company_logo" />
          </div>
        </div>

        <a
          href="https://www.youtube.com/watch?list=TLGGJtDTxTICk8AxODEwMjAyMg&v=Jm3TiJ5lFKQ&feature=emb_title&ab_channel=GoTogether"
          target="blank"
          className="hidden xl:block xl:absolute xl:w-7 xl:right-[268px] xl:top-6 xl:mr-5 hover:opacity-75 transition-all"
        >
          <Youtube />
        </a>
        <a
          onClick={(e) => e.preventDefault}
          className="hidden xl:block xl:absolute xl:w-7 xl:right-[215px] xl:top-6 hover:opacity-75 transition-all"
        >
          <Share />
        </a>
      </div>

      {/* logo */}

      <div className="hidden xl:block xl:float-right xl:pr-48 xl:mt-10">
        <a
          href="tel:+822-6105-7711"
          className="inline-block p-3 mr-5 transition-all border rounded-full hover:opacity-75 border-neutral-500"
        >
          <Call />
        </a>
        <a
          href="https://goo.gl/maps/7RHLh3qouDBQCDMM8"
          target="blank"
          className="inline-block p-3 mr-5 transition-all border rounded-full hover:opacity-75 border-neutral-500"
        >
            <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 0 24 24"
      width="30px"
      fill="#e2e2e2"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
        </a>
        <a
          href="mailto:gotogether@shinytravels.com"
          target="blank"
          className="inline-block p-3 transition-all border rounded-full hover:opacity-75 border-neutral-500"
        >
            <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 0 24 24"
      width="30px"
      fill="#e2e2e2"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
        </a>
      </div>

      {/* 안심카드결제 | 이용약관 | 개인정보처리방침 | 여행약관 */}

      <div className="mx-2 mb-5 transition-all xl:pl-2 xl:mx-48 md:pl-2 md:mx-48">
        <div className="xl:w-[500px] md:w-[500px] text-sm text-gray-400">
          <span className="mr-6 transition-all cursor-pointer hover:text-white hover:opacity-75">
            안심카드결제
          </span>
          <span className="mt-4 mr-6 transition-all cursor-pointer sm:ml-4 sm:pl-4 hover:text-white hover:opacity-75">
            이용약관
          </span>
          <span className="mt-4 mr-6 font-semibold transition-all cursor-pointer sm:ml-4 sm:pl-4 hover:text-white hover:opacity-75">
            개인정보처리방침
          </span>
          <span className="mt-4 transition-all cursor-pointer sm:ml-4 sm:pl-4 hover:text-white hover:opacity-75">
            여행약관
          </span>
        </div>
      </div>

      {/* 고객센터 | 입금계좌 */}

      <div className="flex transition-all xl:ml-48 md:ml-48">
        <div className="w-full mx-2 w-[240px]">
          <h2 className="mb-2 text-sm font-medium tracking-wider text-gray-300 title-font">
            고객센터
          </h2>
          <ul className="mb-6 text-lg list-none">
            <li className="text-base text-gray-200">
              영업시간 : 09:00 ~ 18:00
            </li>
            <li className="mb-1 text-xl font-semibold md:text-2xl xl:text-2xl text-number-color">
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
            <li className="mb-1 text-xl font-semibold md:text-2xl xl:text-2xl text-number-color">
              267-910020-36604
            </li>
            <li className="mb-1 text-sm text-gray-400">(주)더샤이니</li>
          </ul>
        </div>
      </div>
      <div>
        {/* 상호명 | 주소 | 카피라이트 */}

        <div className="pl-2 text-xs text-gray-400 transition-all bg-gray-800 xl:ml-48 md:ml-48">
          <p>
            상호명: (주)더샤이니ㅣ대표: 김소영ㅣ개인정보보호책임자: 김승덕 |
            주소: 서울특별시 중구 청계천로40(한국관광공사 서울센터) 707호
          </p>
          <p>
            사업자등록번호: 495-87-02492ㅣ통신판매업신고번호:
            2021-서울중구-2450ㅣ이메일: gotogether@shinytravels.com
          </p>
          <p>
            고투게더 서비스 내 결제 발생 시 고객상담, 취소, 환불 등의 거래에
            대하여 책임을 집니다.
          </p>
          <p>
            고투게더는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
            상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.
          </p>
          <p className="mt-3">Copyright ⓒ 2022 고투게더 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
