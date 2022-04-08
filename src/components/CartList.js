import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../context/context';
import CartCard from './CartCard';

function CartList() {
  const {
    cartList,
  } = useContext(StoreContext);
  let totalItens = 0; 
  let subTotal = 0;
  
  const numberOfItens = () => {
    cartList.forEach((item) => {
      const quantity = Number(item.quantity);
      totalItens += quantity;
    })
    return totalItens;
  }
  
  const renderSubTotal = () => {
    cartList.forEach((item) => {
      const expense = item.price;
      const quantity = item.quantity;
      subTotal += expense * quantity;
    });
    return subTotal.toFixed(2);
  }
  
  useEffect(() => {
    renderSubTotal();
    numberOfItens();;
  }, [cartList]);

  return (
    <div className="flex flex-col rounded-lg shadow-lg shadow-gray-700 bg-red-500 w-11/12 my-6">
      <h1 className="bg-red-500 rounded-lg text-3xl py-3 pl-5 font-semibold text-white">Carrinho de compras</h1>
      <div className="grid space-y-8 bg-red-500 w-full">
        {cartList.map((product) => (
          <CartCard
          key={product.id}
          id={product.id}
          productName={product.name}
          productPrice={product.price}
          productImage={product.image}
          productQuantity={product.quantity}
          />
        ))}
      </div>
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center rounded-b-lg px-5 py-4 bg-white">
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
          <h1 className="sm:text-start font-semibold text-xl">Total ({numberOfItens()} itens): R$ {renderSubTotal()}</h1>
        </div>
        <div className="sm:space-x-8 flex flex-col items-center sm:flex-row w-full sm:w-1/2 sm:justify-end">
          <Link to="/" className="w-4/5 max-w-xs">
            <button className="mt-5 sm:m-0 w-full inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-red-700 transition duration-150 ease-in-out">Continuar comprando</button>
          </Link>
          <Link to="/checkout" className="w-4/5 max-w-xs">
            <button className="mt-5 sm:m-0 w-full inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-green-700 transition duration-150 ease-in-out">Ir para pagamento</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartList;
