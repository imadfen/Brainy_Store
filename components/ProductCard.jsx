import Image from "next/image";
import { Rating } from 'react-simple-star-rating';
import React, { useState, useEffect } from 'react';
import { FaCartPlus, FaTrash, FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  const [rating, setRating] = useState(0);
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    const storageName = "cart";
    const storedProductsIds = JSON.parse(localStorage.getItem(storageName)) || [];
    setIsInCart(storedProductsIds.includes(product.id));

    const favoritesStorageName = "favorites";
    const storedFavoritesIds = JSON.parse(localStorage.getItem(favoritesStorageName)) || [];
    setIsInFavorites(storedFavoritesIds.includes(product.id));
  }, [product.id]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleCartToggle = (event) => {
    event.preventDefault();

    const storageName = "cart";
    const storedProductsIds = JSON.parse(localStorage.getItem(storageName)) || [];

    if (isInCart) {
      const newList = storedProductsIds.filter((productId) => productId !== product.id);
      localStorage.setItem(storageName, JSON.stringify(newList));
      setIsInCart(false);
      alert(`Product: "${product.name}" removed from cart`);
    } else {
      const newList = [...storedProductsIds, product.id];
      localStorage.setItem(storageName, JSON.stringify(newList));
      setIsInCart(true);
      alert(`Product: "${product.name}" added to cart`);
    }
  };

  const handleFavoritesToggle = (event) => {
    event.preventDefault();

    const favoritesStorageName = "favorites";
    const storedFavoritesIds = JSON.parse(localStorage.getItem(favoritesStorageName)) || [];

    if (isInFavorites) {
      const newFavoritesList = storedFavoritesIds.filter((productId) => productId !== product.id);
      localStorage.setItem(favoritesStorageName, JSON.stringify(newFavoritesList));
      setIsInFavorites(false);
      alert(`Product: "${product.name}" removed from favorites`);
    } else {
      const newFavoritesList = [...storedFavoritesIds, product.id];
      localStorage.setItem(favoritesStorageName, JSON.stringify(newFavoritesList));
      setIsInFavorites(true);
      alert(`Product: "${product.name}" added to favorites`);
    }
  };

  return (
    <Link href={`/product/${product.id}`} className="w-fit p-2 shadow-lg flex flex-col items-center rounded-lg">
      <div className="relative">
        <Image src={`/products_images/${product.image_url}`} alt="" width={300} height={200} />
        <div className={`${!isInCart ? 'bg-green-700' : 'bg-red-700'} opacity-90 w-32 h-9 absolute bottom-0 right-0 rounded-t-md rounded-l-md flex items-center p-1 cursor-pointer`} onClick={handleCartToggle}>
          {isInCart ? (
            <>
              <FaTrash className="text-white text-xl" />
              <p className="text-white text-[13px] text-center">Remove from Cart</p>
            </>
          ) : (
            <>
              <FaCartPlus className="text-white text-xl" />
              <p className="text-white text-[13px] pl-2">Add to Cart</p>
            </>
          )}
        </div>

        <div className="absolute p-[6px] top-0 right-0 m-2 cursor-pointer bg-slate-500 rounded-full" onClick={handleFavoritesToggle}>
          {isInFavorites ? (
            <>
              <FaHeart className="text-red-500 text-2xl " />
            </>
          ) : (
            <>
              <FaHeart className="text-white text-2xl" />
            </>
          )}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-center m-5">{product.name}</h4>
        <p className="text-gray-500 text-center text-sm font-medium mb-4">Description of the product is Lorem Ipsum</p>
        <div className="flex justify-between">
          <p className="font-black">{product.price}$</p>
          <Rating
            onClick={handleRating}
            SVGclassName="inline-block w-6 h-6 fill-current"
          />
        </div>
      </div>
    </Link>
  );
}
