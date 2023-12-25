import products from "../utils/products_catalogue.json" assert {type: "json"}
import ProductCard from "../components/ProductCard"
import WelcomeSection from "../components/WelcomeSection"
import { useState } from "react";

export default function Home() {
  const [fliterValue, setFliterValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-10">
      <WelcomeSection handleChangeFilter={setFliterValue} />
      <h1 className="text-4xl mb-5 scroll-mt-24" id="products">Our Products</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5">
        {products.filter(prod => prod.name.toLowerCase().includes(fliterValue)).map((p, i) => (
          <ProductCard product={p} key={i} />
        ))}
      </div>
    </div>
  )
}
