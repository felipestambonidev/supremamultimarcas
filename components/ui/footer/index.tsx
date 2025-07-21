import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiInfoI } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import { BsTelephonePlus } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { links } from "../../../constants/links";
import Image from "next/image";
import Logo from "../../../public/images/logosuprema/logomaior.png";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#121212] border-2 border-[#121212] border-t-[#FF4420]/20 text-white py-10 px-6">
      <div className="max-w-7xl md:max-w-[1220px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
        
        <div>
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={180}
              height={160}
              className="h-10 w-auto mb-4 mx-auto md:mx-0"
            />
          </Link>
          <p className="text-sm mb-4 text-gray-400">
            Mais de 30 anos de tradição no mercado automotivo, oferecendo os
            melhores veículos com qualidade e procedência.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <Link href={links.instagram}><FaInstagram className="hover:text-pink-500 transition hover:scale-110"/></Link>
            <Link href={links.whatsapp}><FaWhatsapp className="hover:text-green-500 hover:scale-110 transition ml-2"/></Link>
            <Link href={links.icarros}><RiInfoI className="hover:text-orange-500 transition hover:scale-110"/></Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4 uppercase text-xl">Links Rápidos</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white transition hover:scale-110">Home</Link></li>
            <li><Link href="/carros" className="hover:text-white transition hover:scale-110">Carros</Link></li>
            <li><Link href="/quem-somos" className="hover:text-white transition hover:scale-110">Quem somos</Link></li>
            <li><Link href={links.whatsapp} className="hover:text-white transition hover:scale-110">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4 uppercase text-xl">Contato</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex justify-center md:justify-start items-start">
              <LuMapPin className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
              <span>Av. Dr. Timóteo Penteado, 784 - Guarulhos</span>
            </li>
            <li className="flex justify-center md:justify-start items-start">
              <BsTelephonePlus className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
              <span>(11) 2408-1050 / (11) 99740-0467</span>
            </li>
            <li className="flex justify-center md:justify-start items-start">
              <HiOutlineMail className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
              <span>dmsuprema@hotmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4 uppercase text-xl">Horário de Funcionamento</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Segunda a Sexta: 8h às 18h</li>
            <li>Sábado: 8h às 14h</li>
            <li>Domingo: Fechado</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm border-t border-[#FF4420]/20 uppercase">
        <p className="mt-5">© {new Date().getFullYear()}
          <span className="text-red-500"> Suprema Multimarcas. </span> Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
