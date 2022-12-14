import React from "react";

/*네브바의 "여행큐레이션" 아이콘을 관리하기위한 svg component*/
function Logo1() {
  return (
    <svg
      className="inline-block"
      width="30"
      height="24"
      viewBox="0 0 24 24"
      fill={ "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill={ "none"} />
      <path
        d="M16.5017 10.4059C16.5017 13.6454 13.8756 16.2715 10.6361 16.2715C7.39662 16.2715 4.77051 13.6454 4.77051 10.4059C4.77051 7.1664 7.39662 4.54028 10.6361 4.54028C13.8756 4.54028 16.5017 7.1664 16.5017 10.4059Z"
        fill="white"
      />
      <g filter="url(#filter0_bi_308_2339)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6354 6.24789C8.339 6.24789 6.47738 8.1095 6.47738 10.4059C6.47738 12.7023 8.339 14.564 10.6354 14.564C12.9318 14.564 14.7934 12.7023 14.7934 10.4059C14.7934 8.1095 12.9318 6.24789 10.6354 6.24789ZM10.6354 16.7816C14.1566 16.7816 17.0111 13.9271 17.0111 10.4059C17.0111 6.88475 14.1566 4.03027 10.6354 4.03027C7.11424 4.03027 4.25977 6.88475 4.25977 10.4059C4.25977 13.9271 7.11424 16.7816 10.6354 16.7816Z"
          fill="url(#paint0_linear_308_2339)"
        />
      </g>
      <path
        d="M15.2252 17.2571C14.8317 16.8637 14.8317 16.2257 15.2252 15.8322L16.316 14.7414L19.2102 17.6355C19.6036 18.029 19.6036 18.667 19.2102 19.0604L18.8318 19.4388C18.4383 19.8323 17.8003 19.8323 17.4069 19.4388L15.2252 17.2571Z"
        fill="url(#paint1_linear_308_2339)"
      />
      <defs>
        <filter
          id="filter0_bi_308_2339"
          x="-7.83101"
          y="-8.0605"
          width="36.9325"
          height="36.9329"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.04539" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_308_2339"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_308_2339"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.503782" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_308_2339"
          />
        </filter>
        <linearGradient
          id="paint0_linear_308_2339"
          x1="10.6354"
          y1="4.03027"
          x2="10.6354"
          y2="16.7816"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A3FF" />
          <stop offset="1" stopColor="#0081CA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_308_2339"
          x1="15.4143"
          y1="15.643"
          x2="19.021"
          y2="19.2496"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD771" />
          <stop offset="1" stopColor="#FFB800" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo1;
