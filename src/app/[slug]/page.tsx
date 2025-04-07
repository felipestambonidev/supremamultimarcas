import carros from '../../../data/cars.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function CarDetailPage({ params }: PageProps) {
  const carro = carros.find((c) => c.slug === params.slug);

  if (!carro) return notFound();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{carro.brand} {carro.model}</h1>
      <p className="text-lg">{carro.description}</p>
      <Image
        src={carro.principalimage}
        alt={carro.model}
        width={600}
        height={400}
        className="my-4 rounded-lg"
      />
      <ul className="space-y-1">
        <li><strong>Ano:</strong> {carro.year}</li>
        <li><strong>Preço:</strong> {carro.price}</li>
        <li><strong>Cor:</strong> {carro.color}</li>
        <li><strong>Placa final:</strong> {carro.endofplate}</li>
        <li><strong>Câmbio:</strong> {carro.carchange}</li>
        <li><strong>Combustível:</strong> {carro.fuel}</li>
        <li><strong>Km:</strong> {carro.km}</li>
        <li><strong>Portas:</strong> {carro.doors}</li>
        <li><strong>Carroceria:</strong> {carro.bodywork}</li>
      </ul>
    </div>
  );
}
