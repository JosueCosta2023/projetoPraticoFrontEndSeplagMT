import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-screen bg-zinc-900 text-white flex justify-center px-4 py-10">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          {/* Header */}

          {/* Formulário */}
          <form className="w-full flex flex-col md:flex-row items-center justify-center gap-4 bg-white p-6 rounded-md shadow-md">
            <input
              type="text"
              placeholder="Nome"
              className="flex-1 px-4 py-2 rounded-md text-white border border-gray-300"
            />
            <input
              type="text"
              placeholder="Cidade"
              className="flex-1 px-4 py-2 rounded-md text-white border border-gray-300"
            />
            <select className="flex-1 px-4 py-2 rounded-md text-white border border-gray-300 ">
              <option defaultValue="todas">
                Todas
              </option>
              <option value="desaparecido">Desaparecido</option>
              <option value="encontrado">Encontrado</option>
            </select>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
