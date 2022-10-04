const MainTest = () => {
  return (
    <>
      {/* 상단 */}

      <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2022/09/20/19/13/mountains-7468595_1280.jpg"
                alt=""
                class="w-full h-96"
                loading="lazy"
              />
            </div>
            <div class="absolute left-20 bottom-20">
              <h1 class="mt-8 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                혹시,
                <br />
                여행 좋아하세요?
                <p class="mt-8 text-white text-sm dark:text-slate-400">
                  당신에게 딱 맞는 여행을 찾아드려요!
                </p>
                <button
                  type="button"
                  class="mt-3 bg-blue-500 text-white text-sm font-medium py-2 px-3 rounded-lg"
                >
                  내 여행 찾기
                </button>
              </h1>
            </div>
          </div>

          {/* 중단 */}

          {/* 소제목1 */}

          <div class="left-20">
            <h1 class="mt-12 text-lg font-semibold text-black sm:text-slate-900 dark:sm:text-white">
              테마별로 여행을 찾아보세요
              <p class="mt-1 mb-10 font-normal text-neutral-400 text-xs">
                당신에게 딱 맞는 여행이 준비되어 있어요:D
              </p>
            </h1>
          </div>

          {/* tab menu */}

          {/* 버전1 */}

          {/* <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 role"
                >
                  그룹별
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                  aria-current="page"
                >
                  테마별
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  지역별
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  일정별
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  무격리 여행
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  기간임박
                </a>
              </li>
            </ul>
          </div> */}

          {/* 버전2 */}

          {/* <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  그룹별
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  테마별
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  지역별
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  일정별
                </button>
              </li>
            </ul>
          </div>
          <div id="myTabContent">
            <div
              class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <p class="hidden text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          </div> */}

          <div class="mb-8 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  그룹별
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  테마별
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  지역별
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  일정별
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  무격리 여행
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  마감 임박
                </button>
              </li>
            </ul>
          </div>

          {/* card */}

          <div class="flex">
            <div class="mr-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg object-cover w-64 h-44"
                  src="https://i.pinimg.com/736x/d1/f9/3a/d1f93a8934f81e5c2fcc7b59c7758f1c.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <p class="text-sm mb-1 font-normal text-gray-700 dark:text-gray-400">
                  Woman Only!
                </p>
                <a href="#">
                  <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    여자들끼리
                  </p>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sx italic text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  go ⇀
                </a>
              </div>
            </div>

            <div class="mr-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg object-cover w-64 h-44"
                  src="https://i.pinimg.com/736x/53/26/04/53260484976507ffe84235fef2b7dc5e.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <p class="text-sm mb-1 font-normal text-gray-700 dark:text-gray-400">
                  2040 Only!
                </p>
                <a href="#">
                  <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    2040끼리
                  </p>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sx italic text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  go ⇀
                </a>
              </div>
            </div>

            <div class="mr-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg object-cover w-64 h-44"
                  src="https://i.pinimg.com/736x/40/61/45/406145f6a7dc913a4e31abdb54a51aef.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <p class="text-sm mb-1 font-normal text-gray-700 dark:text-gray-400">
                  man Only!
                </p>
                <a href="#">
                  <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    남자들의 여행
                  </p>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sx italic text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  go ⇀
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg object-cover w-64 h-44"
                  src="https://i.pinimg.com/564x/3e/e8/84/3ee884dae314b223a8d9131c2310cd64.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <p class="text-sm mb-1 font-normal text-gray-700 dark:text-gray-400">
                  Child with.
                </p>
                <a href="#">
                  <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    우리 아이와 함께
                  </p>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sx italic text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  go ⇀
                </a>
              </div>
            </div>
          </div>

          {/* 소제목2 */}

          <div class="left-20">
              <h1 class="mt-24 mb-6 text-lg font-semibold text-black sm:text-slate-900 dark:sm:text-white">
                ✬ Best 여행 그룹
              </h1>
          </div>

          {/* tab menu */}


            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-16">
                <li class="mr-1">
                    <a href="#" class="mr-3 inline-block border-slate-500 py-3 px-4 text-black text-xs font-light border rounded-3xl active" aria-current="page">Women</a>
                </li>
                <li class="mr-1">
                    <a href="#" class="mr-3 inline-block border-slate-500 py-3 px-4 text-black text-xs font-light border rounded-3xl active">Men</a>
                </li>
                <li class="mr-1">
                    <a href="#" class="mr-3 inline-block border-slate-500 py-3 px-4 text-black text-xs font-light border rounded-3xl active">Child</a>
                </li>
                <li class="mr-1">
                    <a href="#" class="mr-3 inline-block border-slate-500 py-3 px-4 text-black text-xs font-light border rounded-3xl active">2040</a>
                </li>
                <li>
                    <a class="inline-block border-slate-500 py-3 px-4 text-black text-xs font-light border rounded-3xl active">5070</a>
                </li>
            </ul>

          {/* 캐러셀 */}

            <div id="indicators-carousel" class="relative" data-carousel="static">
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                        <img src="https://cdn.pixabay.com/photo/2022/09/07/21/23/ferris-wheel-7439636_1280.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                        <img src="https://cdn.pixabay.com/photo/2022/01/12/18/45/hungarian-parliament-building-6933621_1280.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
                        <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 4 --> */}
                    <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
                        <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 5 --> */}
                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                        <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </div>
      </main>
    </>
  );
};
export default MainTest;
