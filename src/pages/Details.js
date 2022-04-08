import React, { useEffect, useState } from 'react';
import DetailsCard from '../components/DetailsCard';
import Header from '../components/Header';
import PacmanLoader from "react-spinners/PacmanLoader";

function Details() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="w-full h-full mb-6 flex flex-col items-center">
      <Header />
      {loading 
      ?
      <div className="h-full w-full mt-96 flex justify-center items-center">
        <PacmanLoader loading={loading} size={50} color={"#EF4444"}/>
      </div>
      : 
      <DetailsCard />
      }
    </div>
  )
}

export default Details;
