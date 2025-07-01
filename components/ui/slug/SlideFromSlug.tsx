"use client";

import { Carro } from "../../../interfaces/Interface";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

export default function CarImageSlider({ carro }: { carro: Carro }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === Image.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? Image.length - 1 : prev - 1));
  };

  const selectImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="space-y-3 px-5">
      <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
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
              src={carro.images[currentImage]}
              alt={`Imagem ${currentImage + 1} de ${carro.model}`}
              fill
              className="object-cover"
              priority={currentImage === 0}
            />
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full h-10 w-10 z-10"
          onClick={prevImage}
        >
          <FaChevronLeft className="h-6 w-6" />
          <span className="sr-only">Imagem Anterior</span>
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full h-10 w-10 z-10"
          onClick={nextImage}
        >
          <FaChevronRight className="h-6 w-6" />
          <span className="sr-only">Próxima Imagem</span>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {carro.images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full ${
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
      <div className="grid grid-cols-5 gap-2">
        {carro.images.map((image, index) => (
          <motion.button
            key={index}
            className={`relative h-16 md:h-20 rounded-md overflow-hidden ${
              index === currentImage ? "ring-2 ring-[#ff4d4d]" : "opacity-70"
            }`}
            onClick={() => selectImage(index)}
            whileHover={{ opacity: 1 }}
          >
            <Image src={image || "/placeholder.svg"} alt={`Miniatura ${index + 1}`} fill className="object-cover" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
