import { valuesData } from "../../data/valuesData";

export default function Values() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white font-bold tracking-tight sm:text-4xl mb-4 uppercase">
            Nossos Valores
          </h2>
          <p className="mx-auto max-w-2xl text-white">
            Princípios que norteiam nossa atuação e garantem a satisfação dos
            nossos clientes
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {valuesData.map((value, index) => {
            const Icon = value.Icon;
            return (
              <div
                key={index}
                className="rounded-lg border border-[#FF4420]/20 bg-[#1E1E1E] p-6 shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">
                  <Icon className="h-10 w-10  text-[#FF4420]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white uppercase">
                  {value.title}
                </h3>
                <p className="text-white">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
