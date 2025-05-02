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
  console.log("Imagens do carro: ", carro.images);  

  return (
    <div className="car-slider-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={11}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
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
              height={200}
              className="car-slide-image"
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
