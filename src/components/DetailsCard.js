import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StoreContext from '../context/context';
import { getDetails } from '../services/api';
import free from '../images/free-delivery.png';
import sale from '../images/discount-label.png';

function DetailsCard() {
  const { details, setDetails, cartList, setCartList } = useContext(StoreContext);
  const [freeShipping, setFreeShipping] = useState(false);
  const location = useLocation();
  const [disable, setDisable] = useState(false);
  const id = location.pathname.split('/')[2];
  
  const getDetailsFromProduct = async () => {
    const response = await getDetails(id);
    setDetails(response);
    if (response.shipping.free_shipping === true) {
      setFreeShipping(true);
    }
  };
  
  useEffect(() => {
    getDetailsFromProduct()
  }, []);

  const addToCart = () => {
    if (disable === false) {
      const objLocalStorage = {
        id: id,
        name: details.title,
        image: details.thumbnail,
        price: details.price,
        quantity: 1
      }
      if (cartList.length === 0) {
        setCartList(objLocalStorage);
      }
      const newCartList = [...cartList, objLocalStorage]
      setCartList(newCartList);
    }
  }

  useEffect(() => {
    if(cartList.some((item) => item.id === id)) {
      setDisable(true);
    }
    console.log(disable);
}, [cartList]);

  return (
    <div className="flex flex-col rounded-lg shadow-lg shadow-gray-700 bg-white w-11/12 my-6 border-t-2">
      <div className="mt-4 px-4">
        <p className="text-sm text-gray-600 mb-2">{details.condition} | {details.sold_quantity} vendidos</p>
        <h3 className="text-xl font-bold">{details.title}</h3>
      </div>
      <div className="flex flex-col space-y-6 sm:flex-row mt-6 w-full items-center sm:items-start">
        <div className="w-1/2 sm:border-r-2">
          <img src={details.thumbnail} alt={details.title} className="w-full max-h-96 max-w-lg"/>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center sm:items-start justify-center">
          {details.original_price &&
          <div className="flex items-center">
            <p className="line-through decoration-red-500 sm:pl-14 decoration-2 text-md sm:text-xl">{`R$ ${details.original_price}`}</p>
            <img src={sale} alt="sale" className="w-14 h-14 ml-6"/>
          </div>
          }
          <h2 className="text-xl font-medium sm:pl-14 mt-2 mb-4 sm:mt-4 sm:mb-32 sm:text-3xl">{`R$ ${details.price}`}</h2>
          <button type="button" onClick={ addToCart } className="place-self-center max-w-lg w-4/5 inline-block px-2 sm:px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-red-700 transition duration-150 ease-in-out">Adicionar ao Carrinho</button>
          { freeShipping && 
          <span className="bg-green-100 flex mt-3 place-self-center justify-center items-center h-8 w-fit p-1 text-sm border-2 border-green-500 text-green-600 font-semibold text-center"><img src={ free } alt="free" className="w-6 h-6 mr-1"/>Frete grátis</span>
          }
        </div>
      </div>
      <hr className="mt-4"/>
      <div className="pt-4 bg-gray-100">
        <h2 className="font-semibold pl-4 mb-3">Descrição do produto:</h2>
        {details.attributes && details.attributes.map((attribute, index) => (
          <div key={index} className="mb-2">
            <h4 className="font-medium px-4">{attribute.name}</h4>
            <h5 className="font-light px-4">{attribute.value_name}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailsCard;