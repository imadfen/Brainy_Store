import Image from "next/image"
import Link from "next/link"

export default function ProductCard({ product }) {
    return (
        <Link href={`/product/${product.id}`} className="w-fit p-2 bg-gray-200 flex flex-col items-center">
            <Image src={`/products_images/${product.image_url}`} alt="" width={200} height={200} />
            <div>
                <h4 className="text-lg font-bold">{product.name}</h4>
                <div className="flex justify-between">
                    <p className="font-black">{product.price}$</p>
                    <p>{product.rate}/5</p>
                </div>
            </div>
        </Link>
    )
}
