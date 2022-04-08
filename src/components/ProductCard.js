import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../context/context';
import free from '../images/free-delivery.png';

function ProductCard(props) {
  const history = useHistory();
  const { setCartList, cartList } = useContext(StoreContext);
  const [disable, setDisable] = useState(false);
  const { productPrice, productName, productImage, productAlt, id, freeShipping } = props;

  const goToDetail = () => {
    history.push(`/details/${id}`)
  }

  const addToCart = () => {
    if (disable === false) {
      const objLocalStorage = {
        id: id,
        name: productName,
        image: productImage,
        price: productPrice,
        quantity: 1
      }
      if (cartList.length === 0) {
        setCartList(objLocalStorage);
      }
      const newCartList = [...cartList, objLocalStorage]
      setCartList(newCartList);
    }
  }

  const sortList = () => {
    const newListSort = cartList.sort(function(a,b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
    setCartList(newListSort);
  }

  useEffect(() => {
    if(cartList.some((item) => item.id === id)) {
      setDisable(true);
    };
    sortList();
  }, [cartList]);

  return (
    <div className="flex justify-center items-end mb-12">
      <div className="relative border-t flex flex-col items-center justify-end rounded-lg shadow-lg shadow-gray-500 bg-white w-4/5 h-full">
      { freeShipping && 
          <span className="bg-green-100 absolute top-0 left-0 flex justify-center items-center h-7 w-fit p-1 text-sm border-r-2 border-b-2 border-green-500 text-green-600 font-semibold text-center"><img src={ free } alt="free" className="w-6 h-6 mr-1"/>Frete grátis</span>
          }
        <img className="rounded-t-lg h-48 w-48" src={productImage} alt={productAlt} />
        <div className="p-6 relative">
          <h5 className="text-gray-900 text-md font-medium mb-2">{productName}</h5>
          <p className="text-gray-700 text-md">
            Preço: R$ {productPrice.toFixed(2)}
          </p>
          <div className="flex flex-col w-full items-center space-y-5 mt-4">
            <button type="button" onClick={ goToDetail } className=" border-2 border-gray-200 w-4/5 inline-block px-2 sm:px-6 py-2.5 bg-white text-red-500 font-medium text-xs leading-tight uppercase rounded hover:bg-red-700  hover:text-white hover:shadow-lg transition duration-150 ease-in-out">Ver Detalhes</button>
            {disable 
            ?
            <button type="button" disable={disable} onClick={ addToCart } className="w-4/5 inline-block px-2 sm:px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out">Produto no carrinho ✔</button>
            :
            <button type="button" onClick={ addToCart } className="w-4/5 inline-block px-2 sm:px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-red-700 transition duration-150 ease-in-out">Adicionar ao Carrinho</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;

