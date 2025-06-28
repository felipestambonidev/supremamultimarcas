import carros from "../../../data/cars.json";
import { notFound } from "next/navigation";
import Header from "../../../components/ui/header";
import WhatsAppButton from "../../../components/ui/floatingbutton";
// import InformationsSlug from "../../../components/informationslug";
// import CarImageSlider from "../../../components/slideslug";
import Footer from "../../../components/ui/footer";
import Informations from "../../../components/ui/slug/informations";



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
        {/* <Header/> */}
        <WhatsAppButton  />
      </header>
      <div className="">
        <Informations carro={carro} />
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
