import React from "react";
import { Link } from "react-router-dom";

interface CardPessoaProps {
  id: number;
  nome: string;
  cidade: string;
  status: string;
  dataUltimoContato: string;
  resumo: string;
  imagem: string;
}

const CardPessoa: React.FC<CardPessoaProps> = ({
  id,
  nome,
  cidade,
  status,
  dataUltimoContato,
  resumo,
  imagem
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm">
      <img
        src={imagem}
        alt={nome}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="flex justify-between">
        <span
          className={`py-2 px-4 rounded-full text-white text-sm font-semibold ${
            status === "desaparecido" ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {status.toUpperCase()}
        </span>
        <Link
          to={`/detalhes/${id}`}
          aria-label="Botao de Detalhes do desaparecido"
          state={{id, nome, cidade, status, resumo,imagem, dataUltimoContato}}
          className=" inline-block p-1 bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-white hover:text-blue-600 transition"
        >
          Detalhes
        </Link>
      </div>

      <p className="text-gray-600 text-sm mt-3 font-mono">Visto pela ultima vez em: {dataUltimoContato}</p>
      <h2 className="text-xl font-bold mt-2">{nome}</h2>
      <p className="text-gray-600 text-sm mt-1">Última cidade: {cidade}</p>
      <p className="text-gray-700 mt-1 text-sm">{resumo}</p>
    </div>
  );
};

export default CardPessoa;
