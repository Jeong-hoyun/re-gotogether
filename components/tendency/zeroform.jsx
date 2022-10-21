import Image from "next/image";
import Logo1 from "./../NavbarLogo/travelQ1";

export function Zeroform({ zero, updateFields, name }) {
  return (
    <div className="relative">
      <Image
        className="z-1"
        src={"/img/formSearch.webp"}
        width={1280}
        height={712}
      />
      <h2 className="absolute z-3 text-white sm:top-10px lg:left-40 lg:top-36 lg:text-3xl sm:text-xl">
        혹시, 여행 좋아하세요?
      </h2>
      <h3 className="absolute z-4 text-white sm:top-30px lg:left-40 lg:top-48 text-white lg:text-2xl sm:text-sm">
        {name}님에게 딱 맞는 여행을 찾아드려요!
      </h3>
      <button
        className="absolute z-2 left-40 top-60 text-xl w-2/4 border-solid border-2 border-amber-300 rounded-lg text-amber-300 "
        onClick={() => updateFields({ zero: "start" })}
      >
        당신에게 맞는 여행을 찾아보세요!
        <Logo1 />
      </button>
    </div>
  );
}
