const ShopCart = () => {

  return (
    <div>
      {/* <h1 className="mt-28 ml-56 pb-5 text-2xl font-normal text-zinc-700 tracking-wider border-b">
        관심상품
      </h1> */}

      {/* 관심상품   */}
      <section class="py-1 bg-blueGray-50">
        <div class="w-full xl:w-9/12 mb-12 xl:mb-0 px-4 mt-24 mx-auto">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div class="rounded-t mb-0 py-6 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h3 class="font-normal text-2xl tracking-wider text-blueGray-700">
                    관심상품
                  </h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  {/* <button
                    class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    See all
                  </button> */}
                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th class="bg-blueGray-50 text-neutral-400 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal text-left">
                      상품 정보
                    </th>
                    <th class="pl-5 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                      인원
                    </th>
                    <th class="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                      예약 금액
                    </th>
                    <th class="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                      예약 정보
                    </th>
                  </tr>
                </thead>

                <tbody class="border-b">
                  <tr class="text-center">
                    {/* <img class="object-scale-down h-14" src='../img/cart.png' /> */}
                    <td class="border-t-0 text-neutral-400 py-32 pl-8 align-middle border-l-0 border-r-0 text-sm">
                      관심상품이 비어있습니다
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
                <button
                  class="text-sky-700 border-b border-sky-700 text-sm font-medium uppercase px-0.5 py-0.5 focus:outline-none mr-1 mt-10 ease-linear transition-all duration-150"
                  type="button"
                >
                  계속 둘러보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 위시리스트 */}
      <section class="py-1 bg-blueGray-50">
        <div class="w-full xl:w-9/12 mb-12 xl:mb-0 px-4 mt-12 mx-auto">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div class="rounded-t mb-0 py-6 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h3 class="font-normal text-xl tracking-wider text-Gray-500">
                    위시리스트
                    <button class="my-0 ml-4 border py-1 px-3 border-gray-400 active:bg-gray-100 text-sm text-slate-600 focus:outline-none">
                      더보기
                    </button>
                  </h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right mt-0">
                  {/* <button
                    class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    See all
                  </button> */}
                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse">
                <tbody>
                  <tr class="text-center">
                    {/* <img class="object-scale-down h-14" src='../img/cart.png' /> */}
                    <td class="border-t-0 text-neutral-400 pt-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                      위시리스트가 없습니다 🫥
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* <table className="table-auto ml-56">
        <thead>
          <tr>
            <th className="font-normal">상품정보</th>
            <th className="font-normal">인원</th>
            <th className="font-normal">예약금액</th>
            <th className="font-normal">예약정보</th>
          </tr>
        </thead>
        <tbody className=" items-center">
            <th className="font-normal">관심상품이 비어있습니다</th>
        </tbody>
      </table> */}
    </div>
  );
};

export default ShopCart;
