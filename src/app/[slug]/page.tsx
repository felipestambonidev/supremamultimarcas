import carros from "../../../data/cars.json";
import { notFound } from "next/navigation";
import Header from "../../../components/ui/header";
import WhatsAppButton from "../../../components/ui/floatingbutton";
import Footer from "../../../components/ui/footer";
import Informations from "../../../components/ui/slug/informations";
import CarImageSlider from "../../../components/ui/slug/SlideFromSlug";



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
        <Header/>
        <WhatsAppButton  />
      </header>
      <div className="mt-5">
        <Informations carro={carro} />
      </div>
      <div>
         <CarImageSlider carro={carro} />
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
