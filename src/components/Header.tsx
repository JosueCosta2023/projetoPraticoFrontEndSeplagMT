const Header = () => {
    return ( 
        <header role="banner" className="text-center w-screen bg-orange-500 p-10">
          <h1 className="text-4xl font-bold text-black-600">Desaparecidos MT</h1>
          <p className="text-white mt-2 text-xl font-bold">
            Encontre informações sobre pessoas <strong className="bg-slate-800 px-2 rounded-lg">desaparecidas</strong> ou que foram <strong className="bg-blue-800 px-2 rounded-lg">localizadas</strong>. <br />Sua busca pode ajudar uma família.
          </p>
        </header>
     );
}
 
export default Header;