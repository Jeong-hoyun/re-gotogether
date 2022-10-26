import React from 'react';
import { useSelector } from 'react-redux';

const Recent = () => {
    const recent= useSelector((state) => state.recent.recent);

    return (   
        <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4 mt-12 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="rounded-t mb-0 py-6 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-normal text-xl tracking-wider text-Gray-500">
                    최근 본 상품
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right mt-0"></div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse">
                <tbody>
                  <tr className="text-center">
                    {recent.length <= 1 ? (
                      <td className="border-t-0 text-neutral-400 pt-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                        최근 본 상품이 없습니다 🫥
                      </td>
                    ) : (
                      recent
                        .filter((_, i) => i !== 0)
                        .map((item) => {
                          const { title, img, id } = item;
                          return (
                            <td
                              key={title}
                              className="ml-3 border-t-0 text-neutral-400 pt-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap cursor-pointer hover:opacity-75 transition-all"
                            >
                              <Link href={`view/${id}`}>
                                <a>
                                  <Image
                                    className="rounded-lg object-cover"
                                    src={img}
                                    alt={title}
                                    width={500}
                                    height={300}
                                  />
                                </a>
                              </Link>
                              <h4 className="">{title}</h4>
                            </td>
                          );
                        })
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>      
    );
}

export default Recent;
