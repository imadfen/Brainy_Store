import Image from "next/image";
import { Rating } from 'react-simple-star-rating';
import React, { useState, useEffect } from 'react';
import { FaCartPlus, FaTrash, FaHeart } from "react-icons/fa";
import Link from "next/link";
import getCartIds from "../utils/getCartIds"
import getFavIds from "../utils/getFavIds"
import addToFav from "../utils/addToFav"
import addToCart from "../utils/addToCart"
import removeFromFav from "../utils/removeFromFav"
import removeFromCart from "../utils/removeFromCart"

export default function ProductCard({ product, triggerUpdate }) {
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    const cartProductsIds = getCartIds() || [];
    setIsInCart(cartProductsIds.includes(product.id));

    const favProductsIds = getFavIds() || [];
    setIsInFavorites(favProductsIds.includes(product.id));
  }, []);

  const handleCartToggle = (event) => {
    event.preventDefault();
    const id = product.id;
    if (getCartIds().includes(id)) {
      removeFromCart(id);
      setIsInCart(false);
    } else {
      addToCart(id);
      setIsInCart(true);
    }

    if (triggerUpdate) triggerUpdate();
  };

  const handleFavoritesToggle = (event) => {
    event.preventDefault();
    const id = product.id;
    if (getFavIds().includes(id)) {
      removeFromFav(id);
      setIsInFavorites(false);
    } else {
      addToFav(id);
      setIsInFavorites(true);
    }

    if (triggerUpdate) triggerUpdate();
  };

  return (
    <Link href={`/product/${product.id}`} className="w-fit h-full p-2 shadow-2xl flex flex-col items-center rounded-lg hover:scale-[101%] duration-150">
      <div className="relative">
        <Image src={`/products_images/${product.image_url}`} alt="" width={300} height={200} priority />
        <div className={`${!isInCart ? 'bg-green-700' : 'bg-red-700'} opacity-90 w-fit h-9 absolute bottom-0 right-0 rounded-t-md rounded-l-md flex items-center p-1 cursor-pointer`} onClick={handleCartToggle}>
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
            <FaHeart className="text-red-500 text-2xl " />
          ) : (
            <FaHeart className="text-white text-2xl" />
          )}
        </div>
      </div>

      <div className="w-full">
        <h4 className="text-lg font-bold text-center m-5">{product.name}</h4>
        <div className="flex justify-between w-full">
          <p className="font-black">{product.price}$</p>
          <div className="flex items-center gap-1">
            <p>{product.rate}</p>
            <Rating
              initialValue={product.rate}
              readonly
              allowFraction
              size={20}
              SVGclassName="inline-block fill-current"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}