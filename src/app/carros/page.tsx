import CardsCar from "../../../components/cardscar";
import WhatsAppButton from "../../../components/ui/floatingbutton";
import Footer from "../../../components/ui/footer";
import Header from "../../../components/ui/header";
import ScrollToTopButton from "../../../components/ui/scrolltopbutton/ScrollToTopButton";

export default function Carros(){
    return(
        <div>
            <header>
                <Header/>
                 <WhatsAppButton />
                 <ScrollToTopButton />
            </header>
            <section>
                <CardsCar/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}