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
    <div className="max-w-full mt-5 mb-20">
      <Slider {...settings}>
        {mainCarousel &&
          mainCarousel.map((step) => {
            const { title, img, tag } = step;
            return (
              <div key={title} className="relative">
                <div className="absolute items-center justify-center text-white m-24 z-10">
                  <h3 className="text-5xl">{title}</h3>
                  <h5 className="text-3xl">{tag}</h5>
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
