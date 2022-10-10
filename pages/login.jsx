import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from './../config/index';

const MySwal = withReactContent(Swal);
const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", `${API_URL}/login`);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(data));
    xhttp.onreadystatechange = function () {
      console.log(this);
      if (this.readyState == 4) {
        const objects = JSON.parse(this.responseText);       
        if (objects["status"] == 200) { 
          MySwal.fire({
            text: objects["message"],
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("./");
            }
          });
        } else {
          MySwal.fire({
            text: objects["message"],
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    };
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

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check"></div>
                <a href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
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
