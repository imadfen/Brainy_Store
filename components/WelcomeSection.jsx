import { Icon } from '@iconify/react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function WelcomeSection({ handleChangeFilter }) {
    const [filterValue, setFilterValue] = useState("");

    const onFilterChange = (e) => {
        e.preventDefault();
        const value = e.target.value;

        handleChangeFilter(value.toLowerCase());
        setFilterValue(value);
    }

    return (
        <div className="w-full h-[28rem] bg-[#D9D9D9] rounded-2xl flex justify-between p-10 pb-0">
            <div className="flex flex-col pb-10">
                <h1 className="text-6xl font-black">Welcome To<br />Brainy Store</h1>
                <div className='flex items-center border border-black rounded-lg p-2 my-auto'>
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        onChange={onFilterChange}
                        value={filterValue}
                        className='outline-none border-none bg-transparent text-lg flex-grow'
                    />
                    <div className="p-2 bg-[#C1DCDC] rounded-lg">
                        <Icon icon="material-symbols:search" width={25} />
                    </div>
                </div>
            </div>

            <div className="flex mt-auto mr-5 items-center justify-center bg-[#1E1E1E] w-[25rem] h-80 rounded-tl-full rounded-bl-full rounded-tr-full">
                <Image src="/icons/brainyStrock.png" alt="" width={150} height={150} />
            </div>

        </div>
    )
}
