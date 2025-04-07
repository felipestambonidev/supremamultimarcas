import Image from "next/image";
import cars from "../../../data/cars.json";


type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

export default function CarDetail({ params }: Props) {
  const car = cars.find((c) => c.slug === params.slug);

  if (!car) {
    return <div className="text-white p-8">Carro não encontrado.</div>;
  }

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{car.model}</h1>
      <Image
        src={car.images[0]} 
        alt={car.model}
        width={600}
        height={400}
        className="rounded-lg"
      />
      <p className="mt-4">{car.description}</p>
      <p className="text-orange-500 font-bold text-xl">{car.price}</p>
      <p className="mt-2">Ano: {car.year}</p>
      <p>Combustível: {car.fuel}</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Galeria de Imagens</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {car.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${car.model} - Foto ${index + 1}`}
              width={200}
              height={150}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}