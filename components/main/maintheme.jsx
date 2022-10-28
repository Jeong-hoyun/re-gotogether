import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Maintheme = ({ country, group, theme }) => {
  const [value, setValue] = useState(group);
  return (
    <>
       <div className="mb-8 border-b border-gray-100 ml-11 lg:ml-32 sm:ml-10">
       <span className="text-xl font-semibold">테마별로 여행을 찾아보세요</span><br />
       <span className="font-medium text-gray-600">당신에게 딱 맞는 여행이 준비되어 있어요 :)</span>
       </div>
      <div className="mb-8 border-b border-gray-100 ml-7 sm:ml-10 lg:ml-28">
        <ul className="flex flex-wrap text-sm font-medium text-center ">
          <li className="mr-2 last:mr-0">
            <button
              className="inline-block p-4 transition-all border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              onClick={() => setValue(group)}
            >
              그룹별
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setValue(theme)}
              className="inline-block p-4 transition-all border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >
              테마별
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setValue(country)}
              className="inline-block p-4 transition-all border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >
              지역별
            </button>
          </li>
          <li>
            <button className="inline-block p-4 transition-all border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
              일정별
            </button>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap sm:ml-10 lg:ml-20">
        {value &&
          value.map((item) => {
            const { title, path, img, subtitle } = item;
            return (
              <div
                className="max-w-sm mx-10 mb-5 transition-all bg-white border border-gray-200 rounded-lg shadow-md hover:opacity-75 justify-items-center"
                key={title}
              >
                <Link href={path}>
                  <a alt={title}>
                    <Image
                      className="object-cover rounded-t-lg"
                      src={img}
                      alt={title}
                      width={500}
                      height={300}
                    />
                  </a>
                </Link>
                <div className="p-5">
                  <p className="mb-1 text-sm text-gray-700 cursor-pointer font-sm">
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
