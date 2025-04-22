import Banner from "../../components/banner";
import CarCardsHighlights from "../../components/cards";
import WhatsAppButton from "../../components/floatingbutton";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
        <WhatsAppButton />
      </header>
      <section>
        <Banner />
        <CarCardsHighlights />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
