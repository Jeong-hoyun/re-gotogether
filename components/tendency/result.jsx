import React from "react";
import Link from "next/link";

const Result = () => {
  return (
    <div>
      <p>현재 성향에 맞는 상품이 없습니다 죄송합니다</p>
      <Link href={"/test"}>
        <a>다시테스트 하기</a>
      </Link>
    </div>
  );
};

export default Result;
