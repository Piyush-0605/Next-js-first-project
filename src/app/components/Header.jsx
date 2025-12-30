import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className=''>
        <div className='flex justify-between absolute gap-10 w-full text-white cursor-pointer px-12 py-4 '>
          <div className='  ' >
            <Link href="/"  >
                <Image src="/assets/logo.png" alt="logo" width={50} height={10} className=' ' /> 
             </Link>
            
          </div>           
            <div className='flex gap-8 text-xl '>
                <Link href="/" className='text-lime-500 hover:text-white  ' >Home</Link>
                <Link href='/about' className='hover:text-lime-500' >About</Link>
                <Link href='/solutions' className='hover:text-lime-500' >IT Solutions</Link>
                <Link href='/cybersecurity' className='hover:text-lime-500' >Cybersecurity</Link>
                <Link href='/contact' className=' bg-lime-500 p-2 rounded-sm hover:bg-indigo-800 ' >Contact Us</Link>
            </div>
        </div>

        {/* <div className="py-8 bg-red-300 flex justify-between px-8 " >
          <div>
              <Image src='/assets/logo.png' alt='logo image'  height={20}  width={80}/>
          </div>
          <div>
                <Link href="/" className='text-lime-500 hover:text-white  ' >Home</Link>
                <Link href='/about' className='hover:text-lime-500' >About</Link>
                <Link href='/solutions' className='hover:text-lime-500' >IT Solutions</Link>
                <Link href='/services' className='hover:text-lime-500' >Cybersecurity</Link>
                <Link href='/contact' className=' bg-lime-500 p-2 rounded-sm hover:bg-indigo-800 ' >Contact Us</Link>
          </div>
        </div> */}
    </header>
  )
}

export default Header
