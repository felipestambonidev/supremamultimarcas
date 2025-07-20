import { AnimatedSection } from "../ui/animations/animated-section";
import { Card } from "../ui/card";
import {
  IoShieldOutline,
  IoCalendarClearOutline,
  IoCarOutline,
} from "react-icons/io5";

export default function ChooseUs() {
  return (
    <AnimatedSection>
      <section className="flex flex-col items-center justify-center text-center  bg-[#1a1a1a]">
        <div className="flex flex-col items-center justify-center mt-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-white uppercase">
            Por que escolher a Suprema?
          </h1>
          <p className="text-gray-400 max-w-[700px] px-5">
            Há mais de 30 anos oferecendo os melhores veículos com qualidade e
            procedência garantida.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20 mt-10 mb-20">
          <Card>
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-[#ff4d4d]/10 p-3 mb-4 hover:scale-105 transition-transform duration-300">
                  <IoShieldOutline className="h-8 w-8 text-[#ff4d4d] " />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white uppercase">
                  Garantia de Procedência
                </h3>
                <p className="text-gray-400">
                  Todos os nossos veículos passam por rigorosa inspeção técnica
                  e documental.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-[#ff4d4d]/10 p-3 mb-4 hover:scale-105 transition-transform duration-300">
                  <IoCalendarClearOutline className="h-8 w-8 text-[#ff4d4d]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white uppercase">
                  Tradição a mais de 30 anos
                </h3>
                <p className="text-gray-400">
                  Mais de 30 anos de experiência no mercado automotivo com
                  milhares de clientes satisfeitos.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-[#ff4d4d]/10 p-3 mb-4 hover:scale-105 transition-transform duration-300">
                  <IoCarOutline className="h-8 w-8 text-[#ff4d4d]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white uppercase">
                  Amplo Estoque
                </h3>
                <p className="text-gray-400">
                  Diversidade de marcas e modelos para você encontrar o veículo
                  ideal para suas necessidades.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </AnimatedSection>
  );
}
