import React from "react";
import content from "../../json/slick.content.json";
import Image from "next/image";
import Slider from "react-slick";

/** 메인 캐로셀 컴포넌트  **/
function Mainsearch() {
  const mainCarousel = content.main.map((e) => e);
  const settings = {
    focusOnSelect: true,
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
    <div className="flex flex-col mt-5 mb-20 ">
      <Slider {...settings}>
        {mainCarousel &&
          mainCarousel.map((step) => {
            const { title, img, tag } = step;
            return (
              <div
                key={title}
                className="relative  cursor-pointer hover:opacity-75 transition-all"
              >
                <div className="absolute text-white top-50 m-10 lg:m-30 z-10 ">
                  <h3 className="text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl md:text-3xl">
                    {title}
                  </h3>
                  <h4 className="text-sm lg:text-2xl">{tag}</h4>
                </div>
                <div className="absolute text-white m-40 lg:ml-96 z-10 ">
                  <h4 className="text-xl lg:text-2l xl:text-3xl 2xl:text-4xl md:text-2xl">
                    {"see more ➝"}
                  </h4>
                </div>
                <Image
                  src={img}
                  alt={title}
                  width={1920}
                  height={700}
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
