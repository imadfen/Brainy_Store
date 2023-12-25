import React, { useEffect, useState } from 'react'
import products from "../../utils/products_catalogue.json" assert {type: "json"}
import ProductCard from '../../components/ProductCard';
import getFavIds from "../../utils/getFavIds"

export default function WishListPage() {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    setFav(getFavIds() || []);
  }

  return (
    <div className="min-h-[70vh]">
      <div className='text-3xl text-center mb-3'>Your Wishlist</div>
      <div className="w-full flex justify-center">
        {fav.length === 0 ?
          <span>There are no products in the favorites</span>
          :
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5">
            {fav.map((p, i) => (
              <ProductCard product={products[p - 1]} key={i} triggerUpdate={fetchItems} />
            ))}
          </div>}
      </div>
    </div>
  );
}