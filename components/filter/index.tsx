'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa'; 
import carros from '../../data/cars.json';

export default function FiltroCarros() {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [modelosDisponiveis, setModelosDisponiveis] = useState<string[]>([]);
  const [anosDisponiveis, setAnosDisponiveis] = useState<number[]>([]);
  const [coresDisponiveis, setCoresDisponiveis] = useState<string[]>([]);

  const router = useRouter();

  const marcas = Array.from(new Set(carros.map(c => c.brand)));

  useEffect(() => {
    if (marca) {
      const modelos = carros.filter(c => c.brand === marca).map(c => c.model);
      setModelosDisponiveis(Array.from(new Set(modelos)));
      setModelo('');
      setAno('');
      setCor('');
      setAnosDisponiveis([]);
      setCoresDisponiveis([]);
    }
  }, [marca]);

  useEffect(() => {
    if (modelo) {
      const anos = carros
        .filter(c => c.brand === marca && c.model === modelo)
        .map(c => c.year);
      setAnosDisponiveis(Array.from(new Set(anos)));
      setAno('');
      setCor('');
      setCoresDisponiveis([]);
    }
  }, [modelo, marca]);

  useEffect(() => {
    if (ano) {
      const cores = carros
        .filter(c => c.brand === marca && c.model === modelo && c.year === Number(ano))
        .map(c => c.color);
      setCoresDisponiveis(Array.from(new Set(cores)));
      setCor('');
    }
  }, [ano, modelo, marca]);

  const handleSubmit = () => {
    const carro = carros.find(
      c =>
        c.brand === marca &&
        c.model === modelo &&
        c.year === Number(ano) &&
        c.color === cor
    );
    if (carro) {
      router.push(`${carro.slug}`);
    } else {
      router.push('/404');
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto p-4  bg-white">
      <select
        value={marca}
        onChange={e => setMarca(e.target.value)}
        className="border p-2"
      >
        <option value="">Selecione a Marca</option>
        {marcas.map((m, i) => (
          <option key={i} value={m}>{m}</option>
        ))}
      </select>

      <select
        value={modelo}
        onChange={e => setModelo(e.target.value)}
        className="border p-2"
        disabled={!marca}
      >
        <option value="">Selecione o Modelo</option>
        {modelosDisponiveis.map((m, i) => (
          <option key={i} value={m}>{m}</option>
        ))}
      </select>

      <select
        value={ano}
        onChange={e => setAno(e.target.value)}
        className="border p-2"
        disabled={!modelo}
      >
        <option value="">Selecione o Ano</option>
        {anosDisponiveis.map((a, i) => (
          <option key={i} value={a}>{a}</option>
        ))}
      </select>

      <select
        value={cor}
        onChange={e => setCor(e.target.value)}
        className="border p-2"
        disabled={!ano}
      >
        <option value="">Selecione a Cor</option>
        {coresDisponiveis.map((c, i) => (
          <option key={i} value={c}>{c}</option>
        ))}
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white p-2 rounded flex items-center justify-center gap-2 disabled:opacity-50"
        disabled={!marca || !modelo || !ano || !cor}
      >
        <FaSearch />
        Buscar
      </button>
    </div>
  );
}
