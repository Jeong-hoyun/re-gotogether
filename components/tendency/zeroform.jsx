import Image from "next/image";
import Logo1 from "./../NavbarLogo/travelQ1";

export function Zeroform({ zero, updateFields, name }) {
  return (
    <div className="relative">
      <Image
        className="z-1"
        src={"/img/formSearch.jpg"}
        width={1920}
        height={807}
      />
      <h2 className="absolute z-3 text-white left-5 top-px lg:left-40 lg:top-40 lg:text-4xl sm:text-xl">
        혹시, 여행 좋아하세요?
      </h2>
      <h3 className="absolute z-4 text-white left-5 top-5 lg:left-40 lg:top-56 text-white lg:text-2xl sm:text-sm">
        {name}님에게 딱 맞는 여행을 찾아드려요!
      </h3>
      <button
        className="absolute z-2 left-5 top-20 border-solid border-2 lg:left-40 lg:top-80 lg:text-xl lg:w-2/4  lg:border-amber-300 rounded-lg text-amber-300 "
        onClick={() => updateFields({ zero: "start" })}
      >
        <span className="text-center">당신에게 맞는 여행을 찾아보세요!</span>
        <Logo1 />
      </button>
    </div>
  );
}
