import React from "react";
import axios from "axios";
import { API_URL } from "./../../config/index";
import { BehaviorSubject, from } from "rxjs";
import {
  filter,
  mergeMap,
  debounceTime,
  distinctUntilChanged,
} from "rxjs/operators";
import Link from "next/link";

const getTravelByProducts = async (searchkeyword) => {
  const { data: products } = await axios.get(
    `${API_URL}/api/products/?pageSize=100`,
  );
  return products.products.filter((item) => item.title.includes(searchkeyword));
};

let searchSubject$ = new BehaviorSubject("");
let SearchResultObservable = searchSubject$.pipe(
  filter((val) => val.length > 1),
  debounceTime(200),
  distinctUntilChanged(),
  mergeMap((val) => from(getTravelByProducts(val))),
);

const useObservable = (observable, setter) => {
  React.useEffect(() => {
    let subscription = observable.subscribe((result) => {
      if (result) {
        setter(result);
      } else {
        setter("");
      }
    });
    return () => subscription.unsubscribe();
  }, [observable, setter]);
};

function SearchBar() {
  const [search, setSearch] = React.useState();
  const [results, setResults] = React.useState([]);
  const onSearch = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);
    searchSubject$.next(newValue);
  };

  useObservable(SearchResultObservable, setResults);

  return (
    <>
      <div className="relative">
        <input
          onChange={onSearch}
          type="text"
          id="default-search"
          className="mt-2 block p-4 lg:mr-40 lg:mt-1 lg:mb-2 sm:mt-10 sm:mr-10 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="가고싶은 장소나 테마를 검색해보세요"
        />
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 "
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
        </div>
      </div>
      <ul
        className={`flex flex-col w-100 leading-7 lg:h-2 rounded-xl ${
          search ? "" : "hidden"
        }`}
      >
        {results.map((item) => {
          return (
            <li
              className="text-center text-white bg-gray-400 z-30"
              key={item.title}
            >
              <Link href={`/travel/${item.productId}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SearchBar;
