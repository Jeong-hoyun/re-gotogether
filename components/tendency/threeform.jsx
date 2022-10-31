import { FormWrapper } from "./formwrapper";
import Image from "next/image";

export function ThreeForm({ three, updateFields }) {
  const onClick = (e) => {
    updateFields({ three: e.target.dataset.img });
  };

  return (
    <FormWrapper title="Q3. 여행지 도착! 어떤 코스를 즐겨볼까요?">
      <div onClick={onClick} className="active:shadow-xl text-gray-400 mx-auto">
        <Image
          src="/img/3_golf.jpg"
          alt="golf"
          data-img="골프"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div onClick={onClick} className="active:shadow-xl text-gray-400 mx-auto">
        <Image
          src="/img/3_historic_site.jpg"
          alt="historic_site"
          data-img="유럽"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div onClick={onClick} className="active:shadow-xl text-gray-400 mx-auto">
        <Image
          src="/img/3_landscape.jpg"
          alt="landscape"
          data-img="자연 탐방"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div onClick={onClick} className="active:shadow-xl text-gray-400 mx-auto">
        <Image
          src="/img/wine.jpg"
          alt="volunteer"
          data-img="와인"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div className="flex flex-wrap w-full mt-5 mb-10 flex-col items-center text-center">
        <p className="text-black-400 text-xl">
          {three && `${three}을 선택하셨습니다`}
        </p>
      </div>
    </FormWrapper>
  );
}
