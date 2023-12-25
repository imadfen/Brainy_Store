import React, { useEffect, useState } from "react";
import products from "../utils/products_catalogue.json" assert {type: "json"}
import ProductCard from "../components/ProductCard"

export default function MoreProductsSection({ exceptProdId }) {
    const [randomItems, setRandomItems] = useState([]);

    useEffect(() => {
        const filteredProducts = products.filter(prod => prod.id !== exceptProdId);

        setRandomItems(getRandomItems(filteredProducts, 3));
    }, []);

    const getRandomItems = (arr, num) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    return (
        <div className="w-full">
            <h1 className="text-3xl text-center font-bold">More Products</h1>
            <div className="grid grid-cols-3 place-items-center gap-5 my-5">
                {randomItems.map((prod, i) => {
                    if (prod.id !== exceptProdId) {
                        return <ProductCard key={i} product={prod} />
                    }
                })}
            </div>
        </div>
    )
}
