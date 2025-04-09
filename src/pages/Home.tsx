import { useEffect, useState } from "react";
import CardPessoa from "../components/Cards";
import Header from "../components/Header";
import Footer from "../components/Footer";
import localDataFic from "../service/data.json";


const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [person, setPerson] = useState<any[]>([]);

  const dataFic = localDataFic;

  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Leva para o topo da página
    const timer = setTimeout(() => {
      setPerson(dataFic);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div role="main" className="w-screen bg-zinc-900 text-white flex justify-center px-4 py-10">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          {/* Formulário */}
          <form className="w-full flex flex-col md:flex-row items-center justify-center gap-4 bg-white p-6 rounded-md shadow-md">
            <input
              type="text"
              placeholder="Nome"
              aria-label="Digite o nome da pessoa desaparecida"
              className="w-full flex-1 px-4 py-2 rounded-md text-white border border-gray-300"
            />
            <input
              type="text"
              placeholder="Cidade"
              aria-label="Digita a cidade onde esta pessoa desapareceu"
              className="w-full flex-1 px-4 py-2 rounded-md text-white border border-gray-300"
            />
            <select 
              className="w-full flex-1 px-4 py-2 rounded-md text-white border border-gray-300 "
              aria-label="Filtrar pessoas por status"
            >
              <option defaultValue="todas">Todas</option>
              <option value="desaparecido">Desaparecido</option>
              <option value="encontrado">Encontrado</option>
            </select>
            <button
              type="submit"
              aria-label="Buscar pessoas"
              className="w-full flex-1 px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
      <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
        {loading ? (
          <div className="text-orange-600 font-semibold text-lg animate-pulse">
            Carregando casos...
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6">Casos Mais Recentes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center">
              {person.map((pessoa, index) => (
                <CardPessoa key={index} {...pessoa} />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default Home;
