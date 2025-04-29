import Image from "next/image";

export default function PrincipalImageSlug({ carro }: { carro: any }) {
  return (
    <div>
      <Image
        src={carro.principalimage}
        alt={carro.model}
        height={500}
        width={500}
        className="rounded-3xl hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}