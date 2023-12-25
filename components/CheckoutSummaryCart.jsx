import { Icon } from '@iconify/react'
import React from 'react'

export default function CheckoutSummaryCart({ totalPrice }) {
    return (
        <div className="w-1/4 h-fit">
            <div className="bg-[#EFEFEF]">
                <div>
                    <p className="border-black border-b font-bold p-4">Order Summary</p>
                    <div className="p-4">
                        <div className="flex justify-between">
                            <p className="text-gray-400">Subtotal</p>
                            <p>{totalPrice}$</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-400">Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className="flex items-center gap-1 text-green-500 text-sm my-1">
                            <p>Add a coupon code</p>
                            <Icon icon="formkit:arrowright" width={15} />
                        </div>
                    </div>
                </div>
                <div className="bg-[#D9D9D9] py-2 px-4 flex justify-between">
                    <p>Total</p>
                    <p>{totalPrice}$</p>
                </div>
            </div>
            <button className="bg-[#97C024] text-white py-2 w-full rounded-md mt-4">CHECKOUT</button>
        </div>
    )
}
