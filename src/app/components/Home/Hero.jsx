import Image from 'next/image'
import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from 'next/link'


function Hero() {
  return (
   <div className=' pt-30 pb-30 text-white  text-center bg-[url(/assets/home-bnr.jpg)] bg-cover bg-center bg-no-repeat h-[600] '>
     <h2 className='text-7xl font-bold text-center text-lime-400 py-4 shadow-xl'>Cybersecurity & </h2>
     <h2 className='text-7xl font-bold text-center text-white py-4'>IT Solutions</h2>
    
     <button className='bg-lime-500 hover:bg-indigo-800 text-white py-3 cursor-pointer w-60  rounded-md uppercase font-bold tracking-[2px] mt-8  '> <Link href='/Ourservice' >Our Services </Link> </button> 
      {/* <div className='bg-lime-500 hover:bg-indigo-800 text-white py-3 cursor-pointer flex justify-center  gap-2 shadow-xl rounded-md font-bold tracking-[2px] text-center max-w-full  ' >
          <button className='uppercase cursor-pointer  ' >Our Services</button>
          <IoMdArrowRoundForward className='mt-1 max-w-full' />
      </div>   */}
    </div>
  )
}

export default Hero
