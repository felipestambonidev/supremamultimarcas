import { Carro } from "../../../interfaces/Interface";
import { AnimatedSection } from "../../ui/animations/animated-section";

export default function DescriptionCars({ carro }: { carro: Carro }) {
  return (
    <AnimatedSection>
      <div>
        <div className="mt-6 space-y-3 px-5">
          <div className="mt-8 bg-[#1E1E1E] border border-[#FF4420]/20 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 uppercase">
              Descrição
            </h2>
            <p className="text-gray-400">
              {carro.model} {carro.description} {carro.year}, {carro.color},{" "}
              {carro.km} km, {carro.fuel}, {carro.carchange}. Veículo em
              excelente estado de conservação, revisado e com garantia.
              {carro.armored === "Sim"
                ? " Veículo blindado com proteção de alta qualidade."
                : ""}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
