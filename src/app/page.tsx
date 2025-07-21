import Banner from "../../components/banner";
import ChooseUs from "../../components/chooseus";
import WhatsAppButton from "../../components/ui/floatingbutton";
import Footer from "../../components/ui/footer";
import Header from "../../components/ui/header";
import Highlights from "../../components/highligths";
import ScrollToTopButton from "../../components/ui/scrolltopbutton/ScrollToTopButton";
import VehicleCTA from "../../components/findyourcarsection";



export default function Home() {
  return (
    <div>
      <header>
        <Header />
        <WhatsAppButton />
        <ScrollToTopButton />
      </header>
      <section>
        <Banner  />
        <ChooseUs />
        <Highlights />
        <VehicleCTA />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
