"use client"

import Filter from "../filter";

export default function Banner() {
  return (
    <div className="relative h-[600px] overflow-hidden mt-5">
      <div
        className="absolute inset-0 z-[-1] brightness-30"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: "url('/images/banner/imagemfundo.png')",
          backgroundSize: "cover",
          backgroundPosition: "70% 120%", 
        }}
      ></div>
     <div><Filter/></div> 
      <style jsx>{`
        @media (max-width: 768px) {
          div[style] {
            background-position: 25% 120% !important; 
          }
        }
      `}</style>
    </div>
  );
}
