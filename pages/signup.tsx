import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../config/index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
const MySwal = withReactContent(Swal);
/** 회원가입 페이지 **/
export default function Signup() {
  const router = useRouter();
  const password = useRef({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      phoneNumber: "",
      birth: "",
      gender: "",
    },
  });

  password.current = watch("password", "");

  const submitForm = async (data) => {
    data.birth = data.birth.replace(/-/g, "");
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const url = `${API_URL}/signUp`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      data: JSON.stringify(data),
      withCredentials: true,
      url,
    };
    try {
      const res = await axios(options);
      if (
        res.data.message === "해당 이메일로 가입된 사용자가 이미 존재합니다."
      ) {
        MySwal.fire({
          text: `${res.data.message}`,
          icon: "error",
        });
        source.cancel("Operation canceled by the user.");
      } else {
        if (res.statusText === "") {
          MySwal.fire({
            text: `${data.username}님 회원가입 감사합니다.`,
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("./");
            }
          });
          source.cancel("Operation canceled by the user.");
        }
      }
    } catch (error) {
      console.error(error);
      source.cancel("Operation canceled by the user.");
    }
  };

  return (
    <>
      <Head>
        <title>회원가입|고투게더</title>
        <link rel="canonical" href="/signup" />
      </Head>
      <section className="mt-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-xl xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-gray-100">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                회원가입
              </h1>
              <form
                className="space-y-4 md:space-y-6 "
                onSubmit={handleSubmit(submitForm)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    이메일
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    비밀번호
                  </label>
                  <input
                    ref={password}
                    {...register("password", {
                      required: true,
                    })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    비밀번호 확인
                  </label>
                  <input
                    {...register("confirmpassword", {
                      validate: (value) =>
                        value === password.current ||
                        "The passwords do not match",
                    })}
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    성함
                  </label>
                  <input
                    {...register("username", {
                      required: true,
                    })}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="성함"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="birth"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    생년월일
                  </label>
                  <input
                    {...register("birth", {
                      required: true,
                    })}
                    type="date"
                    name="birth"
                    id="birth"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    성함
                  </label>
                  <input
                    {...register("phoneNumber", {
                      required: true,
                    })}
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="연락처"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  성별
                </label>
                <select
                  {...register("gender", {
                    required: true,
                  })}
                >
                  <option value="2">여성</option>
                  <option value="1">남성</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  회원가입
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
