import React, { useContext, useEffect } from 'react';
import CartList from '../components/CartList';
import Header from '../components/Header';
import StoreContext from '../context/context';

function Cart() {
  const { totalItens, cartList, setCartList } = useContext(StoreContext);

  return (
    <div className="w-full m-0 flex flex-col items-center">
      <Header />
      { totalItens > 0 
      ? 
      <CartList /> 
      :
      <h1 className="text-xl text-center font-bold">Seu carrinho está vazio</h1>}
    </div>
  )
}

export default Cart;
