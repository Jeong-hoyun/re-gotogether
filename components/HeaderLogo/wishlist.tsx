import React from "react";

/*메인헤더의 관심상품 아이콘을 관리하기위한 svg component*/
function Wishlist() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.91667 4.66667L9.91667 6.41667H11.0833V8.16667H8.16667V21.5833H9.91667V23.3333H12.25V21.5833H15.75V23.3333H18.0833V21.5833H19.8333V8.16667H16.9167V6.41667L18.0833 6.41667V4.66667L9.91667 4.66667ZM15.75 6.41667H12.25V8.16667H15.75V6.41667ZM17.5 10.5H10.5V19.25H17.5V10.5ZM13.4167 11.6667H11.6667V14.5833H13.4167V11.6667Z"
        fill="#212121"
      />
    </svg>
  );
}

export default Wishlist;
