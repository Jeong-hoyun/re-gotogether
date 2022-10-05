import content from '../../json/search.content.json'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { API_URL } from './../../config/index';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

export function getStaticPaths() { 
    const paths = content.search.map((item) => {
      return { params: {keyword:item.path}};
    });  
    return {
      paths,
      fallback: true
    }
  }

  export async function getStaticProps(context) {
    const { keyword } = context.params;  
    const [{ data: searchData }] = await Promise.all([
      axios.get(`${API_URL}/api/products/?keyword=${keyword}`)
    ]);  
    return {
      props: {
        searchData
      }
    }
  }


const Keyword = ({searchData}) => {   
   const location=  useRouter()
   const mainTitle=location.query.keyword

   if(searchData?.products.length===0) return <div className='flex mt-20'>현재 패키지 여행 준비중입니다</div>  

    return (        
        <>    
        <Head>  
        <title>{content.search.filter(e=>e.key===mainTitle).map(e=>e.title)}</title>        
        </Head>
            
     <div className="max-w-sm rounded overflow-hidden shadow-lg mt-20 ">
    {searchData&&searchData.products.map(item=>{
        const {destination,groupName,title}=item
        const image1=item.images[3]
      return(
        <>
        <div className="mr-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md" key={title}> 
        <Link href={'/'}>
        <a alt={title}>
          <Image  data-aos="fade-up"
            className="rounded-t-lg object-cover w-64 h-44"
            src={image1}
            alt={title}
            width={350}
            height={197}
          />
        </a>
        </Link> 

      
        <div className="p-5">        
          <Link href={'/'}>
          <a href="#">
            <p className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {title}
            </p>
          </a>
          </Link>
          <Link href={'/'}>
          <a className="inline-flex items-center py-2 px-3 text-sx italic text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          상세페이지로 ⇀
          </a>
          </Link>
        </div>
      </div> 
      </>

     )})}
       
    </div>      
      
        </>
    );
}

export default Keyword;
