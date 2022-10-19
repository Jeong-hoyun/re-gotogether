import Image from "next/image";
import Link from "next/link";
import React, { useEffect,useState} from "react";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import  axios  from 'axios';

const Mypage = () => {
  const wish = useSelector((state) => state.wish.wish);
  const login=useSelector((state)=>state.login.login)
  const [reserve,setReserve]=useState()
  const router =useRouter()
  useEffect(() => {
    login.username==!null?router.push("./"):null
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();  
    (async ()=>{
      try{     
      const res=await axios.get(`/ec2/reservations/user`,{ cancelToken: source.token})
      setReserve(res.data)
    }catch(e){
      console.error(e)
    }
    })();
    return () => {     
    };
  }, []);

  return (    
      <div className="mt-10">  
         {login.username?<h2 className="w-full xl:w-9/12 text-3xl mb-12 xl:mb-0 px-4 mt-24 mx-auto">{login.username}님 환영합니다</h2>:null}
        <section className="py-1 bg-blueGray-50">
          <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4 mt-24 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
              <div className="rounded-t mb-0 py-6 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-normal text-2xl tracking-wider text-blueGray-700">
                      예약상품
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
                </div>
              </div>
  
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-blueGray-50 text-neutral-400 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal text-left">
                        상품 정보
                      </th>
                      <th className="pl-5 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                        인원
                      </th>
                      <th className="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                        예약 금액
                      </th>
                      <th className="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                        예약 정보
                      </th>
                    </tr>
                  </thead>
  
                  <tbody className="border-b">
                  {reserve?
                    reserve.reservations.map(item=>{
                      return(
                        <tr key={item.productId}>
                        <th className="bg-blueGray-50 text-neutral-400 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal text-left">
                          {item.productId}
                        </th>
                        <th className="pl-5 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                        {item.personnel}인
                        </th>
                        <th className="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                        {item.paymentState}
                        </th>
                        <th className="pr-2 text-neutral-400 align-middle border border-solid border-blueGray-100 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-normal">
                        {item.paymentState}
                        </th>
                        </tr>
                      )
                    })                        
                    
                    : <tr className="text-center">               
                <td className="border-t-0 text-neutral-400 py-32 pl-8 align-middle border-l-0 border-r-0 text-sm">
                  관심상품이 비어있습니다
                </td>
              </tr>}
                   
                  </tbody>
                </table>
  
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
                  <button
                    className="text-sky-700 border-b border-sky-700 text-sm font-medium uppercase px-0.5 py-0.5 focus:outline-none mr-1 mt-10 ease-linear transition-all duration-150"
                    type="button"
                  >
                    계속 둘러보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-9/12 mb-12 xl:mb-0 px-4 mt-12 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="rounded-t mb-0 py-6 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-normal text-xl tracking-wider text-Gray-500">
                    위시리스트
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right mt-0"></div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse">
                <tbody>
                  <tr className="text-center">
                    {wish.length <= 1 ? (
                      <td className="border-t-0 text-neutral-400 pt-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                        위시리스트가 없습니다 🫥
                      </td>
                    ) : (
                      wish.filter((_,i)=>i!==0).map((item) => {                    
                        const { title, img,id } = item;
                        return (
                          <td key={title} className="ml-3 border-t-0  text-neutral-400 pt-12 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap cursor-pointer hover:opacity-75">
                            
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
                            <button className="flex justify-center bg-blue-600 p-3 w-14 rounded-lg text-white hover:bg-blue-400:">삭제</button>
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
      </div>
  );
};

export default Mypage;
