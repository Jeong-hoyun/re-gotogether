import React, { Component } from "react";
import Slider from "react-slick";
import content from "../../json/best.content.json";
import Image from "next/image";

export default class Maincarousel extends Component {
  render() {
    console.log("content", content.main);
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2 className="mt-20 mb-6 text-lg font-semibold text-black sm:text-slate-900">
          여행 그룹 Best
        </h2>
        <Slider {...settings}>
          {content.main &&
            content.main.map((item) => {
              const { title, tag, price, img } = item;
              return (
                <div
                  key={title}
                  className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
                >
                  <Image
                    src={img}
                    alt={title}
                    width={1296}
                    height={648}
                    className="rounded-t-lg object-cover cursor-pointer hover:opacity-75 transition-all z-5"
                  />
                  <div className="p-5">
                    <p className="text-sm mb-1 font-sm text-gray-700">
                      {title}
                    </p>
                    <a href="#">
                      <p className="mb-2 text-sm font-bold text-gray-900">
                        {tag ? tag : title}
                      </p>
                      <p className="text-lg mb-1 font-sm font-bold text-gray-700">
                        {price}
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
      // <div>
      //   <h2 className="mt-24 mb-6 text-lg font-semibold text-black sm:text-slate-900">
      //     여행 그룹 Best
      //   </h2>
      //   <Slider {...settings}>
      //     <div>
      //       <h3>1</h3>

      //       <Image
      //         src={content.main[0].img}
      //         alt="sunscreen"
      //         data-img="선크림"
      //         className="rounded-lg cursor-pointer hover:opacity-75 transition-all"
      //         width={300}
      //         height={200}
      //       />
      //     </div>
      //     <div>
      //       <h3>2</h3>
      //       <img src={content.main.img} />
      //     </div>
      //     <div>
      //       <h3>3</h3>
      //     </div>
      //     <div>
      //       <h3>4</h3>
      //     </div>
      //     <div>
      //       <h3>5</h3>
      //     </div>
      //     <div>
      //       <h3>6</h3>
      //     </div>
      //   </Slider>
      // </div>
    );
  }
}
