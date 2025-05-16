import Brands from "../../../components/brands";
import WhatsAppButton from "../../../components/floatingbutton";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Results from "../../../components/results";
import Values from "../../../components/values";


export default function QuemSomos(){
    return(
        <section>
            <header>
                <Header/>
                <WhatsAppButton/>
            </header>
            <div>
               <Values />
               <Results />
               <Brands />
            </div>
            <footer>
                <Footer/>
            </footer>
        </section>
    )
}