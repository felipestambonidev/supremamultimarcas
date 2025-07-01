"use client";

import { Carro } from "../../../interfaces/Interface";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

export default function CarImageSlider({ carro }: { carro: Carro }) {
  const images = carro?.images?.length > 0 ? carro.images : ["/placeholder.svg"];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const selectImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="space-y-3 px-5">
      <div className="relative w-full aspect-video md:h-[400px] md:max-h-[500px] rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt={`Imagem ${currentImage + 1} de ${carro?.model || "Carro"}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover" 
              priority={currentImage === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
          <button
            className="flex items-center justify-center bg-black/50 text-white hover:bg-black/70 transition-colors duration-300 rounded-full h-12 w-12 z-10 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={prevImage}
          >
            <FaChevronLeft className="h-6 w-6" />
            <span className="sr-only">Imagem Anterior</span>
          </button>

          <button
            className="flex items-center justify-center bg-black/50 text-white hover:bg-black/70 transition-colors duration-300 rounded-full h-12 w-12 z-10 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={nextImage}
          >
            <FaChevronRight className="h-6 w-6" />
            <span className="sr-only">Próxima Imagem</span>
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentImage ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => selectImage(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Ir para imagem {index + 1}</span>
            </motion.button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <motion.button
            key={index}
            className={`relative w-full aspect-[4/3] rounded-md overflow-hidden transition-all duration-300 ${
              index === currentImage ? "ring-2 ring-[#ff4d4d]" : "opacity-70"
            }`}
            onClick={() => selectImage(index)}
            whileHover={{ opacity: 1, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Miniatura ${index + 1}`}
              fill
              sizes="(max-width: 768px) 25vw, (max-width: 1200px) 16vw, 10vw"
              className="object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}