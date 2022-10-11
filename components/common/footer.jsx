import Image from "next/image";
import company_logo from "../../public/img/company_logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-slate-700">
      <div className="mx-auto py-12 sm:px-12">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <span className="text-base text-white	 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            안심카드결제
          </span>
          <span className="text-base text-white	 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            이용약관
          </span>
          <span className="text-base text-white	 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            개인정보처리방침
          </span>
          <span className="text-base text-white	 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            여행약관
          </span>
        </div>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            {/* <Image src={company_logo} alt="company_logo" /> */}
          </a>
        </div>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font text-white	 tracking-widest text-lg mb-3 font-bold">
              고객센터
            </h2>
            <ul className="list-none mb-10 text-lg text-white">
              <li className="text-lg mb-1">02-6105-7711</li>
              <li className="text-lg mb-1">영업시간 : 09:00 ~18:00</li>
              <li className="text-lg mb-1">토/일요일 및 공휴일 휴무</li>
            </ul>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3 font-bold">
              입금계좌
            </h2>
            <ul className="list-none mb-10 text-lg text-white">
              <li className="text-lg mb-1">KEB하나은행</li>
              <li className="text-lg mb-1">267-910020-36604</li>
              <li className="text-lg mb-1">(주)더샤이니</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-700">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              상호명: (주)더샤이니ㅣ대표: 김소영ㅣ개인정보보호책임자: 김승덕
            </p>
            <p className="text-white text-sm text-center sm:text-left">
              주소: 서울특별시 중구 청계천로40(한국관광공사 서울센터) 707호
            </p>
            <p className="text-white text-sm text-center sm:text-left">
              사업자등록번호: 495-87-02492ㅣ통신판매업신고번호:
              2021-서울중구-2450ㅣ이메일: gotogether@shinytravels.com
            </p>
            <p className="text-white text-sm text-center sm:text-left">
              고투게더 서비스 내 결제 발생 시 고객상담, 취소, 환불 등의 거래에
              대하여 책임을 집니다.
            </p>
            <p className="text-white text-sm text-center sm:text-left">
              고투게더는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
              상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.
            </p>
            <p className="text-white text-sm text-center sm:text-left">
              {" "}
              Copyright ⓒ 2022 고투게더 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
