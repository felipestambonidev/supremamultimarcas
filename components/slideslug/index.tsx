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

            200:{
              slidesPerView:1,
              spaceBetween:50
            },
            380: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            430:{
              slidesPerView:1,
              spaceBetween:20,
            },
            580: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            823:{
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 5,
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
                priority={index === 0} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
}
