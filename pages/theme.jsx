import Head from 'next/head'
import Footer from '../componenets/common/footer'
import Header from '../componenets/common/header'
import Slide from '../componenets/main/slide';
import { useEffect,useState} from 'react';
import axios from 'axios'


export default function Theme() {
    const [list, setList] = useState([]);
    useEffect(() => {
        const getList = async () => {
          try {
            const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/getList');
            setList(res.data.productList);
            console.log(res.data)
          } catch (e) {
            console.error(e);
          }
        };
        getList();
      }, []);





  return (
    <>
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
            <div className='mx-auto'>
            {list.map((item) => <div key={item.current}>{item.title}</div>)}
            </div>		
       </div>

     <Footer/>  
    </>
  )
}
