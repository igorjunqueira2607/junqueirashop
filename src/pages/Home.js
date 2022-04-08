import React, { useContext } from 'react';
import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import StoreContext from '../context/context';
import PacmanLoader from "react-spinners/PacmanLoader";

function Home() {
  const { loading } = useContext(StoreContext);
  return (
    <div className="w-full h-full">
      <Header />
      <CategoryList />
      {loading 
      ?
      <div className="h-full w-full mt-96 flex justify-center items-center">
        <PacmanLoader loading={loading} size={50} color={"#EF4444"}/>
      </div>
      :
      <ProductList />
      }
    </div>
  )
}

export default Home;
