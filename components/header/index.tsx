"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logosuprema/logomaior.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#3F3D3D] border border-[#FF4420]/20 rounded-full p-3 mx-4 lg:mx-auto max-w-4xl mt-5 md:max-w-5xl">
      <div className="flex justify-between items-center">
        <Link href="/"><Image src={Logo} alt="Logo Suprema" width={180} height={160} className="ml-5"/></Link>
        <nav className="hidden md:flex text-[22px] gap-16 text-white font-semibold pr-12">
          <Link href="/" className="hover:text-[#FF4420] duration-700">HOME</Link>
          <Link href="/carros" className="hover:text-[#FF4420] duration-700">CARROS</Link>
          <Link href="/quem-somos" className="hover:text-[#FF4420] duration-700">QUEM SOMOS</Link>
        </nav>
        <button className="md:hidden text-white text-3xl hover:text-[#FF4420] pr-5" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}>
            {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-[#3F3D3D]/80 backdrop-blur-md z-50 shadow-lg flex flex-col items-start p-5 transform transition-transform duration-500 ${ menuOpen ? "translate-x-0" : "translate-x-full" }`}>
        <button className="text-white text-3xl hover:text-[#FF4420] self-end" onClick={() => setMenuOpen(false)} aria-label="Fechar Menu">
            <FiX />
        </button>
        <nav className="mt-10 flex flex-col space-y-8 text-white font-semibold text-xl">
            <Link href="/" className="hover:text-[#FF4420] duration-700">HOME</Link>
            <Link href="/carros" className="hover:text-[#FF4420] duration-700">CARROS</Link>
            <Link href="/quem-somos" className="hover:text-[#FF4420] duration-700">QUEM SOMOS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;