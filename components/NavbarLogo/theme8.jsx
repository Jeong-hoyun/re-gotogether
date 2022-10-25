import React from "react";

function Logo8() {
  return (
    <svg
      width="40"
      height="35"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" />
      <path
        d="M6.0459 5.54162C6.0459 4.98516 6.497 4.53406 7.05346 4.53406C7.60993 4.53406 8.06103 4.98516 8.06103 5.54162V17.6324C8.06103 18.1889 7.60993 18.64 7.05346 18.64C6.497 18.64 6.0459 18.1889 6.0459 17.6324V5.54162Z"
        fill="url(#paint0_linear_308_1862)"
      />
      <g filter="url(#filter0_i_308_1862)">
        <path
          d="M6.0459 5.54162C6.0459 4.98516 6.497 4.53406 7.05346 4.53406H18.6405L14.8073 9.08384L18.6405 13.0984H12.3432H6.0459V5.54162Z"
          fill="url(#paint1_linear_308_1862)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_308_1862"
          x="6.0459"
          y="4.53406"
          width="12.5947"
          height="9.06811"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.503782" />
          <feGaussianBlur stdDeviation="0.503782" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.66 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_308_1862"
          />
        </filter>
        <linearGradient
          id="paint0_linear_308_1862"
          x1="7.05346"
          y1="4.53406"
          x2="7.05346"
          y2="18.64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A0707" />
          <stop offset="1" stopColor="#756B39" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_308_1862"
          x1="9.33143"
          y1="4.26642"
          x2="14.3577"
          y2="13.1973"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F27215" />
          <stop offset="1" stopColor="#E41E1E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo8;
