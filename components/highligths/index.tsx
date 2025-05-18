import Link from "next/link";
import cars from "../../data/cars.json";
import Image from "next/image";
import { IoCalendar } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { Card } from "../ui/card";
import { AnimatedSection } from "../ui/animated-section";
import { BiChevronRight } from "react-icons/bi";

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
      <section className="mt-20">
        <div className="px-5 md:px-20 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left gap-2 md:gap-0">
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-white w-full md:w-auto">
            CONFIRA OS DESTAQUES
          </h1>
          <Link
            href="/carros"
            className="flex items-center justify-center text-[#ff4d4d] hover:text-[#753c3c] duration-700 font-medium text-center md:text-right w-full md:w-auto"
          >
            VER TODOS <BiChevronRight className="h-5 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-11 px-12 md:px-20 mt-10 flex-col md:flex-row flex-wrap text-center justify-center justify-items-center">
          {highlightedCars.map((car, index) => (
            <Card
              key={index}
              className="p-5 shadow-xl hover:scale-105 transition-transform duration-300 max-w-[400px] w-full"
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
              <div className="text-center mt-2 text-white font-medium uppercase text-2xl">
                <h1>{car.model}</h1>
                <p className="text-sm text-gray-400 font-normal uppercase">
                  {car.description}
                </p>
                <p className="text-[#FF4420] text-3xl mt-2 font-bold">
                  {car.price}
                </p>
              </div>
              <div className="flex justify-center gap-4 mt-2 text-white text-base font-medium flex-wrap">
                <div className="bg-[#2B2B2B] rounded-3xl p-2 px-4 flex items-center gap-2">
                  <IoCalendar />
                  <p>{car.year}</p>
                </div>
                <div className="bg-[#2B2B2B] rounded-3xl p-2 px-4 flex items-center gap-2 uppercase">
                  <BsFuelPumpFill />
                  <p>{car.fuel}</p>
                </div>
              </div>
              <div>
                <Link
                  href={car.slug}
                  className="bg-[#FF4420] text-white rounded-3xl p-2 px-4 mt-4 block text-center font-medium hover:bg-[#FF4420]/50 transition-colors duration-300"
                >
                  VER MAIS
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
