import React from 'react'
import Image from "next/image";
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from 'next/link'

function Meetus() {
  return (
    <div className='bg-indigo-950 flex items-center  justify-between px-8 py-30 relative' >
      <div className='text-white'>
        <h2 className='font-bold text-6xl pb-8'> Have A Cyber Emergency?</h2>
        <p className='text-xl pb-8'>Call our 24/7 Emergency Hotline Now</p> 
        <div className='bg-lime-500 hover:bg-indigo-800 text-white py-2 cursor-pointer w-40 flex justify-center gap-2 shadow-xl rounded-xs ' >
             <button className='uppercase' ><Link href='tel:+91 7000 844-611' >Call Us</Link></button>
            <IoMdArrowRoundForward className='mt-1' />
        </div>  
      </div>
      <div className='w-[50%] ' >
        <Image src="/assets/emergency_img.jpg" alt='image' width={900} height={1400} className='rounded-5xl text-shadow-lg' />
      </div>
    </div>
  )
}

export default Meetus
