import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

export default function Navbar() {
    const router = useRouter();
    const currentPathname = router.asPath;
    return (
        <div className="w-screen px-20 py-2 bg-white drop-shadow-md flex items-center justify-between z-50 fixed top-0 cursor-default">
            <div className='flex items-end flex-grow'>
                <Link href="/">
                    <Image src="/icons/brainy_store_logo.png" alt="Logo" width={80} height={80} priority />
                </Link>
                <div className='flex ml-20 mb-3'>
                    <NavLink href="/" label="Home" currentPath={currentPathname} />
                    <NavLink href="/#products" label="Products" currentPath={currentPathname} />
                    <NavLink href="/#contact" label="Contacts" currentPath={currentPathname} />
                </div>
            </div>

            <div className="w-1/6 pl-10 flex justify-between items-center">
                <Link href="/wishlist">
                    <Icon icon="solar:heart-linear" width={24} height={24} />
                </Link>
                <Link href="/cart">
                    <Icon icon="bi:cart" width={24} height={24} />
                </Link>
                <Icon icon="vaadin:line-v" width={24} height={24} />
                <Icon icon="heroicons:bars-3-bottom-right-solid" className="cursor-pointer" width={24} height={24} />
            </div>
        </div>
    )
}


const NavLink = ({ href, label, currentPath }) => {
    const isActive = href === currentPath;

    return (
        <>
            {isActive ? (
                <p className="text-custom-white px-3 py-2 text-sm font-bold cursor-default">
                    {label}
                </p>
            ) : (
                <Link
                    href={href}
                    className="text-custom-white px-3 py-2 text-sm font-medium opacity-50 hover:opacity-75"
                >
                    {label}
                </Link>
            )}
        </>
    );
};