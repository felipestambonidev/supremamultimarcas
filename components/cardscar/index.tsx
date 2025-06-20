import Link from "next/link";
import Cars from "../../data/cars.json";
import Image from "next/image";
import { IoCalendar } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";

export default function CardsCar() {
  return (
    <div>
        <h1 className="text-white text-center mt-10 text-3xl md:text-4xl font-medium">CONFIRA NOSSO ESTOQUE</h1>
      <div className="mt-10 flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 px-4">
        {Cars.map((cars, index) => (
          <div
            key={index}
            className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-2xl p-5 shadow-xl hover:scale-105 transition-transform duration-300 max-w-[400px] w-full"
          >
            <div>
              <Link href={cars.slug}>
                <Image
                  src={cars.principalimage}
                  alt={cars.model}
                  height={200}
                  width={300}
                  className="rounded-2xl w-full object-cover"
                />
              </Link>
            </div>
            <div className="text-center mt-2 text-white font-medium uppercase text-2xl">
              <h1>{cars.model}</h1>
              <p className="text-sm text-gray-400 font-normal uppercase">
                {cars.description}
              </p>
              <p className="text-[#FF4420] text-3xl mt-2 font-bold">
                {cars.price}
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-2 text-white text-base font-medium flex-wrap">
              <div className="bg-[#2B2B2B] rounded-3xl p-2 px-4 flex items-center gap-2">
                <IoCalendar />
                <p>{cars.year}</p>
              </div>
              <div className="bg-[#2B2B2B] rounded-3xl p-2 px-4 flex items-center gap-2 uppercase">
                <BsFuelPumpFill />
                <p>{cars.fuel}</p>
              </div>
            </div>
            <div>
              <Link
                href={cars.slug}
                className="bg-[#FF4420] text-white rounded-3xl p-2 px-4 mt-4 block text-center font-medium hover:bg-[#FF4420]/50 transition-colors duration-300"
              >
                VER MAIS
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
