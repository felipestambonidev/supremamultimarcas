import Brands from "../../../components/brands";
import WhatsAppButton from "../../../components/ui/floatingbutton";
import Footer from "../../../components/ui/footer";
import Header from "../../../components/ui/header";
import Results from "../../../components/results";
import Values from "../../../components/values";
import ScrollToTopButton from "../../../components/ui/scrolltopbutton/ScrollToTopButton";
import History from "../../../components/history";
import Location from "../../../components/location";


export default function QuemSomos(){
    return(
        <section>
            <header>
                <Header/>
                <WhatsAppButton/>
                <ScrollToTopButton />
            </header>
            <div>
               <History />
               <Values />
               <Results />
               <Brands />
               <Location/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </section>
    )
}