import Head from 'next/head'
import Image from 'next/image'
import Three from '../componenets/main/three'
import main1 from '../public/img/men.png'
import main2 from '../public/img/women.png'
import main3 from '../public/img/child.png'
import Slide from '../componenets/main/slide';
import Layout from '../componenets/common/layout'


export default function Home() {
  return (
    <>
      <Head/>    
       <div className="mt-16">
			<div className="mx-auto">    
         <Slide/>  
				<Three
					columns={[
						<div key={1} ><Image src={main1} alt="main1"/> <p>테마1</p></div>,
						<div key={2}><Image src={main2} alt="main2"/> <p>테마2</p></div>,
						<div key={3}><Image src={main3} alt="main3"/> <p>테마3</p></div>
					]}
				/>		
			</div>      
		</div>
    </>  
  )
}
