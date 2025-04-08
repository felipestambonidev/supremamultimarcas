import cars from "../../data/cars.json";
import Image from "next/image";
import { IoCalendar } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import Link from "next/link";
import compass from "../../public/images/cars/jeep/compass/foto1compass.jpg"


export default function CarCardsHighlights() {
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
    <div>
    <section className="text-white text-center mt-10 text-2xl md:text-3xl font-medium">
      <h1>CONFIRA OS DESTAQUES</h1>
    </section>
    <div className="md:flex justify-center mt-10">
      <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-2xl mx-20 md:mx-18 lg:mx-20 mt-5 p-5  justify-center items-center">
        <div>
          <Image src={compass} alt="foto" height={200} className="rounded-lg w-full" />
        </div>
        <div>
          <h1 className="text-white">Oi</h1>
        </div>
      </div>
      <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-2xl mx-20 mt-5 p-5 flex justify-center items-center">
        <div>
          <Image src={compass} alt="foto" height={200} className="rounded-lg w-full" />
        </div>
      </div>
      <div className="bg-[#1E1E1E] border border-[#FF4420]/20 rounded-2xl mx-20 mt-5 p-5 flex justify-center items-center">
        <div>
          <Image src={compass} alt="foto" height={200} className="rounded-lg w-full" />
        </div>
      </div>
    </div>
  </div>
  )
}
