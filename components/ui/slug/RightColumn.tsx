import { Carro } from "../../../interfaces/Interface";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { CarContactForm } from "./FormSlug";





export default function RightColumn({ carro }: { carro: Carro }) {
    return(
        <div>
            <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-2xl p-6 ">
              <div className="text-3xl font-bold text-white mb-4">
                {carro.price}
              </div>
              <div>
                <CarContactForm carro={carro}  />
              </div>
              <div className="mt-6 pt-6 border-t border-[#FF4420]/20">
                <button className="w-full bg-green-600 hover:bg-green-700 mb-4 p-2 rounded-sm">
                  <Link
                    href={`https://wa.me/5511947537444?text=Olá, tenho interesse no ${carro.model} ${carro.description}.`}
                    target="_blank"
                    className="flex items-center justify-center w-full text-white "
                  >
                  <FaWhatsapp className="text-white text-2xl mr-2" />
                    WhatsApp
                  </Link>
                </button>
              </div>
            </div>
          </div>
    )
}