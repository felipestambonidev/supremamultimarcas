import Link from "next/link";
import { links } from "../../constants/links";
import { Carro } from "../../interfaces/Interface";
import { link } from "fs";

export default function InformationsSlug({ carro }: { carro: Carro }) {
  return (
    <div>
      <div className="bg-[#3F3D3D] p-3 mx-4 lg:mx-auto max-w-5xl md:max-w-5xl uppercase text-white rounded-t-lg relative z-10 -mt-2">
        <div className="text-center sm:text-left">
          <div>
            <h1 className="text-white text-3xl sm:text-3xl font-medium">
              {carro.model}
            </h1>
            <p className="text-sm text-gray-400 font-normal">
              {carro.description}
            </p>
          </div>
          <div className="text-center sm:text-right">
            <h1 className="text-[#FF4420] text-4xl mt-2 font-bold">
              {carro.price}
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid sm:grid-cols-4 gap-3 mt-5 text-white text-base font-medium sm:gap-5">
            <div>
              <h1 className="text-gray-400">Ano</h1>
              <h1>{carro.year}</h1>
            </div>
            <div>
              <h1 className="text-gray-400">KM</h1>
              <h1>{carro.km}</h1>
            </div>
            <div>
              <h1 className="text-gray-400">Câmbio</h1>
              <h1>{carro.carchange}</h1>
            </div>
            <div>
              <h1 className="text-gray-400">Carroceria</h1>
              <h1>{carro.bodywork}</h1>
            </div>
            <div>
              <h1 className="text-gray-400">Combustível</h1>
              <h1>{carro.fuel}</h1>
            </div>
            <div>
              <h1 className="text-gray-400">Final de Placa</h1>
              <h1>{carro.endofplate}</h1>
            </div>
            <div>
              <h1 className="text-gray-400">Cor</h1>
              <h1>{carro.color}</h1>
            </div>
            <div>
              <h1 className="text-gray-400">Blindado</h1>
              <h1>{carro.armored}</h1>
            </div>
            <div>
              <h1 className="text-gray-400">Portas</h1>
              <h1>{carro.doors}</h1>
            </div>
            <div>
              <h1 className="text-gray-400">Marca</h1>
              <h1>{carro.brand}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3F3D3D] p-3 mx-4 lg:mx-auto max-w-5xl md:max-w-5xl uppercase text-white mt-2 text-center rounded-b-lg">
        <Link href={links.whatsapp}>
          <h1 className="bg-[#FF4420] text-white rounded-3xl p-2 px-4 block text-center font-medium hover:bg-[#FF4420]/50 transition-colors duration-300">
            FALE CONOSCO
          </h1>
        </Link>
      </div>
    </div>
  );
}
