import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "rtk/features/loginSlice";
import { useEffect } from "react";
import axios from "axios";
import  Head from 'next/head';
import Lottie from 'react-lottie-player'
import moveImg from '../json/loginmove.json'

const MySwal = withReactContent(Swal);
const Login = () => {
  const router = useRouter();
  const loginUser = useSelector((state) => state.login.login);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loginUser.username ? router.push("./mypage") : null;
    return () => {}; // cleanUp Function
  }, []);

  const onSubmit = async (data) => {
    const url = `/ec2/login`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      data: JSON.stringify(data),
      withCredentials: true,
      url,
    };
    try {
      const res = await axios(options);
      if (res.status == 200 && res.data.username) {
        MySwal.fire({
          text: `${res.data.username}님 로그인 감사합니다`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(login(res.data));
            router.push("./");
          }
        });
      } else {
        MySwal.fire({
          text: "아이디와 비밀번호를 다시확인해주세요",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (e) {
      console.error(e);
      MySwal.fire({
          text: "현재 서버 상태가 불완전합니다 나중에 로그인해주세요",
          icon: "error",
          confirmButtonText: "OK",
        });
    }
  };

  return (
    <>
      <Head>
        <title>회원가입|고투게더</title>
        <link rel="canonical" href="/signup" />
      </Head>
    <section className="mt-20">
    
      <div className="container h-full px-6 py-12">
        <div className="flex flex-wrap items-center justify-center h-full text-gray-800 g-6">      
          <div className="mb-12 ml-10 md:w-8/12 lg:w-3/12 md:mb-0">
       <Lottie
          loop
          animationData={moveImg}
          play
          style={{ width: 400, height: 300 }}
        />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <input
                  type="email"
                  className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="이메일을 입력해주세요"
                  {...register("email", {
                    required: "Please enter your email.",
                  })}
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="비밀번호를 입력해주세요"
                  {...register("password", {
                    required: "Please enter your password.",
                  })}
                />
              </div>

              <button
                type="submit"
                className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-650 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                로그인하기
              </button>  
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              {" "}
              <p className="mx-4 mb-0 font-semibold text-center">회원이 아니신가요?</p>
              <button
               onClick={()=>router.push("./signup") }
              className="py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-neutral-900 rounded shadow-md px-7 hover:bg-neutral-700 hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-lg"
          
            >
              회원가입하기
            </button>  
            </div>         
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Login;
