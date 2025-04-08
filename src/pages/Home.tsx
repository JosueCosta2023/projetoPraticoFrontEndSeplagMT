import { useEffect, useState } from "react";
import CardPessoa from "../components/Cards";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [person, setPerson] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Leva para o topo da página
    const timer = setTimeout(() => {
      const pessoas = [
        {
          id: 1,
          nome: "Maria Souza",
          cidade: "Cuiabá",
          status: "desaparecido",
          dataUltimoContato: "12/01/2025",
          resumo: "Desapareceu em 12/03/2024 após sair para o trabalho.",
          imagem:
            "https://images.pexels.com/photos/3228898/pexels-photo-3228898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          nome: "João Silva",
          cidade: "Várzea Grande",
          status: "encontrado",
          dataUltimoContato: "12/01/2025",
          resumo: "Foi encontrado após 2 semanas em uma cidade vizinha.",
          imagem:
            "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 3,
          nome: "Ana Paula",
          cidade: "Rondonópolis",
          status: "desaparecido",
          dataUltimoContato: "12/01/2025",
          resumo: "Vista pela última vez no terminal rodoviário.",
          imagem:
            "https://images.pexels.com/photos/8517921/pexels-photo-8517921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 4,
          nome: "Carlos Mendes",
          cidade: "Sinop",
          status: "desaparecido",
          dataUltimoContato: "12/01/2025",
          resumo: "Desapareceu após sair para caminhar no parque.",
          imagem:
            "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 5,
          nome: "Carlos Chavier",
          cidade: "São José do Rio Claro",
          status: "desaparecido",
          dataUltimoContato: "12/01/2025",
          resumo: "Desapareceu após sair para caminhar.",
          imagem:
            "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 6,
          nome: "Maria Souza",
          cidade: "Cuiabá",
          status: "desaparecido",
          dataUltimoContato: "12/01/2025",
          resumo: "Desapareceu em 12/03/2024 após sair para o trabalho.",
          imagem:
            "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 7,
          nome: "João Silva",
          cidade: "Várzea Grande",
          status: "encontrado",
          dataUltimoContato: "12/01/2025",
          resumo: "Foi encontrado após 2 semanas em uma cidade vizinha.",
          imagem:
            "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 8,
          nome: "Ana Paula",
          cidade: "Rondonópolis",
          status: "desaparecido",
          dataUltimoContato: "12/01/2025",
          resumo: "Vista pela última vez no terminal rodoviário.",
          imagem:
            "https://images.pexels.com/photos/301952/pexels-photo-301952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 9,
          nome: "Carlos Mendes",
          cidade: "Sinop",
          status: "desaparecido",
          dataUltimoContato: "12/01/2025",
          resumo: "Desapareceu após sair para caminhar no parque.",
          imagem:
            "https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 10,
          nome: "Carlos Chavier",
          cidade: "São José do Rio Claro",
          status: "desaparecido",
          dataUltimoContato: "12/01/2025",
          resumo: "Desapareceu após sair para caminhar.",
          imagem:
            "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 11,
          nome: "Carlos Chavier",
          cidade: "São José do Rio Claro",
          status: "desaparecido",
          dataUltimoContato: "12/01/2025",
          resumo: "Desapareceu após sair para caminhar.",
          imagem:
            "https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 12,
          nome: "Carlos Chavier",
          cidade: "São José do Rio Claro",
          status: "desaparecido",
          dataUltimoContato: "12/01/2025",
          resumo: "Desapareceu após sair para caminhar.",
          imagem:
            "https://images.pexels.com/photos/673649/pexels-photo-673649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ];

      setPerson(pessoas);
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
