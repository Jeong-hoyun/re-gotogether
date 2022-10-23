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
      <h2 className="absolute text-white z-3 left-20 top-4 lg:left-60 lg:top-40 lg:text-4xl sm:text-xl">
        혹시, 
        <br />여행 좋아하세요?
      </h2>
      <h3 className="absolute text-gray-300 z-4 left-20 top-16 lg:left-60 lg:top-72 lg:text-xl sm:text-sm">
        {name}님에게 딱 맞는 여행을 찾아드려요!
      </h3>
      
      <button
        className="absolute px-4 py-4 border-2 border-solid lg:top-96 rounded-3xl z-2 left-16 top-24 lg:left-96 lg:text-xl lg:border-amber-300 text-amber-300"
        onClick={() => updateFields({ zero: "start" })}
      >
        <span className="text-center">당신에게 맞는 여행을 찾아보세요!</span>
        <Logo1 />
      </button>
      
    </div>
  );
}
