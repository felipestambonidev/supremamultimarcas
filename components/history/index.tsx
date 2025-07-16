import Image from "next/image";
import { AnimatedSection } from "../ui/animations/animated-section";
import Fachada from "../../public/images/fotofachada/fotofachadasuprema.jpg"

export default function History() {
  return (
    <AnimatedSection>
      <section className="py-12 md:py-16 bg-[#1a1a1a] mt-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-7 text-center lg:text-left">Nossa História</h2>
              <div className="space-y-4 text-gray-400 text-center lg:text-left">
                <p>
                  Fundada em 1989, a <span className="text-[#ff4d4d] font-semibold">Suprema Multimarcas</span>{" "}
                  nasceu do sonho de oferecer veículos de qualidade com atendimento diferenciado. Ao longo de mais
                  de 30 anos, construímos uma reputação sólida baseada na confiança, transparência e excelência no
                  atendimento.
                </p>
                <p>
                  Nossa trajetória é marcada por milhares de clientes satisfeitos que encontraram em nossa loja não
                  apenas um veículo, mas uma experiência completa de compra. Desde o primeiro contato até a entrega
                  das chaves, cuidamos de cada detalhe para garantir sua total satisfação.
                </p>
                <p>
                  Hoje, somos referência no mercado de veículos seminovos em Guarulhos, oferecendo uma ampla
                  variedade de marcas e modelos, todos rigorosamente selecionados e com garantia de procedência.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <Image
                src={Fachada}
                alt="Fachada da Suprema Multimarcas"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
