import carros from "../../../data/cars.json";
import { notFound } from "next/navigation";
import Header from "../../../components/ui/header";
import WhatsAppButton from "../../../components/ui/floatingbutton";
import Footer from "../../../components/ui/footer";
import CarImageSlider from "../../../components/ui/slug/SlideFromSlug";
import RightColumn from "../../../components/ui/slug/RightColumn";
import Informations from "../../../components/ui/slug/informations";
import ScrollToTopButton from "../../../components/ui/scrolltopbutton/ScrollToTopButton";

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
        <ScrollToTopButton />
      </header>
      <div className="max-w-7xl mx-auto flex flex-col gap-2 px-4 lg:px-6">
        <Informations carro={carro} />
          <h1 className="ml-4 lg:hidden text-[19px] text-white text-center font-bold md:text-2xl uppercase">
          {carro.model} {carro.description}
        </h1>
        <div className="flex flex-col lg:flex-row gap-9">
          <div className="flex-1">
            <CarImageSlider carro={carro} />
          </div>
          <div className="w-full lg:w-[400px]">
            <div className="hidden lg:block sticky top-24">
              <RightColumn carro={carro} />
            </div>
            <div className="lg:hidden mt-8">
              <RightColumn carro={carro} />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
