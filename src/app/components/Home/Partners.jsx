import React from 'react'
import Image from "next/image";

function Partners() {

  return (
    <div>
      <div className='py-14 px-4 items-center justify-center text-center '>
        <h2 className='text-xl font-bold uppercase pb-4 text-lime-500 '>meet our partners</h2>
        <h2 className='text-5xl font-bold pb-6  ' >We Work For Them</h2>
        <p className='text-xl w-[80%] m-auto '>Explore our diverse portfolio of trusted partnerships, where industry leaders join hands with CloudNexus Technologies for innovative and secure IT solutions.</p>
      </div>

      <div className='flex gap-12 align-center text-center customer-logos slider py-8' >
        <div> <Image src="/assets/brandlogo/Apple.jpg" alt='image' width={180} height={60}  /></div>
        <div> <Image src="/assets/brandlogo/comcast.jpg" alt='image' width={180} height={60}  /></div>
        <div> <Image src="/assets/brandlogo/Intuit.png" alt='image' width={180} height={60}  /></div>
        <div> <Image src="/assets/brandlogo/microsoft.png" alt='image' width={180} height={60}  /></div>
        <div> <Image src="/assets/brandlogo/Nike.png" alt='image' width={180} height={60}  /></div>
        <div> <Image src="/assets/brandlogo/wellsfargo2.png" alt='image' width={180} height={60}  /></div>
        <div> <Image src="/assets/brandlogo/wellsfargo.png" alt='image' width={180} height={60}  /></div>
      </div>

    </div>
  )
}

export default Partners
