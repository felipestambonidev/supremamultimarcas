import WhatsAppButton from "../../../components/floatingbutton";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
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
            </div>
            <footer>
                <Footer/>
            </footer>
        </section>
    )
}