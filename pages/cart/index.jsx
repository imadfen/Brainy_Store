import React, { useEffect, useState } from 'react'
import products from "../../utils/products_catalogue.json" assert {type: "json"}
import ProductCard from '../../components/ProductCard';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storageName = "cart";
    const storedProductsIds = JSON.parse(localStorage.getItem(storageName));
    setCart(storedProductsIds);
  }, []);


  return (
    <div className="min-h-[70vh]">
      <div className='text-3xl mb-3'>Cart Page</div>
      <div className="w-full flex justify-center">
        {cart.length === 0 ?
          <span>There are no products in the favorites</span>
          :
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5">
            {cart.map((p, i) => (
              <ProductCard product={products[p - 1]} key={i} />
            ))}
          </div>
        }
      </div>
    </div>
  );
}