import React from "react";
import Slider from "react-slick";
import content from "../../json/best.content.json";
import Image from "next/image";
import Link from "next/link";
import Best from "../Logo/best"

export default function Maincarousel() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className="flex flex-col mx-12 lg:mx-32">
      <div className="flex gap-2 mt-10 mb-10">
      <Best />
      <h2 className="mt-1 text-lg font-semibold text-black nline-block sm:text-slate-900">
      Best 여행 그룹
      </h2>
      </div>
      <Slider {...settings}>
        {content.main &&
          content.main.map((item) => {
            const { title, tag, price, img, key } = item;
            return (
              <div
                key={title}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <Link href={key}>
                  <a>
                    <Image
                      src={img}
                      alt={title}
                      width={1296}
                      height={648}
                      className="object-cover transition-all rounded-t-lg cursor-pointer hover:opacity-75 z-5"
                    />
                  </a>
                </Link>
                <div className="p-5">
                  <p className="mb-1 text-sm text-gray-700 font-sm">{title}</p>
                  <Link href={key}>
                    <a>
                      <p className="mb-2 text-sm font-bold text-gray-900">
                        {tag ? tag : title}
                      </p>
                      <p className="mb-1 text-lg font-bold text-gray-700 font-sm">
                        {price}
                      </p>
                    </a>
                  </Link>
                </div>
               
              </div>
            );
          })}
      </Slider>
    </div>
  );
}
