import { useState } from "react";
import { useMultistepForm } from "./../components/tendency/useMultistepForm";
import { ThreeForm } from "./../components/tendency/threeform";
import { TwoForm } from "./../components/tendency/twoform";
import { OneForm } from "./../components/tendency/oneform";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "./../config/index";
import Image from "next/image";
import { Zeroform } from "./../components/tendency/zeroform";

const MySwal = withReactContent(Swal);
const INITIAL_DATA = {
  one: "",
  two: "",
  three: "",
};

const Test = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [result, setResult] = useState();
  const Router = useRouter();
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    if (data.one !== "" && data.two !== "" && data.three !== "") {
      MySwal.fire({
        title: "최종으로 분석하시겠습니까?",
        showDenyButton: true,
        confirmButtonText: "분석",
        denyButtonText: `다시 확인하기`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.get(
            `${API_URL}/api/products?keyword=${data.three}&page=0&pageSize=4`,
          );
          if (res.data) setResult(res.data.products);
          console.log(res.data.products);
        } else if (result.isDenied) {
          Swal.fire("다시 한번 더 체크해 주세요", "", "info");
        }
      });
    } else {
      MySwal.fire({
        title: "선택하지 않으신 항목을 선택해 주세요.",
        icon: "info",
      });
    }
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Zeroform {...data} updateFields={updateFields} />,
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
    <div className="max-w-7xl mx-auto mt-20  bg-center">
      {result ? (
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center text-gray-400">
            {result.length > 0
              ? result.map((item) => {
                  return (
                    <div key={item.title}>
                      <Image
                        src={item.images[0]}
                        width={300}
                        height={300}
                      ></Image>
                      <h3>{item.title}</h3>
                    </div>
                  );
                })
              : "현재 성향에 맞는 상품이 없습니다 죄송합니다"}
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex justify-between flex-wrap">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center text-gray-400">
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
