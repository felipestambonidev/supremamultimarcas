import Link from "next/link";
import { AnimatedSection } from "../ui/animations/animated-section";

export default function MeetUsAt(){
    return(
        <section className=" text-white py-12 md:py-16">
            <AnimatedSection>
              <div className="container text-center">
                <h2 className="text-3xl font-bold mb-4">Venha nos conhecer!</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Estamos prontos para ajudar você a encontrar o veículo dos seus sonhos. Nossa equipe especializada
                  está à disposição para oferecer o melhor atendimento e as melhores condições.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button  className="bg-[#ff4d4d] hover:bg-[#ff3333]">
                    <Link href="/carros">Ver Nosso Estoque</Link>
                  </button>
                  <button
                    className="border-gray-700 text-white hover:bg-white hover:text-[#1a1a1a]"
                  >
                    <Link href="/contato">Agendar Visita</Link>
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </section>
    )
}