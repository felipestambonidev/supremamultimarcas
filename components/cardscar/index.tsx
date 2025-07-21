import Link from "next/link";
import Cars from "../../data/cars.json";
import Image from "next/image";
import { IoCalendar } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiGaugeFill } from "react-icons/pi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Card } from "../ui/card";

export default function CardsCar() {
  return (
    <section className="mt-20 p-5">
      <h1 className="text-white text-center text-3xl md:text-4xl font-medium mb-10">
        CONFIRA NOSSO ESTOQUE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-11 px-4 md:px-16">
        {Cars.map((cars, index) => (
          <Card
            key={index}
            className="p-5 shadow-xl hover:scale-105 transition-transform duration-300 max-w-[400px] w-full bg-[#1a1a1a] rounded-2xl"
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
            <div className="text-left mt-4 text-white font-medium uppercase text-2xl">
              <h1>{cars.model}</h1>
              <p className="text-sm text-gray-400 font-normal uppercase">
                {cars.description}
              </p>
              <p className="text-white text-3xl mt-2 font-bold">{cars.price}</p>
            </div>
            <div className="flex flex-wrap justify-start gap-4 mt-4 text-gray-400 text-base font-medium">
              <div className="flex items-center gap-2">
                <IoCalendar className="text-white" />
                <p>{cars.year}</p>
              </div>
              <div className="flex items-center gap-2 uppercase">
                <BsFuelPumpFill className="text-white" />
                <p>{cars.fuel}</p>
              </div>
              <div className="flex items-center gap-2">
                <PiGaugeFill className="text-white" />
                <p>{cars.km}</p>
              </div>
            </div>
            <div>
              <Link
                href={cars.slug}
                className="group/btn relative block w-full mt-5"
              >
                <div className="relative bg-[#FF4420] rounded-xl p-3.5 text-center font-medium text-white transition-all duration-300 hover:bg-[#FF4420]/90 hover:shadow-lg hover:shadow-[#FF4420]/30 hover:scale-[1.02] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <span className="tracking-wide font-medium">
                      VER MAIS
                    </span>
                    <FaLongArrowAltRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
