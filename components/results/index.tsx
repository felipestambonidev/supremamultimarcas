"use client";

import { resultsData } from "../../data/resultsData";
import { motion } from "framer-motion";

export default function Results() {
  return (
    <section className="py-16 md:py-24 bg-[#3F3D3D]">
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
  );
}
