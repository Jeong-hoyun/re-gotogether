import React from "react";

const Maincarousel = () => {
  return (
    <div>
      <div className="left-20">
        <h1 className="mt-24 mb-6 text-lg font-semibold text-black sm:text-slate-900 dark:sm:text-white">
          ✬ Best 여행 그룹
        </h1>
      </div>

      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-16">
        <li className="mr-1">
          <a
            href="#"
            className="mr-3 inline-block border-slate-500 py-3 px-4 text-black text-xs font-light border rounded-3xl active"
            aria-current="page"
          >
            Women
          </a>
        </li>
        <li className="mr-1">
          <a
            href="#"
            className="mr-3 inline-block border-slate-500 py-3 px-4 text-black text-xs font-light border rounded-3xl active"
          >
            Men
          </a>
        </li>
        <li className="mr-1">
          <a
            href="#"
            className="mr-3 inline-block border-slate-500 py-3 px-4 text-black text-xs font-light border rounded-3xl active"
          >
            Child
          </a>
        </li>
        <li className="mr-1">
          <a
            href="#"
            className="mr-3 inline-block border-slate-500 py-3 px-4 text-black text-xs font-light border rounded-3xl active"
          >
            2040
          </a>
        </li>
        <li>
          <a className="inline-block border-slate-500 py-3 px-4 text-black text-xs font-light border rounded-3xl active">
            5070
          </a>
        </li>
      </ul>

      <div id="indicators-carousel" className="relative" data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 mb-10">
          {/* <!-- Item 1 --> */}
          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
            data-carousel-item="active"
          >
            <img
              src="https://cdn.pixabay.com/photo/2022/09/07/21/23/ferris-wheel-7439636_1280.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
            data-carousel-item=""
          >
            <img
              src="https://cdn.pixabay.com/photo/2022/01/12/18/45/hungarian-parliament-building-6933621_1280.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Maincarousel;
