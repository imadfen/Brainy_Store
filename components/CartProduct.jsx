import Image from "next/image";
import React, { useEffect, useState } from 'react';
import removeFromCart from "../utils/removeFromCart"
import { Icon } from "@iconify/react";

export default function CartProduct({ product, triggerUpdate, handlePriceUpdate, updateQuantity }) {

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
        // if (handlePriceUpdate) handlePriceUpdate(quantity * product.price);
        if (triggerUpdate) triggerUpdate();
    };

    return (
        <div className="w-full p-2 flex rounded-lg">
            <div className="relative">
                <Image src={`/products_images/${product.image_url}`} alt="" width={150} height={50} priority />
            </div>

            <div className="w-full grid grid-cols-5 place-items-center select-none">
                <h4 className="text-md font-bold text-center">{product.name}</h4>
                <p className="font-black">{product.price}$</p>
                <div className="h-fit px-2 pt-1 rounded-full flex items-center gap-5 bg-[#D9D9D9]">
                    <Icon icon="typcn:minus" width={15} className="mb-1 cursor-pointer" onClick={() => updateQuantity(product.id, -1)} />
                    <p className="font-bold">{product.quantity}</p>
                    <Icon icon="mingcute:plus-fill" width={15} className="mb-1 cursor-pointer" onClick={() => updateQuantity(product.id, 1)} />
                </div>
                <p className="font-black">{(product.quantity * product.price).toFixed(2)}$</p>
                <div className="p-1 bg-[#D9D9D9] rounded-full cursor-pointer" onClick={() => handleRemoveFromCart(product.id)}>
                    <Icon icon="ph:x" width={20} color="white" />
                </div>
            </div>
        </div>
    );
};
