import React, { useContext } from 'react';
import StoreContext from '../context/context';
import ProductCard from './ProductCard';

function ProductList() {
  const { productList } = useContext(StoreContext);

  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-8">
      {productList.map((product) => (
        <ProductCard 
        key={product.id}
        id={product.id}
        productName={product.title}
        productPrice={product.price}
        productImage={product.thumbnail}
        productAlt={product.thumbnail_id}
        freeShipping={product.shipping.free_shipping}
        />
      ))}
    </div>
  )
}

export default ProductList;
