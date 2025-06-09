import Banner from "../../components/banner";
import ChooseUs from "../../components/chooseus";
import WhatsAppButton from "../../components/floatingbutton";
import Footer from "../../components/footer";
import Header from "../../components/ui/header";
import Highlights from "../../components/highligths";



export default function Home() {
  return (
    <div>
      <header>
        <Header />
        <WhatsAppButton />
      </header>
      <section>
        <Banner  />
        <ChooseUs />
        <Highlights />
  
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
