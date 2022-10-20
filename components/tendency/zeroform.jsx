import Image from "next/image";
import Logo1 from './../NavbarLogo/travelQ1';

export function Zeroform({ zero, updateFields,name }) {
  return (
  <div className="relative"> 
  <Image  className="z-1" src={"/img/formSearch.webp"} width={1280} height={712} />
  <h2 className="absolute z-3 left-40 top-36 text-white text-3xl">혹시, 여행 좋아하세요?</h2>
  <h3 className="absolute z-4 left-40 top-48 text-white text-2xl">{name}님에게 딱 맞는 여행을 찾아드려요!</h3>
  <button className="absolute z-2 left-40 top-60 text-xl w-2/4 border-solid border-2 border-amber-300 rounded-lg text-amber-300 "    onClick={() => updateFields({ zero: "start" })}  >
  당신에게 맞는 여행을 찾아보세요!<Logo1 /></button>
  </div> 
  );
}
