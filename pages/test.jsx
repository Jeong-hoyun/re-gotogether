import { FormEvent, useState } from "react";
import { useMultistepForm } from "./../components/tendency/useMultistepForm";
import { ThreeForm } from "./../components/tendency/threeform";
import { TwoForm } from "./../components/tendency/twoform";
import { OneForm } from "./../components/tendency/oneform";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";

const MySwal = withReactContent(Swal);
const INITIAL_DATA = {
  one: "",
  two: "",
  three: "",
};

const Test = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const Router = useRouter();
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    MySwal.fire({
      title: "최종으로 분석하시겠습니까?",
      showDenyButton: true,
      confirmButtonText: "분석",
      denyButtonText: `한번더 확인`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(data);
      } else if (result.isDenied) {
        Swal.fire("다시 한번 더 체크 해주세요", "", "info");
      }
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
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
      <form onSubmit={onSubmit} className="flex justify-between flex-wrap">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center text-gray-400">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <button
            type="submit"
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
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
    </div>
  );
};

export default Test;
