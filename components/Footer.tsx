import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-8 md:my-28 px-8">
        <div className='grid gap-16 md:grid-cols-2 md:gap-32'>
            <div className="flex flex-col">
                <h3 className='flex text-secondary-light text-lg'>
                    <div className="h-2 w-2 bg-gray-300 rounded-full my-auto mr-4"></div>
                    Currently exploring new opportunities.
                </h3>
                <h1 className='text-white text-3xl'>
                    Looking for developer role.
                </h1>
            </div>
            <div className="mx-auto">
                <Image
                    src="/images/Portrait.png"
                    alt="GreatSoft Logo"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover h-auto w-full"
                />
            </div>
        </div>
    </div>
  )
}

export default Footer