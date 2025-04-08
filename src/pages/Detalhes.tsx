import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import ModalFormulario from "../components/ModalFormulario";

function Detalhes() {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, nome, cidade, status, dataUltimoContato, resumo, imagem } =
    location.state || {};
  const [modalAberto, setModalAberto] = useState(false);

  if (!location.state) {
    return (
      <>
        <Header />
        <div className="max-w-4xl mx-auto p-4">
          <p className="text-red-600 font-semibold text-center">
            Dados não encontrados. Volte à página inicial.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              to="../"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Retornar à página inicial
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-4 flex flex-col gap-6">
        <div className="rounded-xl overflow-hidden shadow-md ">
          <img
            src={imagem}
            alt={nome}
            className="w-full h-80 object-cover object-center"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{nome}</h1>
          <span
            className={`px-4 py-2 rounded-full text-white text-sm font-semibold w-fit ${
              status === "desaparecido" ? "bg-red-600" : "bg-green-600"
            }`}
          >
            {status.toUpperCase()}
          </span>
        </div>
        <p className="text-gray-600 text-lg">
          <strong className="font-semibold">Data de ultimo contato:</strong>{" "}
          {dataUltimoContato}
        </p>
        <p className="text-gray-600 text-lg">
          <strong className="font-semibold">Última cidade vista:</strong>{" "}
          {cidade}
        </p>
        <p className="text-gray-700 text-base leading-relaxed">{resumo}</p>
        {status === "desaparecido" ? (
          <>
            <div className="mt-6 bg-red-100 text-red-800 p-4 rounded-xl text-center text-lg font-semibold">
              🥲 Infelismente ainda não temos noticias sobre o(a) {nome}, <br />
              caso tenha o visto entre em contato.
            </div>
            <div className="mt-6 flex flex-col justify-around sm:flex-row gap-4">
              <Link
                to={`https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20ajudar%20com%20informações%20sobre%20${nome}`}
                className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-white hover:text-green-500 transition"
                target="_blank"
              >
                Entrar em Contato
              </Link>
              {/* <Link
                to={`https://wa.me/5599999999999?text=Olá,%20gostaria%20de%20ajudar%20com%20informações%20sobre%20${nome}`}
                className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-white hover:text-blue-500 transition"
                target="_blank"
              >
                Enviar Mais Informações
              </Link> */}

              <button
                onClick={() => setModalAberto(true)}
                className="bg-yellow-500 text-white px-6 py-2 rounded-xl hover:bg-yellow-600"
              >
                Enviar informações
              </button>

              <ModalFormulario
                isOpen={modalAberto}
                onClose={() => setModalAberto(false)}
                nome={nome}
                cidade={cidade}
              />

              <Link
                to="../"
                className="inline-block px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-white hover:text-orange-600 transition "
              >
                Retornar à página inicial
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-xl text-center text-lg font-semibold">
              🎉 Que alegria! {nome} já foi encontrado(a)!
            </div>
            <Link
              to="../"
              className="inline-block px-6 py-3 bg-orange-600 align-center text-white font-medium rounded-lg hover:bg-white hover:text-orange-600 transition "
            >
              Retornar à página inicial
            </Link>
          </>
        )}
      </main>
    </>
  );
}

export default Detalhes;
