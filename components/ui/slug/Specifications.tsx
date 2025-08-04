import { Carro } from "../../../interfaces/Interface";
import {
  Calendar,
  Gauge,
  Repeat,
  Fuel,
  Palette,
  Car,
  DoorOpen,
} from "lucide-react";

import { AnimatedSection } from "../animations/animated-section";

export default function SpecificationsCar({ carro }: { carro: Carro }) {
  return (
    <AnimatedSection>
      <div className="mt-6 space-y-3 px-5">
        <div className="text-xl font-bold text-white mb-4 uppercase">
          <h1>Especificações</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-lg p-4 flex items-center">
            <div className="rounded-full bg-[#ff4d4d]/10 p-2 mr-3">
              <Calendar className="h-5 w-5 text-[#ff4d4d]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Ano</p>
              <p className="font-medium text-sm text-white">{carro.year}</p>
            </div>
          </div>
          <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-lg p-4 flex items-center">
            <div className="rounded-full bg-[#ff4d4d]/10 p-2 mr-3">
              <Gauge className="h-5 w-5 text-[#ff4d4d]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Km</p>
              <p className="font-medium text-sm text-white">{carro.km}</p>
            </div>
          </div>
          <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-lg p-4 flex items-center">
            <div className="rounded-full bg-[#ff4d4d]/10 p-2 mr-3">
              <Repeat className="h-5 w-5 text-[#ff4d4d]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Câmbio</p>
              <p className="font-medium text-sm text-white">{carro.carchange}</p>
            </div>
          </div>
          <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-lg p-4 flex items-center">
            <div className="rounded-full bg-[#ff4d4d]/10 p-2 mr-3">
              <Fuel className="h-5 w-5 text-[#ff4d4d]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Combustível</p>
              <p className="font-medium text-sm text-white">{carro.fuel}</p>
            </div>
          </div>
          <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-lg p-4 flex items-center">
            <div className="rounded-full bg-[#ff4d4d]/10 p-2 mr-3">
              <Palette className="h-5 w-5 text-[#ff4d4d]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Cor</p>
              <p className="font-medium text-sm text-white">{carro.color}</p>
            </div>
          </div>
          <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-lg p-4 flex items-center">
            <div className="rounded-full bg-[#ff4d4d]/10 p-2 mr-3">
              <DoorOpen className="h-5 w-5 text-[#ff4d4d]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Portas</p>
              <p className="font-medium text-sm text-white">{carro.doors}</p>
            </div>
          </div>
          <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-lg p-4 flex items-center">
            <div className="rounded-full bg-[#ff4d4d]/10 p-2 mr-3">
              <Car className="h-5 w-5 text-[#ff4d4d]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Carroceria</p>
              <p className="font-medium text-sm text-white">{carro.bodywork}</p>
            </div>
          </div>
          <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-lg p-4 flex items-center">
            <div className="rounded-full bg-[#ff4d4d]/10 p-2 mr-3">
              <span className="flex items-center justify-center h-5 w-5 text-[#ff4d4d] font-bold">
                P
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-400">Final da Placa</p>
              <p className="font-medium text-sm text-white">{carro.endofplate}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
