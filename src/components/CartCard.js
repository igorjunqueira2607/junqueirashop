import React, { useContext } from 'react';
import StoreContext from '../context/context';

function CartCard(props) {
  const { productPrice, productName, productImage, productAlt, productQuantity, id } = props;
  const { cartList, setCartList } = useContext(StoreContext);
  
  const deleteItem = ({ target }) => {
    const newList = cartList.filter((item) => {
      return item.id !== target.id
    })
    setCartList(newList);
  }

  
  const increaseQuantity = ({ target }) => {
    const selectedItem = cartList.filter((item) => {
      return item.id === target.id
    });
    const notSelectedItem = cartList.filter((item) => {
      return item.id !== id
    });
    const newItem = selectedItem.map((product) => ({...product, quantity: product.quantity + 1}));
    const newList = [...notSelectedItem, ...newItem];
    const newListSort = newList.sort(function(a,b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
    setCartList(newListSort);
  }
  
  const decreaseQuantity = ({ target }) => {
    if( productQuantity > 1) {
      const selectedItem = cartList.filter((item) => {
        return item.id === target.id
      });
      const notSelectedItem = cartList.filter((item) => {
        return item.id !== id
      });
      console.log(selectedItem);
      const newItem = selectedItem.map((product) => ({...product, quantity: product.quantity - 1}));
      const newList = [...notSelectedItem, ...newItem];
      const newListSort = newList.sort(function(a,b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
      setCartList(newListSort);
    }
  }

  return (
    <div className="flex justify-center items-end w-full">
      <div className="px-6 flex flex-col items-center sm:flex-row rounded-lg shadow-md shadow-gray-500 bg-white w-11/12">
        <div className="flex flex-col items-center sm:items-start sm:w-1/2">
          <img className="rounded-t-lg h-48 w-48" src={productImage} alt={productAlt} />
          <div className="mt-6">
            <h5 className="text-gray-900 text-md font-medium mb-2">{productName}</h5>
            <p className="text-gray-700 text-md mb-4">
              Preço: R$ {productPrice.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col sm:flex-row sm:justify-end items-center">
          <div className="flex space-x-8 mb-4 sm:m-0 border-2 border-gray-300 bg-gray-100 py-1 px-2 rounded">
            <button type="button" id={id} onClick={decreaseQuantity} className="font-bold">-</button>
            <p className="font-bold">{productQuantity}</p>
            <button type="button" id={id} onClick={increaseQuantity} className="font-bold">+</button>
          </div>
          <div className="mb-6 sm:ml-10 sm:m-0 w-full sm:w-fit flex flex-col items-center justify-center">
            <button type="button" id={id} onClick={deleteItem} className="w-4/5 sm:w-fit max-w-md inline-block px-2 sm:px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-red-700 transition duration-150 ease-in-out">Remover item</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard;
