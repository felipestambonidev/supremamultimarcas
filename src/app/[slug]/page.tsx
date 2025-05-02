import carros from "../../../data/cars.json";
import { notFound } from "next/navigation";
import Header from "../../../components/header";
import WhatsAppButton from "../../../components/floatingbutton";
import PrincipalImageSlug from "../../../components/principalimageslug";
import InformationsSlug from "../../../components/informationslug";
import CarImageSlider from "../../../components/slideslug";
import Footer from "../../../components/footer";



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
      <section className="mt-10 flex flex-col lg:flex-row items-center justify-center bg-[#3F3D3D]/20 shadow-2xl mx-4 lg:mx-12 p-5 rounded-3xl">
        <PrincipalImageSlug carro={carro} />
        <InformationsSlug carro={carro}  />
      </section>
      <section className="mx-12 mt-28">
        <CarImageSlider carro={carro} />
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
