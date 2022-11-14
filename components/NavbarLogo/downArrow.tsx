import React from "react";

/*네브바의 "더보기" 아이콘을 관리하기위한 svg component*/
function DownArrow() {
  return (
    <svg
      className="inline-block"
      width="15"
      height="18"
      viewBox="0 0 32 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9988 14.0688L28.5367 0.635376L31.4609 3.36465L15.9988 19.9312L0.536716 3.36465L3.46094 0.635376L15.9988 14.0688Z"
        fill="black"
      />
    </svg>
  );
}

export default DownArrow;
