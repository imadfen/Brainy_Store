import React, { useEffect, useState } from 'react';
import products from "../../utils/products_catalogue.json" assert {type: "json"}
import getCartIds from "../../utils/getCartIds";
import CartProduct from '../../components/CartProduct';
import CheckoutSummaryCart from '../../components/CheckoutSummaryCart';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchItems();
    calculateTotal();
  }, []);

  const fetchItems = () => {
    const cartIds = getCartIds();
    if (cartIds) {
      const cartItems = products.filter(prod => cartIds.includes(prod.id))
      setCart(cartItems.map(item => ({ ...item, quantity: 1 })));
    } else {
      setCart([]);
    }
  }

  const updateQuantity = (id, change) => {
    const updatedItems = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + change > 0 ? item.quantity + change : 1 } : item
    );
    setCart(updatedItems);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return parseFloat((total + item.price * item.quantity).toFixed(2));
    }, 0);
  };

  return (
    <div className="min-h-[70vh]">
      <div className='text-3xl text-center mb-3'>Your Cart</div>
      <div className="w-full flex justify-center">
        {cart.length === 0 ?
          <span>There are no products in the cart</span>
          :
          <div className="w-full flex">
            <div className="w-full">
              {cart.map((p, i) => (
                <CartProduct product={p} key={i} triggerUpdate={fetchItems} updateQuantity={updateQuantity} />
              ))}
            </div>
            <CheckoutSummaryCart totalPrice={calculateTotal()} />
          </div>
        }
      </div>
    </div>
  );
}