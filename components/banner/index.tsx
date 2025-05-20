"use client"
import { useEffect, useState } from "react";
import FiltroCarros from "../../components/filter/index";

export default function Banner() {


  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden mt-28">
      <div
        className="absolute inset-0 z-[-1] brightness-30"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          backgroundAttachment: "fixed",
          backgroundImage: "url('/images/banner/imagemfundo.png')",
          backgroundSize: "cover",
          backgroundPosition: "70% 90%",
          backgroundRepeat: "no-repeat", 
        }}
      ></div>
     <div><FiltroCarros/></div> 
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
