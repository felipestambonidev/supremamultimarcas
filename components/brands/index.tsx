"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { brandsList } from "../../data/brandsList";

export default function Brands() {
  return (
    <section className="mt-5  bg-[#3F3D3D] py-16 md:py-24">
        <div className="flex flex-col items-center justify-center mb-10 text-3xl text-white font-bold">
            <h1 className="text-3xl md:text-4xl font-bold
            ">NOSSAS MARCAS</h1>
            <p className="mx-auto max-w-2xl text-gray-400 text-base font-normal mt-2 text-center">Trabalhamos com as principais marcas do mercado automotivo</p>
        </div>
      <Swiper
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={10}
        loop={true}
        wrapperClass="gap-5 flex"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="flex items-center justify-center mb-16"
      >
        {brandsList.map((brand, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className="flex flex-col items-center sm:min-w-40 justify-center h-[150px] rounded-xl border border-[#FF4420]/20 bg-[#1E1E1E]"
            >
                <brand.icon size={50} className="text-[#FF4420] mb-2" />
                <p className="md:text-xl text-white md:font-semibold text-[16px] font-bold mt-2 uppercase">
                {brand.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
