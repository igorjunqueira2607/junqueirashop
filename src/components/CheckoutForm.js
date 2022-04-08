import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../context/context';
import states from '../services/statesData';
import master from '../images/mastercard.png';
import visa from '../images/visa.png';
import paypal from '../images/paypal.png';
import cash from '../images/dinheiro.png';


function CheckoutForm() {
  const { cartList, setCartList } = useContext(StoreContext);
  const history = useHistory();

  let subTotal = 0;

  const renderSubTotal = () => {
    cartList.forEach((item) => {
      const expense = item.price;
      const quantity = item.quantity;
      subTotal += expense * quantity;
    });
    return subTotal.toFixed(2);
  }

  const finishAll = () => {
    history.push('/final');
    setCartList([]);
  }

  return (
    <form className="py-3 flex flex-col rounded-lg border-t shadow-md shadow-gray-700 bg-white-500 w-11/12 my-6">
      <div className="">
        <h3 className="uppercase font-bold my-3 pl-2 sm:pl-5">Lista de Produtos</h3>
        <div className="">
          {cartList.map((item) => (
            <div className="flex flex-col w-full">
              <div className="flex w-full h-16 pl-2 sm:h-20 sm:pl-8">
                <div className="flex items-end w-5/6">
                  <p className="text-md font-semibold sm:text-lg">{item.quantity}x</p>
                  <img src={item.image} alt="product" className="w-10 h-10 ml-1 sm:w-16 sm:h-16 sm:ml-6"/>
                  <p className="ml-3 text-sm sm:ml-6 sm:text-base font-light">{item.name}</p>
                </div>
                <div className="flex items-end whitespace-nowrap w-1/6 justify-end pr-2">
                  <p className="text-sm sm:text-base font-medium">R$ {item.quantity * item.price}</p>
                </div>          
              </div>
              <hr className="w-full"/>
            </div>
          ))}
        </div>
        <div className="flex justify-end pr-2">
          <h3 className="uppercase font-bold mt-10 sm:mt-16 mb-2 pl-2 sm:pl-5">Total: R$ {renderSubTotal()}</h3>
        </div>
      </div>
      <hr className="w-full"/>
      <div className="mt-3">
        <h3 className="uppercase font-bold mt-3 mb-6 pl-2 sm:pl-5">Informações pessoais</h3>
        <div className=" mt-3 pl-5 flex flex-col w-full md:grid md:grid-cols-3 2xl:grid-cols-4 pr-3">
          <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nome Completo
            <input
              required
              placeholder="Nome completo"
              id="name"
              name="name"
              type="text"
              className="text-sm appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2.5 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white"
            />
          </label>
          <label htmlFor="cpf" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">CPF
            <input
              required
              maxLength="11"
              placeholder="CPF"
              id="cpf"
              name="cpf"
              type="text"
              className="text-sm appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2.5 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white"
            />
          </label>
          <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">E-MAIL
            <input
              required
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              className="text-sm appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2.5 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white"
            />
          </label>
          <label htmlFor="phone" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">TELEFONE
            <input
              required
              maxLength="12"
              placeholder="Telefone"
              id="phone"
              name="phone"
              type="text"
              className="text-sm appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2.5 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white"
            />
          </label>
          <label htmlFor="cep" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">CEP
            <input
              required
              maxLength="8"
              placeholder="CEP"
              id="cep"
              name="cep"
              type="text"
              className="text-sm appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2.5 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white"
            />
          </label>
          <label htmlFor="address" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">ENDEREÇO
            <input
              required
              placeholder="Endereço"
              id="address"
              name="address"
              type="text"
              className="text-sm appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2.5 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white"
            />
          </label>
          <label htmlFor="number" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">NÚMERO
            <input
              required
              placeholder="Número"
              id="number"
              name="number"
              type="text"
              className="text-sm appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2.5 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white"
            />
          </label>
          <label htmlFor="complement" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">COMPLEMENTO
            <input
              required
              placeholder="Complemento"
              id="complement"
              name="complement"
              type="text"
              className="text-sm appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2.5 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white"
            />
          </label>
          <label htmlFor="city" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">CIDADE
            <input
              required
              placeholder="Cidade"
              id="city"
              name="city"
              type="text"
              className="text-sm appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2.5 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white"
            />
          </label>
          <label htmlFor="states" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">ESTADO
            <select id="states" name="states" className="text-sm appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2.5 px-4 mb-3 mt-1 leading-tight focus:outline-none focus:bg-white">
              {states.map((state) => (
                <option key={ state.value } value={ state.value }>{ state.label }</option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <hr className="w-full"/>
      <div className="mt-3">
        <h3 className="uppercase font-bold mt-3 mb-8 pl-2 sm:pl-5">Método de pagamento</h3>
          <div className="pl-5 flex flex-col md:flex-row justify-center md:justify-evenly">
            <label htmlFor="payment_1" className="flex items-center space-x-3">
              <input
                type="radio"
                id="payment_1"
                value="boleto"
                name="payment"
                className=""
              />
              <img src={ cash } alt="cash" />
              Boleto
            </label>
            <label htmlFor="payment_2" className="flex items-center space-x-3 mt-5">
              <input
                type="radio"
                id="payment_2"
                value="Visa"
                name="payment"
              />
              <img src={ visa } alt="visa" />
              Visa
            </label>
            <label htmlFor="payment_3" className="flex items-center space-x-3 mt-5">
              <input
                type="radio"
                id="payment_3"
                value="MasterCard"
                name="payment"
              />
              <img src={ master } alt="visa" />
              MasterCard
            </label>
            <label htmlFor="payment_4" className="flex items-center space-x-3 mt-5">
              <input
                type="radio"
                id="payment_4"
                value="paypal"
                name="payment"
              />
              <img src={ paypal } alt="visa" />
              PayPal
            </label>
          </div>
      </div>
      <div className="flex justify-center mt-16 mb-3">
        <button onClick={finishAll} className="w-4/5 max-w-3xl inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-green-700 transition duration-150 ease-in-out">Finalizar Pedido</button>
      </div>
    </form>
  )
}

export default CheckoutForm;
