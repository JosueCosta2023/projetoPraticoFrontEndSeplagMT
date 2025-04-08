// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-zinc-900 text-white p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Página não encontrada.</p>
      <Link
        to="/"
        className="px-6 py-2 text-white bg-orange-600 rounded hover:bg-orange-700 transition"
      >
        Voltar para o início
      </Link>
    </div>
  );
};

export default NotFound;
