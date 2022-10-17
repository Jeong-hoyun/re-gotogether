import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Maintheme = ({ country, group, theme }) => {
  const [value, setValue] = useState(group);
  return (
    <>
      <div className="mb-8 border-b border-gray-100">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          <li className="mr-2">
            <button
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
              onClick={() => setValue(group)}
            >
              그룹별
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setValue(theme)}
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
            >
              테마별
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setValue(country)}
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
            >
              지역별
            </button>
          </li>
          <li>
            <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
              일정별
            </button>
          </li>
        </ul>
      </div>

      <div className="flex">
        {value &&
          value.map((item) => {
            const { title, path, img, subtitle } = item;
            return (
              <div
                className="mr-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
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
                  <p className="text-sm mb-1 font-sm text-gray-700">{title}</p>
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
