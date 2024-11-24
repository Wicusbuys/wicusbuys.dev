import React from 'react'
import { SparklesCore } from './ui/sparkles'

const Cover = () => {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md m-auto">
        <h1 className="text-7xl font-bold text-center text-white relative z-20 mb-2">
            <span className='animate-fadeIn'>
                Wicus Buys
            </span>
        </h1>
        <h2 className='text-3xl text-center text-white relative z-20'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] to-[#4B23FF] animate-fadeIn">
                &lt; Software Developer /&gt;
            </span>
        </h2>
        <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm animate-fadeIn" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 animate-fadeIn" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm animate-fadeIn" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 animate-fadeIn" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}

export default Cover