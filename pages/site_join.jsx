import Head from "next/head";
import { API_URL } from "./../config/index";
import { Formik } from "formik";
import axios from "axios";
import { useState } from "react";

const SiteJoin = () => {
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    const API_DATA = await axios
      .post(API_URL, { data })
      .then((res) => res.json());
    console.log(API_DATA);
    setDisabled(false);
  };

  return (
    <>
      <Head>
        <title>고투게더</title>
        <meta name="description" content="여행 테마" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="antialiased text-gray-900 px-6">
        <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
          <div className="py-8">
            <h1 className="text-4xl font-bold">회원가입</h1>
          </div>
          <div className="py-12">
            <div className="mt-8 max-w-md">
              <form>
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-gray-700">이름</span>
                    <input
                      type="text"
                      className="mt-1 block w-full"
                      placeholder="이름"
                      name="username"
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700">비밀번호</span>
                    <input
                      type="password"
                      className="mt-1 block w-full"
                      placeholder="비밀번호"
                      name="password"
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input
                      type="email"
                      className="mt-1 block w-full"
                      placeholder="exam@example.com"
                      name="email"
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700">연락처</span>
                    <input
                      type="tel"
                      className="mt-1 block w-full"
                      placeholder="연락처"
                      name="phoneNumber"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">생년월일</span>
                    <input
                      type="date"
                      className="mt-1 block w-full"
                      name="birth"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">성별</span>
                    <select className="block w-full mt-1">
                      <option value={1}>남</option>
                      <option value={2}>여</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Additional details</span>
                    <textarea className="mt-1 block w-full" rows="3"></textarea>
                  </label>
                  <div className="block">
                    <div className="mt-2">
                      <div>
                        <label className="inline-flex items-center">
                          <input type="checkbox" />
                          <span className="ml-2">
                            Email me news and special offers
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" onSubmit={handleSubmit}>
                    회원가입
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteJoin;
