import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Maintheme = ({ country, group, theme }) => {
  const [value, setValue] = useState(group);
  return (
    <>
       <div className="mb-8 border-b border-gray-100 ml-40">
       <h4>테마별로 여행을 찾아보세요</h4>
       <h5>당신에게 딱 맞는 여행이 준비되어 있어요 :)</h5>
       </div>
      <div className=" mb-8 border-b border-gray-100 ml-40">
        <ul className="flex flex-wrap text-sm font-medium text-center">
          <li className="mr-2 last:mr-0">
            <button
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 transition-all"
              onClick={() => setValue(group)}
            >
              그룹별
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setValue(theme)}
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 transition-all"
            >
              테마별
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setValue(country)}
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 transition-all"
            >
              지역별
            </button>
          </li>
          <li>
            <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 transition-all">
              일정별
            </button>
          </li>
        </ul>
      </div>

      <div className="flex mr-10 sm:flex-wrap xl:flex-row">
        {value &&
          value.map((item) => {
            const { title, path, img, subtitle } = item;
            return (
              <div
                className="mx-10 mb-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:opacity-75 transition-all justify-items-center c1170:last:mx-0 c1170:last:ml-5"
                key={title}
              >
                <Link href={path}>
                  <a alt={title}>
                    <Image
                      className="rounded-t-lg object-cover"
                      src={img}
                      alt={title}
                      width={500}
                      height={300}
                    />
                  </a>
                </Link>
                <div className="p-5">
                  <p className="text-sm mb-1 font-sm text-gray-700 cursor-pointer">
                    {title}
                  </p>
                  <Link href={path}>
                    <a href="#">
                      <p className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                        {subtitle ? subtitle : title}
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Maintheme;
