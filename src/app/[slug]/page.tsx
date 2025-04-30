import carros from "../../../data/cars.json";
import { notFound } from "next/navigation";
import Header from "../../../components/header";
import WhatsAppButton from "../../../components/floatingbutton";
import PrincipalImageSlug from "../../../components/principalimageslug";
import InformationsSlug from "../../../components/informationslug";



export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const carro = carros.find((carro) => carro.slug === slug);

  if (!carro) return notFound();

  return (
    <div>
      <header>
        <Header />
        <WhatsAppButton />
      </header>
      <section className="mt-20 flex items-center justify-center gap-36  mx-12 p-2 rounded-3xl">
        <PrincipalImageSlug carro={carro} />
        <InformationsSlug carro={carro}  />
      </section>
      <section>
      
      </section>
    </div>
  );
}
