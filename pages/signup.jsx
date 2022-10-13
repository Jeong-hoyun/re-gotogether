import { useState } from 'react';
import  Link  from 'next/link';
import Head from 'next/head';

export default function Signup(){
    return(
        <>
   <Head>
   <title>회원가입|고투게더</title>
   </Head>
  <section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-xl xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  회원가입
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900">이메일</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900">비밀번호</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">비밀번호 확인</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  <div>
                     <label for="username" className="block mb-2 text-sm font-medium text-gray-900">성함</label>
                     <input type="text" name="username" id="username" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                 </div>
                 <div>
                    <label for="birth" className="block mb-2 text-sm font-medium text-gray-900">생년월일</label>
                    <input type="date" name="birth" id="birth" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                </div>



                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500 ">I accept the <a className="font-medium text-primary-600 hover:underline " href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full bg-primary-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                </form>
          </div>
      </div>
  </div>
</section>
</>
    )
}