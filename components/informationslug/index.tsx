import { IoCalendar, IoCarSportSharp } from "react-icons/io5";
import { IoMdSpeedometer } from "react-icons/io";
import Link from "next/link";
import { links } from "../../constants/links";
import { Carro } from "../../interfaces/Interface";

export default function InformationsSlug({ carro }: { carro: Carro }) {
  return (
    <div className="text-center uppercase max-w-md w-full mt-5 mx-auto px-4">
      <section>
        <h1 className="text-white text-3xl sm:text-4xl font-medium">
          {carro.model}
        </h1>
        <h2 className="mt-1 text-gray-400 text-base sm:text-lg">
          {carro.description}
        </h2>
      </section>

      <section className="flex flex-col sm:flex-row justify-center items-center rounded-3xl p-4 mt-4 gap-4 sm:gap-5">
        <div className="flex items-center gap-2">
          <IoCalendar className="text-2xl sm:text-3xl text-white" />
          <span className="text-white text-base sm:text-base font-medium">
            {carro.year}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IoMdSpeedometer className="text-2xl sm:text-3xl text-white" />
          <span className="text-white text-base sm:text-base font-medium lowercase">
            {carro.km} Km
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IoCarSportSharp className="text-2xl sm:text-3xl text-white" />
          <span className="text-white text-base sm:text-base font-medium">
            {carro.bodywork}
          </span>
        </div>
      </section>

      <div className="border-b border-gray-400 my-4" />

      <div className="mt-4">
        <h1 className="text-[#FF4420] text-3xl sm:text-5xl font-bold">
          {carro.price}
        </h1>
      </div>

      <div className="mt-4">
        <Link
          href={links.whatsapp}
          className="bg-[#FF4420] text-white rounded-3xl p-2 px-4 mt-4 block text-center text-base sm:text-lg font-medium hover:bg-[#FF4420]/50 transition-colors duration-300"
        >
          FALE CONOSCO
        </Link>
      </div>
    </div>
  );
}
