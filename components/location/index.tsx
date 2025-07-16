import Link from "next/link";
import { AnimatedSection } from "../ui/animations/animated-section";
import { FiMapPin, FiClock } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

export default function Location() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-16 bg-[#1a1a1a] mt-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            {/* ESQUERDA */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-white uppercase">
                Nossa Localização
              </h2>

              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="rounded-full bg-[#ff4d4d]/10 p-2">
                    <FiMapPin className="h-5 w-5 text-[#ff4d4d]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Endereço</h3>
                    <p className="text-gray-400">Av. Dr. Timóteo Penteado, 784</p>
                    <p className="text-gray-400">Vila Hulda, Guarulhos - SP, 07094-000</p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="rounded-full bg-[#ff4d4d]/10 p-2">
                    <FiClock className="h-5 w-5 text-[#ff4d4d]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-400">Sábado: 8h às 14h</p>
                  </div>
                </div>

                {/* Contato */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="rounded-full bg-[#ff4d4d]/10 p-2">
                    <FaPhoneAlt className="h-5 w-5 text-[#ff4d4d]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Contato</h3>
                    <p className="text-gray-400">(11) 2408-1050</p>
                    <p className="text-gray-400">(11) 2408-1050</p>
                    <p className="text-gray-400">dmsuprema@hotmail.com</p>
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 items-center">
                <Link href="/contato">
                  <button className="bg-[#ff4d4d] hover:bg-[#ff3333] px-6 py-2 rounded text-white font-semibold transition">
                    Entre em Contato
                  </button>
                </Link>
                <Link href="/carros">
                  <button className="border border-gray-700 px-6 py-2 rounded text-white font-semibold transition hover:bg-gray-800">
                    Ver Nosso Estoque
                  </button>
                </Link>
              </div>
            </div>

            {/* DIREITA - MAPA */}
            <div className="w-full">
              <div className="overflow-hidden rounded-lg border border-gray-800 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4918.207235299609!2d-46.537266!3d-23.4582569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef56adb55491b%3A0x768da3d7640a64d1!2sSuprema%20Autom%C3%B3veis!5e1!3m2!1spt-BR!2sbr!4v1752630892332!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
