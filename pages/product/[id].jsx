import Image from "next/image";
import products from "../../utils/products_catalogue.json" assert {type: "json"}
import { Rating } from "react-simple-star-rating";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import getCartIds from "../../utils/getCartIds";
import getFavIds from "../../utils/getFavIds";
import removeFromFav from "../../utils/removeFromFav";
import removeFromCart from "../../utils/removeFromCart";
import addToFav from "../../utils/addToFav";
import addToCart from "../../utils/addToCart";
import MoreProductsSection from "../../components/MoreProductsSection";

export default function Product({ product }) {
    const { id, name, description, image_url, price, rate } = product;
    const [isInCart, setIsInCart] = useState(false);
    const [isInFavorites, setIsInFavorites] = useState(false);

    useEffect(() => {
        const cartProductsIds = getCartIds() || [];
        setIsInCart(cartProductsIds.includes(product.id));

        const favProductsIds = getFavIds() || [];
        setIsInFavorites(favProductsIds.includes(product.id));
    }, []);

    const handleCartToggle = () => {
        if (getCartIds().includes(id)) {
            removeFromCart(id);
            setIsInCart(false);
        } else {
            addToCart(id);
            setIsInCart(true);
        }
    };

    const handleFavoritesToggle = () => {
        if (getFavIds().includes(id)) {
            removeFromFav(id);
            setIsInFavorites(false);
        } else {
            addToFav(id);
            setIsInFavorites(true);
        }
    };

    return (
        <div className="flex flex-col gap-20">
            <div className="w-full flex">
                <Image src={`/products_images/${image_url}`} alt="" width={400} height={400} className="rounded-xl" />
                <div className="p-4 flex flex-col">
                    <div className="flex-grow flex flex-col">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold mb-2">{name}</h2>
                            {isInFavorites ? (
                                <FaHeart className="text-red-500 text-2xl cursor-pointer" onClick={handleFavoritesToggle} />
                            ) : (
                                <FaHeart className="text-gray-200 text-2xl cursor-pointer" onClick={handleFavoritesToggle} />
                            )}
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-800 text-lg font-bold mb-2">${price}</p>
                            <div className="flex items-center mb-2">
                                <Rating
                                    initialValue={product.rate}
                                    readonly
                                    allowFraction
                                    size={20}
                                    SVGclassName="inline-block fill-current"
                                />
                                <span className="text-gray-600">{rate} ({rate} reviews)</span>
                            </div>
                        </div>
                        <p className="text-gray-600 my-auto">{description}</p>
                    </div>
                    {isInCart ?
                        <button className="ml-auto bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-fit" onClick={handleCartToggle}>
                            Remove From Cart
                        </button>
                        :
                        <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-fit" onClick={handleCartToggle}>
                            Add to Cart
                        </button>
                    }
                </div>
            </div>
            <MoreProductsSection exceptProdId={id} />
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