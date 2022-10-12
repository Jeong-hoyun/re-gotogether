import * as React from 'react';
import content from '../../json/slick.content.json'
import Image  from 'next/image';
import Slider from "react-slick";
import { useMemo } from 'react';

function Mainsearch() {
  const mainCarousel= useMemo(()=>content.main.map(e=>e))
  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      speed: 2000,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  return (
    <div className='max-w-full grow'>
      <Slider {...settings}>
      {mainCarousel&&mainCarousel.map((step) => {
        const {title,img,tag}=step
        return(
         <div key={title}>       
			  <div className="w-full">
        <Image src={img} alt={title} width={1296} height={628}/>
        <div className="absolute top-0 w-full h-full z-10">
				<div className="table w-full h-full ">
					<div className="table-row z-5">
						<div className="table-cell align-middle">
							<p className="text-white text-3xl text-center">{title}</p>
						</div>
            </div>
           <div className="table-row z-5">
            <div className="table-cell align-middle">
							<p className="text-white text-2xl text-center">{tag}</p>
						</div>
					</div>
				 </div>
			  </div>	
        </div>			    
       </div>
        )     
      })}
      </Slider>
 
    </div>
  );
}

export default Mainsearch;
