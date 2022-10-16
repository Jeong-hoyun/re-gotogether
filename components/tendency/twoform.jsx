import { FormWrapper } from "./formwrapper";
import Image from "next/image";

export function TwoForm({ two, updateFields }) {
  return (
    <FormWrapper title="Q2. 어디론가 떠나고 싶은 날, 어떤 여행을 떠나고 싶으세요?">
      <div
        className="active:shadow-xl text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 "
        onClick={(e) => updateFields({ two: e.target.dataset.img })}
      >
        <Image
          src="/img/2_golf.jpg"
          alt="golf"
          data-img="골프"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div
        className="active:shadow-xl text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1"
        onClick={(e) => updateFields({ two: e.target.dataset.img })}
      >
        <Image
          src="/img/2_hiking.jpg"
          alt="hiking"
          data-img="자연 탐방"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div
        className="active:shadow-xl text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 "
        onClick={(e) => updateFields({ two: e.target.dataset.img })}
      >
        <Image
          src="/img/2_cultural_site.jpg"
          alt="cultural_site"
          data-img="유적지 탐방"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div
        className="active:shadow-xl text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 "
        onClick={(e) => updateFields({ two: e.target.dataset.img })}
      >
        <Image
          src="/img/2_volunteer.jpg"
          alt="volunteer"
          data-img="봉사활동"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div className="flex flex-wrap w-full mt-5 mb-10 flex-col items-center text-center">
        <p className="text-black-400 text-xl">
          {two && `${two}을 선택하셨습니다`}
        </p>
      </div>
    </FormWrapper>
  );
}
