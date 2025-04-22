import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiInfoI } from "react-icons/ri";
import Image from 'next/image';
import Logo from '../../public/images/logosuprema/logomaior.png'; 
import Link from 'next/link';
import { links } from '../../constants/links';

export default function Footer() {
  return (
    <footer className="bg-[#3F3D3D] border-2 border-[#3F3D3D] border-t-[#FF4420]/20 text-white py-10 px-6 mt-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center">
        <div className="flex justify-center items-center md:justify-start md:items-start mt-5">
          <Image src={Logo} alt="Logo" width={180} height={160}  className="w-auto max-w-[200px] h-auto" />
        </div>
        <div className='p-5'>
          <h2 className="text-2xl font-medium mb-3">PÁGINAS</h2>
          <ul className="space-y-2 font-semibold uppercase">
            <li><Link href="/" className="hover:text-[#FF4420] duration-700">Home</Link></li>
            <li><Link href="/carros" className="hover:text-[#FF4420] duration-700">Carros</Link></li>
            <li><Link href="/quem-somos" className="hover:text-[#FF4420] duration-700">Quem Somos</Link></li>
          </ul>
        </div>
        <div className='bg-[#1e1e1e] p-5 rounded-3xl border border-[#FF4420]/20'>
          <h2 className="text-lg font-semibold mb-3">NOSSA LOCALIZAÇÃO</h2>
          <iframe
            title="Localização"
            src={links.localizacao}
            width="100%"
            height="150"
            loading="lazy"
            className="rounded-md border-2 border-white"/>
        </div>
        <div className='p-5'>
          <h2 className="text-lg font-semibold mb-3">REDES SOCIAIS</h2>
          <div className="flex justify-center gap-4 text-2xl">
            <Link href={links.instagram}>
              <FaInstagram className="hover:text-pink-500 transition hover:scale-110"/>
            </Link>
            <Link href={links.whatsapp}>
              <FaWhatsapp className="hover:text-green-500 hover:scale-110 transition ml-2"/>
            </Link>
            <Link href={links.icarros}>
              <RiInfoI className="hover:text-orange-500 transition hover:scale-110"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
