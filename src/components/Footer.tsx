import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo / Nome do projeto */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-orange-600">Projeto Desaparecidos</h2>
          <p className="text-sm text-gray-400">Juntos na busca por respostas.</p>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition text-white">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition text-white">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition text-white">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Créditos */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Desenvolvido por Josué Ocanha Costa. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
