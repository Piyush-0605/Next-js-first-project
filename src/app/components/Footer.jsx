import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
     <div >
        <div className='pt-10 pb-8 bg-gray-200' >
            <div className='flex px-8 justify-around' > 
             <div className='text-center '>
                <p className='pb-6'>407 Shree Krishna Enclave </p>
                <p className='pb-6'>Panchderiya Sanwer Road Jakhiya, Indore</p>
                <p className='pb-6'> <Link href='mailto: hr@thecloudrix.com' >hr@thecloudrix.com</Link></p>
               
                <p className='pb-6' ><Link href='tel:+91 7000 844-611'>+91 7000 844-611</Link></p>
                
                {/* <p className='pb-6' >hr@thecloudrix.com</p>
                <p className='pb-6'>+91 7000 844-611</p> */}
                
            </div>
            <div>
                <h3 className="tracking-px mb-4  text-2xl font-bold uppercase text-black">Menu</h3>
                <div className='flex flex-col' >
                    <Link href="/" className=" text-base font-medium text-lime-500 hover:text-gray-700  hover:underline pb-2 " >Home</Link>
                    <Link href="/about" className=" text-base font-medium text-lime-500 hover:text-gray-700  hover:underline pb-2 " >About</Link>
                    <Link href="/solutions" className=" text-base font-medium text-lime-500 hover:text-gray-700  hover:underline pb-2 " >IT Solutions </Link>
                    <Link href="/services" className=" text-base font-medium text-lime-500 hover:text-gray-700  hover:underline pb-2 " >Cybersecurity </Link>
                    <Link href="/contact" className=" text-base font-medium text-lime-500 hover:text-gray-700  hover:underline  pb-2 " >Customer Support</Link>
                </div>
            </div>
            <div className="flex ps-4 gap-6 ">
                <Link href="https://www.facebook.com/" target="_blank" ><Image src="/assets/facebook.png" alt="facebook" width={50} height={80} className="rounded-xl " /></Link>
                <Link href="https://www.linkedin.com/company/cloud-rix/posts/?feedView=all" target="_blank" ><Image src="/assets/linkedin.png" alt="linkdin" width={48} height={78} className="rounded-2xl " /></Link>
            </div>
            </div>
            <div className=' flex justify-center gap-6 '>
                <Link href="Terms"  className=" text-base font-medium text-gray-900 hover:text-gray-700  hover:text-green-600 hover:underline">Terms &amp; Conditions</Link>
                <Link href="Privacy Policy" className=" text-base font-medium text-gray-900 hover:text-gray-700 hover:text-green-600 hover:underline" >Privacy Policy</Link>
            </div>
        </div>
        

         <div className="text-center  py-4" >© {new Date().getFullYear()} CloudRix | All rights reserved.</div>
    </div>
  )
}

export default Footer
