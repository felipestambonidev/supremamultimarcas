import cars from "../../data/cars.json";
import Image from "next/image";
import { IoCalendar } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import Link from "next/link";

export default function CarCards() {
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
    <div className="p-4">
      <section className="text-center mt-10 text-white text-[29px] sm:text-[35px] md:text-[42px] font-semibold">
        <h1>CONFIRA OS DESTAQUES</h1>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 px-20 mt-10 justify-center">
        {highlightedCars.map((car, index) => (
          <div
            key={index}
            className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Link href={car.slug}>
              <Image
                src={car.principalimage}
                alt={car.model}
                className="rounded-lg w-full sm:w-[300px] md:w-[350px] lg:w-[380px] h-auto"
                width={400}
                height={150}
              />
            </Link>
            <div className="text-center p-2 uppercase">
              <h2 className="text-3xl font-bold text-white mt-4">
                {car.model}
              </h2>
              <p className="text-gray-400 text-base">{car.description}</p>
              <p className="text-[#FF4420] text-3xl font-bold mt-2">
                {car.price}
              </p>
              <div className="flex items-center justify-center gap-5 mt-4">
                <div className="bg-[#2B2B2B] rounded-3xl p-2 px-4 flex items-center justify-center gap-2 text-white text-xl">
                  <IoCalendar className="text-white text-xl" />
                  <p>{car.year}</p>
                </div>
                <div className="bg-[#2B2B2B] rounded-3xl p-2 px-4  flex items-center justify-center gap-2 text-white text-xl">
                  <BsFuelPumpFill className="text-white text-xl" />
                  <p>{car.fuel}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={`/carros/${car.slug}`}>
                  <button className="bg-[#FF4420] p-2 px-10 rounded-3xl text-white font-medium">
                    VER MAIS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
