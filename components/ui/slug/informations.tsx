"use client";

import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import { Carro } from "../../../interfaces/Interface";

export default function Informations({ carro }: { carro: Carro }) {
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Detecta se é um dispositivo móvel
    const userAgent = navigator.userAgent || navigator.vendor;
    setIsMobile(/android|iphone|ipad|ipod/i.test(userAgent));
  }, []);

  const handleShare = async () => {
    const shareUrl = window.location.href;

    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: `${carro.model} ${carro.description}`,
          url: shareUrl,
        });
      } catch (err) {
        console.error("Erro ao compartilhar:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        console.error("Erro ao copiar link:", err);
      }
    }
  };

  return (
    <div className="flex items-center justify-between p-4 text-white relative mt-5">
      <div className="flex items-center">
        <Link href="/carros" passHref>
          <button className="flex items-center justify-center w-10 h-10 rounded-sm border border-[#FF4420]/20 bg-[#1E1E1E]">
            <IoIosArrowBack className="text-xl hover:scale-150 transition-transform duration-300" />
          </button>
        </Link>
        <h1 className="ml-4 hidden lg:block text-xl font-bold lg:text-2xl uppercase">
          {carro.model} {carro.description}
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleShare}
          className="flex items-center justify-center w-10 h-10 rounded-sm bg-[#1E1E1E] border border-[#FF4420]/20"
        >
          <IoShareSocialOutline className="text-xl hover:scale-150 transition-transform duration-300" />
        </button>
      </div>
      {copied && (
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-green-600 text-white text-sm px-4 py-1 rounded shadow-md z-10">
          Link copiado com sucesso!
        </span>
      )}
    </div>
  );
}