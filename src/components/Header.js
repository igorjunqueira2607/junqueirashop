import React, { useContext, useEffect } from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import StoreContext from '../context/context';
import { getItensFromQuery } from '../services/api';

function Header() {
  const { setSearchInput, searchInput, setProductList, cartList,
    setTotalItens } = useContext(StoreContext);
  let totalItens = 0;

  const handleChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleClick = async () => {
    const response = await getItensFromQuery(searchInput);
    setProductList(response.results)
  }

  const numberOfItens = () => {
    cartList.forEach((item) => {
      const quantity = Number(item.quantity);
      totalItens += quantity;
    })
    setTotalItens(totalItens);
    return totalItens;
  }

  return (
    <div className="flex bg-red-500 h-14 justify-between items-center px-3 shadow-sm shadow-gray-800 w-full">
      <Link to="/">
        <h1 className="text-white text-lg font-bold">Junqueira's Shop</h1>
      </Link>
      <div className="flex w-1/2 space-x-3 items-center">
        <input 
          className="h-7 w-4/5 rounded-lg p-2 text-sm"
          type="text"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
          onChange={ handleChange } 
        />
        <FaSearch onClick={handleClick} className="cursor-pointer text-2xl"/>
      </div>
      <div className="h-full flex items-center">
        <Link to="/cart" className="flex space-x-1">
          <FaShoppingCart className="text-2xl"/>
          <div className="bg-white text-red-500 font-bold text-center rounded-full px-2">{numberOfItens()}</div>
        </Link>
      </div>
    </div>
  )
}

export default Header;