import Link from "next/link";
import cars from "../../data/cars.json";
import Image from "next/image";
import { IoCalendar } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiGaugeFill } from "react-icons/pi";
import { Card } from "../ui/card";
import { AnimatedSection } from "../ui/animations/animated-section";
import { BiChevronRight } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Highlights() {
  const highlightedCars = cars
    .filter((car) => car.highlight === true)
    .sort((a, b) =>
      a.model === "Volkswagen Nivus"
        ? -1
        : b.model === "Volkswagen Nivus"
        ? 1
        : 0
    );

  return (
    <AnimatedSection>
      <section className="mt-20 p-5">
        <div className="px-5 md:px-16 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left gap-2 md:gap-0">
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-white w-full md:w-auto">
            CONFIRA OS DESTAQUES
          </h1>
          <Link
            href="/carros"
            className="flex items-center justify-center text-[#FF4524] hover:text-[#753c3c] duration-700 font-medium text-center md:text-right w-full md:w-auto"
          >
            VER TODOS <BiChevronRight className="h-5 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-11 px-12 md:px-16 mt-10">
          {highlightedCars.map((car, index) => (
            <Card
              key={index}
              className="p-5 shadow-xl hover:scale-105 transition-transform duration-300 max-w-[400px] w-full bg-[#1a1a1a] rounded-2xl"
            >
              <div>
                <Link href={car.slug}>
                  <Image
                    src={car.principalimage}
                    alt={car.model}
                    height={200}
                    width={300}
                    className="rounded-2xl w-full object-cover"
                  />
                </Link>
              </div>

              <div className="text-left mt-4 text-white font-medium uppercase text-2xl">
                <h1>{car.model}</h1>
                <p className="text-sm text-gray-400 font-normal uppercase">
                  {car.description}
                </p>
                <p className="text-gray-200 text-3xl mt-2 font-bold">
                  {car.price}
                </p>
              </div>

              <div className="flex flex-wrap justify-start gap-4 mt-4 text-gray-400 text-base font-medium">
                <div className="flex items-center gap-2">
                  <IoCalendar className="text-white" />
                  <p>{car.year}</p>
                </div>
                <div className="flex items-center gap-2 uppercase">
                  <BsFuelPumpFill className="text-white" />
                  <p>{car.fuel}</p>
                </div>
                <div className="flex items-center gap-2">
                  <PiGaugeFill className="text-white" />
                  <p>{car.km}</p>
                </div>
              </div>

              <div>
                <Link
                  href={car.slug}
                  className="group/btn relative block w-full mt-5"
                >
                  <div className="relative bg-[#FF4524] rounded-xl p-3.5 text-center font-medium text-white transition-all duration-300 hover:bg-[#FF4420]/90 hover:shadow-lg hover:shadow-[#FF4420]/30 hover:scale-[1.02] overflow-hidden">
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
    </AnimatedSection>
  );
}
