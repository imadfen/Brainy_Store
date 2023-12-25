import React, { useEffect, useState } from 'react'
import products from "../../utils/products_catalogue.json" assert {type: "json"}
import ProductCard from '../../components/ProductCard';

export default function WishListPage() {
  const [fav, setFav] = useState([]);
  useEffect(() => {
    const storageName = "favorites";
    const storedProductsIds = JSON.parse(localStorage.getItem(storageName));
    setFav(storedProductsIds);
  }, [fav]);
  return (
    <div>
      <div className='text-3xl'>Favorites Page</div>
      <div className="w-full flex justify-center">
        <div className="flex justify-center items-center w-2/3 grid grid-cols-3 gap-5">
          {fav.map((p, i) => (
            <ProductCard product={products[p-1]} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
