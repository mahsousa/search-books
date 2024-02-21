import React from "react";
import Logo from '../img/logo.png';

const Header = () => {
  return (
    <div className="container-fluid relative isolate overflow-hidden bg-grey py-16 sm:py-24 lg:py-16 flex items-center justify-center">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-center mb-10">
          <img className="h-150 w-300" src={Logo} alt="Logo" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white text-center text-24 sm:text-4xl">Busque pelo seu Próximo Livro</h2>
        <p className="mt-4 text-lg leading-8 text-gray-300 text-center text-greyWhite">
          Descubra um mundo de literatura ao seu alcance. Encontre o livro perfeito para sua próxima aventura.
        </p>
        <div className="mt-6 flex justify-center">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
