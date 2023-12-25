import products from "../utils/products_catalogue.json" assert {type: "json"}
import ProductCard from "../components/ProductCard"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5 scroll-mt-24" id="products">
        {products.map((p, i) => (
          <ProductCard product={p} key={i} />
        ))}
      </div>
    </div>
  )
}
