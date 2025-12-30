import React from 'react'
import Image from 'next/image'
import { IoMdArrowRoundForward } from "react-icons/io";

function Aboutus() {
  return (
    <div className='flex py-22 px-8   flex-row'>
      <div className='righ-box w-[80%] me-6 '>
          <Image src="/assets/about_us.jpg" alt='image'   width={800}
          height={1200} />
      </div>
      <div className="left-box w-[80%] ">
        <h2 className='font-bold text-xl pb-5 text-lime-500 ' >About Us</h2>
        <h2 className='text-6xl font-medium pb-5'>We're A Partner For Your Innovations</h2>
        <p className='pb-5'>At CloudRix Technologies, we pride ourselves on delivering cutting-edge IT solutions tailored to your business needs. As a Veteran-owned company, we bring a unique commitment to excellence and discipline in every aspect of our services.</p>
        <p className='pb-6'>We specialize in offering comprehensive vCSO services, providing strategic cybersecurity guidance tailored to diverse industries. From finance to healthcare, manufacturing to technology, we safeguard your digital landscape with expertise honed across various sectors.</p>
        
        <div className='bg-lime-500 hover:bg-indigo-800 text-white py-3 cursor-pointer w-50 flex justify-center gap-2 shadow-xl rounded-md font-bold tracking-[2px] ' >
            <button className='uppercase cursor-pointer  ' >Learn More</button>
            <IoMdArrowRoundForward className='mt-1  ' />
        </div>  
      </div>
      
    </div>
  )
}

export default Aboutus
