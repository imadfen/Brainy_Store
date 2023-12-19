import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="w-screen px-20 py-10 bg-gray-300 cursor-default flex-shrink" id="contact">
            <div className="flex">
                <div className="flex flex-col justify-between flex-grow">
                    <h3 className="text-2xl">Brainy Store</h3>
                    <p className="whitespace-break-spaces font-semibold text-gray-600">We help you find your product</p>
                    <div className='flex gap-2'>
                        <Link href="" className="p-4 flex justify-center items-center rounded-full border-2 border-gray-600 border-spacing-1 aspect-square">
                            <Icon icon="ri:facebook-fill" className="text-gray-600" />
                        </Link>
                        <Link href="" className="p-4 flex justify-center items-center rounded-full border-2 border-gray-600 border-spacing-1 aspect-square">
                            <Icon icon="teenyicons:instagram-solid" className="text-gray-600" />
                        </Link>
                        <Link href="" className="p-4 flex justify-center items-center rounded-full border-2 border-gray-600 border-spacing-1 aspect-square">
                            <Icon icon="mdi:twitter" className="text-gray-600" />
                        </Link>
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-extrabold">Information</h4>
                            <p className="text-gray-600">About</p>
                            <p className="text-gray-600">Product</p>
                            <p className="text-gray-600">Blog</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-extrabold">Company</h4>
                            <p className="text-gray-600">Community</p>
                            <p className="text-gray-600">Career</p>
                            <p className="text-gray-600">Out story</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-extrabold">Contact</h4>
                            <p className="text-gray-600">Getting started</p>
                            <p className="text-gray-600">Pricing</p>
                            <p className="text-gray-600">Resources</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="text-gray-600 pt-10">
                <p>2023 all Right Reserved Term of use BrainyStore</p>
            </div>
        </div>
    )
}
