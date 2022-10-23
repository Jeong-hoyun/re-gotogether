import React from "react";
import Slider from "react-slick";
import content from "../../json/best.content.json";
import Image from "next/image";
import Link from "next/link";

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
    <div className="ml-3">
      <h2 className="mt-20 mb-6  text-lg font-semibold text-black sm:text-slate-900">
        여행 그룹 Best
      </h2>
      <Slider {...settings}>
        {content.main &&
          content.main.map((item) => {
            const { title, tag, price, img, key } = item;
            return (
              <div
                key={title}
                className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
              >
                <Link href={key}>
                  <a>
                    <Image
                      src={img}
                      alt={title}
                      width={1296}
                      height={648}
                      className="rounded-t-lg object-cover cursor-pointer hover:opacity-75 transition-all z-5"
                    />
                  </a>
                </Link>
                <div className="p-5">
                  <p className="text-sm mb-1 font-sm text-gray-700">{title}</p>
                  <Link href={key}>
                    <a>
                      <p className="mb-2 text-sm font-bold text-gray-900">
                        {tag ? tag : title}
                      </p>
                      <p className="text-lg mb-1 font-sm font-bold text-gray-700">
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
