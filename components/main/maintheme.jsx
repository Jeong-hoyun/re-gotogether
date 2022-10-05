import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';

const Maintheme = ({country,group,theme}) => {
const [value, setValue] = useState(group);
    return (
        <>
        <div className="mb-8 border-b border-gray-100" >
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" >
              <li className="mr-2">
                <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300" onClick={()=>setValue(group)} >
                  그룹별
                </button>
              </li>
              <li className="mr-2">
                <button onClick={()=>setValue(theme)} className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                  테마별
                </button>
              </li>
              <li className="mr-2" >
                <button onClick={()=>setValue(country)} className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                  지역별
                </button>
              </li>
              <li>
                <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                  일정별
                </button>
              </li>
              <li role="presentation">
                <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                  무격리 여행
                </button>
              </li>
              <li role="presentation">
                <button  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                  마감 임박
                </button>
              </li>
            </ul>
          </div>       

          <div className="flex">
          {value&&value.map(item=>{
          const {title,path,img}=item
       return(
        <div className="mr-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md" key={title} data-aos="fade-up">
            <Link href={path}>
              <a alt={title}>
                <Image
                  className="rounded-t-lg object-cover w-64 h-44"
                  src={img}
                  alt={title}
                  width={350}
                  height={197}
                />
              </a>
              </Link> 
              <div className="p-5">
                <p className="text-sm mb-1 font-normal text-gray-700">
                  {title}
                </p>
                <Link href={path}>
                <a href="#">
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    {title}
                  </p>
                </a>
                </Link>
                <Link href={path}>
                <a className="inline-flex items-center py-2 px-3 text-sx italic text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  go ⇀
                </a>
                </Link>
              </div>
        </div> 

           )})}
             

          </div>


          <div className="left-20">
            <h1 className="mt-24 mb-6 text-lg font-semibold text-black sm:text-slate-900 dark:sm:text-white">
              ✬ Best 여행 그룹
            </h1>
          </div>

          {/* tab menu */}

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
          </> 
    );
}

export default Maintheme;
