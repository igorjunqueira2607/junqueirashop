import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import Header from '../components/Header';

function Checkout() {
  return (
    <div className="w-full m-0 flex flex-col items-center">
      <Header />
      <CheckoutForm />
    </div>
  )
}

export default Checkout;
