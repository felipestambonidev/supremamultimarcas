
import Link from "next/link";

export default function VehicleCTA() {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para encontrar seu próximo veículo?
          </h2>
          <p className="text-gray-400 mb-6">
            Visite nossa loja ou entre em contato para saber mais sobre nossos veículos e
            condições especiais de financiamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/carros">
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded">
                Ver Estoque Completo
              </button>
            </Link>
            <Link href="/agendar-visita">
              <button className="border border-gray-400 hover:border-white py-2 px-6 rounded text-white">
                Agendar Visita
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden">
          <video
            src="/videos/videocarro.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
