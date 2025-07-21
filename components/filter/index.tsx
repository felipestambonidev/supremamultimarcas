"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import carros from "../../data/cars.json";
import CardFilter from "../cardfilter";

export default function FiltroCarros() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");
  const [modelosDisponiveis, setModelosDisponiveis] = useState<string[]>([]);
  const [anosDisponiveis, setAnosDisponiveis] = useState<number[]>([]);
  const [coresDisponiveis, setCoresDisponiveis] = useState<string[]>([]);

  const router = useRouter();

  const marcas = Array.from(new Set(carros.map((c) => c.brand)));

  useEffect(() => {
    if (marca) {
      const modelos = carros
        .filter((c) => c.brand === marca)
        .map((c) => c.model);
      setModelosDisponiveis(Array.from(new Set(modelos)));
      setModelo("");
      setAno("");
      setCor("");
      setAnosDisponiveis([]);
      setCoresDisponiveis([]);
    }
  }, [marca]);

  useEffect(() => {
    if (modelo) {
      const anos = carros
        .filter((c) => c.brand === marca && c.model === modelo)
        .map((c) => c.year);
      setAnosDisponiveis(Array.from(new Set(anos)));
      setAno("");
      setCor("");
      setCoresDisponiveis([]);
    }
  }, [modelo, marca]);

  useEffect(() => {
    if (ano) {
      const cores = carros
        .filter(
          (c) =>
            c.brand === marca && c.model === modelo && c.year === Number(ano)
        )
        .map((c) => c.color);
      setCoresDisponiveis(Array.from(new Set(cores)));
      setCor("");
    }
  }, [ano, modelo, marca]);

  const handleSubmit = () => {
    const carro = carros.find(
      (c) =>
        c.brand === marca &&
        c.model === modelo &&
        c.year === Number(ano) &&
        c.color === cor
    );
    if (carro) {
      router.push(`${carro.slug}`);
    } else {
      router.push("/404");
    }
  };

  return (
    <div>
      <section>
        <CardFilter />
      </section>

      <div className="flex flex-col items-center justify-center mt-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 w-full max-w-5xl">
          <select
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            className="bg-[#282828] p-3 rounded-lg  text-white font-medium w-full hover:scale-105 transition-transform duration-300 outline-none"
          >
            <option>SELECIONE A MARCA</option>
            {marcas.map((m, i) => (
              <option
                key={i}
                value={m}
                className="bg-[#121212] text-white font-medium uppercase outline-none"
              >
                {m}
              </option>
            ))}
          </select>

          <select
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            disabled={!marca}
            className="bg-[#282828] p-3 rounded-lg  text-white font-medium w-full hover:scale-105 transition-transform duration-300 outline-none"
          >
            <option>SELECIONE O MODELO</option>
            {modelosDisponiveis.map((m, i) => (
              <option
                key={i}
                value={m}
                className="bg-[#121212] text-white font-medium uppercase"
              >
                {m}
              </option>
            ))}
          </select>

          <select
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            disabled={!modelo}
            className="bg-[#282828] p-3 rounded-lg shadow-lg text-white font-medium w-full hover:scale-105 transition-transform duration-300 outline-none"
          >
            <option>SELECIONE O ANO</option>
            {anosDisponiveis.map((a, i) => (
              <option
                key={i}
                value={a}
                className="bg-[#1E1E1E] text-white font-medium uppercase"
              >
                {a}
              </option>
            ))}
          </select>

          <select
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            disabled={!ano}
            className="bg-[#282828] p-3 rounded-lg  text-white font-medium w-full hover:scale-105 transition-transform duration-300 outline-none"
          >
            <option>SELECIONE A COR</option>
            {coresDisponiveis.map((c, i) => (
              <option
                key={i}
                value={c}
                className="bg-[#121212] text-white font-medium uppercase"
              >
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 w-full flex justify-center">
          <button
            onClick={handleSubmit}
            className="group/btn relative block w-full max-w-xs"
          >
            <div className="relative bg-[#FF4524] rounded-xl p-3.5 text-center font-medium text-white transition-all duration-300 hover:bg-[#FF4420]/90 hover:shadow-lg hover:shadow-[#FF4420]/30 hover:scale-[1.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              <div className="relative flex items-center justify-center gap-2">
                <span className="tracking-wide font-medium">BUSCAR</span>
                <FaSearch className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </div>
            </div>
          </button>
        </div>
        
      </div>
    </div>
  );
}
