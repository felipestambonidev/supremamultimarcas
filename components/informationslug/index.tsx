import { IoCalendar, IoCarSportSharp } from "react-icons/io5";
import { IoMdSpeedometer } from "react-icons/io";
import Link from "next/link";
import { links } from "../../constants/links";
import { Carro } from "../../interfaces/Interface"


export default function InformationsSlug({ carro }: { carro: Carro }) {
  return (
    <div className="text-center uppercase">
      <section>
        <h1 className="text-white text-5xl font-medium">{carro.model}</h1>
        <h1 className="mt-2 text-gray-400 text-xl">{carro.description}</h1>
      </section>
      <section className="flex  rounded-3xl p-4 mt-1">
        <div className="flex mt-2">
          <IoCalendar className="text-3xl text-white" />
          <h1 className="text-white text-xl ml-2 font-medium">{carro.year}</h1>
        </div>
        <div className="flex mt-2 ml-10">
          <IoMdSpeedometer className="text-3xl text-white" />
          <h1 className="text-white text-xl ml-2 font-medium lowercase">
            {carro.km} Km
          </h1>
        </div>
        <div className="flex mt-2 ml-10">
          <IoCarSportSharp className="text-3xl text-white" />
          <h1 className="text-white text-xl ml-2 font-medium">
            {carro.bodywork}
          </h1>
        </div>
      </section>
      <div className="border-b border-gray-400 my-4" />
      <div className="mt-5">
        <h1 className="text-[#FF4420] text-5xl mt-2 font-bold">
          {carro.price}
        </h1>
      </div>
      <div className="mt-5">
        <Link
          href={links.whatsapp}
          className="bg-[#FF4420] text-white rounded-3xl p-2 px-4 mt-4 block text-center font-medium hover:bg-[#FF4420]/50 transition-colors duration-300"
        >
          FALE CONOSCO
        </Link>
      </div>
    </div>
  );
}
