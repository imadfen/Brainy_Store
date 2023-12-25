import React, { useEffect, useState } from 'react'
import products from "../../utils/products_catalogue.json" assert {type: "json"}
import ProductCard from '../../components/ProductCard';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storageName = "cart";
    const storedProductsIds = JSON.parse(localStorage.getItem(storageName));
    setCart(storedProductsIds);
  }, [cart]);
  return (
    <div>
      <div className='text-3xl'>Cart Page</div>
      <div className="w-full flex justify-center">
        <div className="flex justify-center items-center w-2/3 grid grid-cols-3 gap-5">
          {cart.map((p, i) => (
            <ProductCard product={products[p-1]} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
