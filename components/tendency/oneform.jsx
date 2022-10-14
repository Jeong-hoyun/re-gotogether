import { FormWrapper } from "./formwrapper";

export function OneForm({ one, updateFields }) {
  return (
    <FormWrapper title="Q1. 여행에 필수로 들고 가야 할 물건은 어떤 것일까요?">
      <div
        onClick={(e) => updateFields({ one: e.target.dataset.img })}
        className="active:shadow-xl text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1"
      >
        <img
          src="/img/1_sunscreen.jpg"
          alt="sunscreen"
          data-img="선크림"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div
        onClick={(e) => updateFields({ one: e.target.dataset.img })}
        className="active:shadow-xl text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 "
      >
        <img
          src="/img/1_camera.jpg"
          alt="camera"
          data-img="카메라"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div
        onClick={(e) => updateFields({ one: e.target.dataset.img })}
        className="active:shadow-xl text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1"
      >
        <img
          src="/img/1_hiking_shoes.jpg"
          alt="hiking_shoes"
          data-img="등산화"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div
        onClick={(e) => updateFields({ one: e.target.dataset.img })}
        className="active:shadow-xl text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 "
      >
        <img
          src="/img/1_golf_club.jpg"
          alt="golf_club"
          data-img="골프채"
          className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
          width={300}
          height={200}
        />
      </div>
      <div className="flex flex-wrap w-full mt-5 mb-10 flex-col items-center text-center">
        <p className="text-black-400 text-xl">
          {one && `${one}를 선택하셨습니다`}
        </p>
      </div>
    </FormWrapper>
  );
}
