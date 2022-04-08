import React from 'react';
import { Link } from 'react-router-dom';

function Final() {
  return (
    <div className="h-screen w-full bg-red-500 text-white flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center sm:text-3xl font-bold">Obrigado por comprar na Junqueira's Shop!</h1>
      <h2 className="mt-3 text-base sm:text-xl text-center font-normal">Seu pedido está sendo processado e já sairá para a entrega!</h2>
      <Link to="/" className="w-4/5 max-w-xs">
        <button className="mt-32 w-full inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-green-700 transition duration-150 ease-in-out">Comprar novamente</button>
      </Link>
    </div>
  )
}

export default Final;
