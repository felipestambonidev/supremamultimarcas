import { AnimatedSection } from "../ui/animations/animated-section";

export default function CardFilter() {
    return (
      <AnimatedSection>
        <section className="flex items-center justify-center text-center">
        <div className="lg:text-5xl text-3xl font-bold mt-12 text-white  border-[#FF4420]/20 p-5 mx-5 lg:mx-0 rounded-lg shadow-lg">
          <h1>BEM-VINDO A</h1>
          <h1 className="text-[#FF4420] mt-1">SUPREMA MULTIMARCAS</h1>
          <p className="lg:text-2xl text-xl lg:mt-5 mt-2">MAIS DE <span className="text-[#FF4420]">40 ANOS</span> DE TRADIÇÃO!</p>
        </div>
      </section>
      </AnimatedSection>
      
    );
  }
  