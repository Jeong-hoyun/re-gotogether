import React from 'react';

const Mainsearch = () => {
    return (
        <>
        <div>
          <div className="relative">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2022/09/20/19/13/mountains-7468595_1280.jpg"
                alt=""
                className="w-full h-96"
                loading="lazy"
              />
            </div>
            <div className="absolute left-20 bottom-20">
              <h1 className="mt-8 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                혹시,
                <br />
                여행 좋아하세요?
                <p className="mt-8 text-white text-sm dark:text-slate-400">
                  당신에게 딱 맞는 여행을 찾아드려요!
                </p>
                <button
                  type="button"
                  className="mt-3 bg-blue-500 text-white text-sm font-medium py-2 px-3 rounded-lg"
                >
                  내 여행 찾기
                </button>
              </h1>
            </div>
          </div>

          <div className="left-20">
            <h1 className="mt-12 text-lg font-semibold text-black sm:text-slate-900 dark:sm:text-white">
              테마별로 여행을 찾아보세요
              <p className="mt-1 mb-10 font-normal text-neutral-400 text-xs">
                당신에게 딱 맞는 여행이 준비되어 있어요:D
              </p>
            </h1>
          </div>
          </div>
        </>
    );
}

export default Mainsearch;
