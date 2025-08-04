import { AnimatedSection } from "../animations/animated-section";
import { Carro } from "../../../interfaces/Interface";
import { Check } from "lucide-react";

export default function CaracterCar({ carro }: { carro: Carro }) {
  return (
    <AnimatedSection>
      <div className="text-xl font-bold text-white mb-4 uppercase mt-6 space-y-3 px-5">
        <h1>Características</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 space-y-3 px-5">
        {carro.features &&
          carro.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="rounded-full bg-[#ff4d4d]/10 p-1 mr-2">
                <Check className="h-3 w-3 text-[#ff4d4d]" />
              </div>
              <div>
                <p className="text-sm text-gray-300">{feature}</p>
              </div>
            </div>
          ))}
      </div>
    </AnimatedSection>
  );
}
