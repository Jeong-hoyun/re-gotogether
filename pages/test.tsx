import { useState } from "react";
import { useRouter } from "next/router";
import { useMultistepForm } from "../components/tendency/useMultistepForm";
import { ThreeForm } from "../components/tendency/threeform";
import { TwoForm } from "../components/tendency/twoform";
import { OneForm } from "../components/tendency/oneform";
import { Zeroform } from "../components/tendency/zeroform";
import { API_URL } from "../config/index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import Image from "next/image";
import Result from "../components/tendency/result";
import { useSelector } from "react-redux";
import Link from "next/link";

const MySwal = withReactContent(Swal);
const INITIAL_DATA = {
  one: "",
  two: "",
  three: "",
};

const Test = ({ name }) => {
  const [data, setData] = useState(INITIAL_DATA);
  const [result, setResult] = useState();
  const Router = useRouter();
  const loginUser = useSelector((state) => state.login.login);

  function onSubmit(e:Event) {
    e.preventDefault();
    if (!isLastStep) return next();
    if (data.one !== "" && data.two !== "" && data.three !== "") {
      MySwal.fire({
        title: "최종으로 분석하시겠습니까?",
        showDenyButton: true,
        confirmButtonText: "분석",
        denyButtonText: `한번더 확인`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.get(
            `${API_URL}/api/products?keyword=${data.three}&page=0&pageSize=4`,
          );
          if (res.data) setResult(res.data.products);
          console.log(res.data.products);
        } else if (result.isDenied) {
          Swal.fire("다시 한번 더 체크 해주세요", "", "info");
        }
      });
    } else {
      MySwal.fire({
        title: "뒤에 그림을 클릭해주세요",
        icon: "info",
      });
    }
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Zeroform {...data} updateFields={updateFields} name={name} />,
      <OneForm {...data} updateFields={updateFields} />,
      <TwoForm {...data} updateFields={updateFields} />,
      <ThreeForm {...data} updateFields={updateFields} />,
    ]);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  return (
    <div className="max-w-full mx-auto mt-10 bg-center">
      {result ? (
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center text-gray-400">
            {result.length > 0 ? (
              <div className="flex flex-col">
                <div className="flex flex-row justify-start">
                  <h3>{loginUser.username}님에게 여행을 추천해드립니다!</h3>
                </div>
                <div className="flex flex-col overflow-hidden hover:overflow-y-auto h-96 bg-[url('/img/graph.png')] bg-no-repeat bg-contain">
                  {result.map((item) => {
                    return (
                      <div key={item.title} className="ml-96 bg-gray-100">
                        <Link href={`/travel/${item.productId}`}>
                          <a>
                            <Image
                              className="rounded-lg"
                              src={item.images[0]}
                              width={300}
                              height={300}
                            ></Image>
                          </a>
                        </Link>
                        <h3>{item.title}</h3>
                      </div>
                    );
                  })}
                </div>
                <Link href={"/test"}>
                  <a className="flex">다시테스트하기</a>
                </Link>
              </div>
            ) : (
              <Result />
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex justify-between flex-wrap">
          <div className="hidden">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded ${
                !isFirstStep ? "" : "hidden"
              }`}
            >
              {isLastStep ? "완료" : "다음"}
            </button>

            {!isFirstStep && (
              <button
                type="button"
                onClick={back}
                className="bg-blue-500 m-1 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
              >
                뒤로
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default Test;
