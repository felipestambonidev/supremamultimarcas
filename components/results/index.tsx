"use client";

import { resultsData } from "../../data/resultsData";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/animations/animated-section";

export default function Results() {
  return (
    <AnimatedSection>
      <section className="py-16 md:py-24 bg-[#1a1a1a]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">
          Números que Impressionam
        </h2>
        <p className="mx-auto max-w-2xl mt-2 text-gray-400 text-lg">
          Mais de quatro décadas construindo relacionamentos e realizando sonhos
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {resultsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl font-bold text-[#FF4420] mb-2">
                {stat.value}
              </div>
              <div className="text-white uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}
