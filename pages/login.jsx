import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
import { API_URL } from "./../config/index";
import { useDispatch, useSelector } from "react-redux";
import { login } from "rtk/features/loginSlice";
import { useEffect } from "react";
import  axios  from 'axios';


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
    const url=`/ec2/login`
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
    }catch(e){
      console.error(e)
    }
  };

  return (
    <section className="mt-20">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  {...register("email", {
                    required: "Please enter your email.",
                  })}
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  {...register("password", {
                    required: "Please enter your password.",
                  })}
                />
              </div>
        
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                {" "}
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
