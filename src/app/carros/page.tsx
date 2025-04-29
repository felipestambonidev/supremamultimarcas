import CardsCar from "../../../components/cardscar";
import WhatsAppButton from "../../../components/floatingbutton";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

export default function Carros(){
    return(
        <div>
            <header>
                <Header/>
                 <WhatsAppButton />
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