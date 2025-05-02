"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Carro } from "../../interfaces/Interface";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-custom.css";

export default function CarImageSlider({ carro }: { carro: Carro }) {
  return (
      <div className="car-slider-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={11}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            380: {
              slidesPerView: 1,
              spaceBetween: 90,
            },
            580: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="swiper-container"
        >
          {carro.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Imagem ${index + 1} de ${carro.model}`}
                width={600}
                height={500}
                className="car-slide-image"
                style={{ objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
}
