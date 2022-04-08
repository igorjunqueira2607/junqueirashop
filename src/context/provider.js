import React, { useState } from 'react';
import propTypes from 'prop-types';
import StoreContext from './context';

function StoreProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [productList, setProductList] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [cartList, setCartList] = useState([]);
  const [details, setDetails] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalItens, setTotalItens] = useState(0);

  console.log(cartList);
  
  const contextValue = {
    categories,
    setCategories,
    searchInput,
    setSearchInput,
    productList,
    setProductList,
    categorySelected,
    setCategorySelected,
    cartList,
    setCartList,
    details,
    setDetails,
    subTotal,
    setSubTotal,
    loading,
    setLoading,
    totalItens,
    setTotalItens,
  };

  return (
    <StoreContext.Provider value={ contextValue }>
      { children }
    </StoreContext.Provider>
  );
}

export default StoreProvider;

StoreProvider.propTypes = {
  children: propTypes.node.isRequired,
};

