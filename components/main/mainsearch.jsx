import * as React from "react";
import content from "../../json/slick.content.json";
import Image from "next/image";
import Slider from "react-slick";
import { useMemo } from "react";

function Mainsearch() {
  const mainCarousel = useMemo(() => content.main.map((e) => e));
  const settings = {
   
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col mt-5 mb-20">
      <Slider {...settings}>
        {mainCarousel &&
          mainCarousel.map((step) => {
            const { title, img, tag } = step;
            return (
              <div
                key={title}
                className="relative m-0 cursor-pointer hover:opacity-75 transition-all lg:mr-10 2xl:ml-40 xl:ml-5 "
              >
                <div className="absolute text-white m-20 lg:m-40 z-10 ">
                  <h3 className="text-xl lg:text-5xl md:text-3xl">{title}</h3>
                  <h5 className="text-sm lg:text-3xl">{tag}</h5>
                </div>
                <Image
                  src={img}
                  alt={title}
                  width={1296}
                  height={648}
                  className="z-5"
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default Mainsearch;
