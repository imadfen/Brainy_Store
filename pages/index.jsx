import products from "../utils/products_catalogue.json" assert {type: "json"}
import ProductCard from "../components/ProductCard"

export default function Home() {
  return (
    <div className="w-fit grid grid-cols-3 gap-5">
      {products.map((p, i) => (
        <ProductCard product={p} key={i} />
      ))}
    </div>
  )
}
