import CardsCar from "../../../components/cardscar";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

export default function Carros(){
    return(
        <div>
            <header>
                <Header/>
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