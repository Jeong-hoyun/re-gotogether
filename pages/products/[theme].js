import Head from 'next/head'
import Footer from '../../componenets/common/footer'
import Header from '../../componenets/common/header'
import Slide from '../../componenets/main/slide';
import { useLayoutEffect,useState} from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import useSWR from 'swr';

export default function Theme() {
    const [list, setList] = useState([]);
    const router = useRouter()
    const fetcher = (url) => axios.post(url).then((res) => res.json());
  
    const { data, error } = useSWR('https://stfe-gotogether.herokuapp.com/product/a/getList',
    fetcher);
 console.log
   

  return (
    <div>
      <Head>
        <title>고투게더</title>
        <meta name="description" content="여행 테마" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
       <div className="MainPage -mt-16">
			<div className="mx-auto">    
               <Slide/>  						
			</div> 
      
      <div className="mx-auto">    
             {Array.isArray(data)&&data
              .filter(el=>el.theme===router.query.theme)
              .map(item=><p key={item._id}>{item.title}</p>)  
            }					
			</div>    
           	
       </div>

     <Footer/>  
    </div>
  )
}
