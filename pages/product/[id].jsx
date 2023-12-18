import Image from "next/image";
import products from "../../utils/products_catalogue.json" assert {type: "json"}

export default function Product({ product }) {
    return (
        <div>
            <Image src={`/products_images/${product.image_url}`} alt="" width={300} height={300} />
            <p>name: {product.name}</p>
            <p>description: {product.description}</p>
            <p>price: {product.price}$</p>
            <p>rate: {product.rate}/5</p>
        </div>
    )
}

// ================== get the product based on the id passed from url ================
export async function getServerSideProps({ params }) {
    const productId = params.id;
    const intRegex = /^\d+$/;

    const product = products.find((p) => intRegex.test(productId) && intRegex.test(p.id) && parseInt(productId) === parseInt(p.id));

    if (!product) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
        },
    };
}