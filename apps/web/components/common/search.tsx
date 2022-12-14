import React from "react";

const Search = () => {
  return (
    <div className="lg:flex flex-grow justify-end flex-wrap items-center lg:mr-28 hidden">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative mr-40">
        <input
          type="search"
          id="default-search"
          className="block w-96 p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
          placeholder="여행 그룹이나 상품을 검색해보세요"
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-2xl text-sm px-2 py-2"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
