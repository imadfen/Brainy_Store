import React, { useEffect, useState } from 'react'
import products from "../../utils/products_catalogue.json" assert {type: "json"}
import ProductCard from '../../components/ProductCard';

export default function WishListPage() {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storageName = "favorites";
    const storedProductsIds = JSON.parse(localStorage.getItem(storageName));
    setFav(storedProductsIds);
  }, []);

  return (
    <div className="min-h-[70vh]">
      <div className='text-3xl mb-3'>Favorites Page</div>
      <div className="w-full flex justify-center">
        {fav.length === 0 ?
          <span>There are no products in the favorites</span>
          :
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5">
            {fav.map((p, i) => (
              <ProductCard product={products[p - 1]} key={i} />
            ))}
          </div>}
      </div>
    </div>
  );
}