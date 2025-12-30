import React from 'react'
import Image from 'next/image'
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";

function page() {
  return (
    <div>
      <div className='bg-indigo-950 pt-30 pb-50 bg-[url(/assets/About-BG.png)] bg-cover bg-center bg-no-repeat h-[600]  ' >
        <div className='text-white items-center text-center ' >
            <h2 className='text-lime-600 font-bold text-3xl tracking-wide pb-4'>Join Us</h2>
            <span className='w-60  p-1 border-t-4 px-4 border-lime-600'> </span>
            <h2 className='text-8xl font-bold pb-8 '>IT Solutions For Your Business</h2>
            <p className='text-2xl pb-12' >We are your trusted partners of innovation, ensuring a secure and seamless digital journey for your business.</p>
            <div className='flex justify-center gap-5'>
                <button className='bg-lime-500 hover:bg-indigo-800 text-white py-3 cursor-pointer w-40  rounded-md'><Link href='tel:+91 7000 844-611' >MEET WITH US</Link> </button>
                <button className='bg-white hover:bg-indigo-800  py-3 cursor-pointer w-40  rounded-md text-black hover:text-white'> <Link href='mailto: hr@thecloudrix.com' >GET PRICING </Link> </button>
            </div>
        </div>
       </div>

       <div className='bg-gray-200'>
           <div className='py-20 text-center'>
                <p className='text-lime-500 font-bold uppercase pb-8 text-xl' >IT SOLUTIONS</p>
                <h2 className='text-5xl font-semibold'>Intelligent IT Solutions</h2>
           </div>
            <div className='bg-gray-200 grid grid-flow-col grid-rows-2 gap-4 place-content-center py-12' >
                <div className='bg-gray-50 w-90 p-8'>
                    <h2 className='py-4 text-xl text-black font-semibold '>On Premise Support</h2>
                    <p className='pb-4'>Our penetration test, powered by advanced third-party software and conducted by certified ethical hackers, is a proactive cybersecurity evaluation. It identifies and addresses vulnerabilities in your IT infrastructure through realistic simulations, ensuring a resilient defense against potential threats.</p>
                    <div className='flex gap-2 ' >
                        <p className='cursor-pointer font-semibold text-lime-400 '>Find Out More   </p>
                        <IoMdArrowRoundForward className='mt-1 text-lime-400 ' />
                    </div>
                </div>
                 <div className='bg-gray-50 w-90 p-8'>
                    <h2 className='py-4 text-xl text-black font-semibold '>Backup Disaster Recovery</h2>
                    <p className='pb-4'>Experience a unified solution for Backup, Disaster Recovery, and Business Continuity all in one robust package. Whether it’s a minor mishap like accidental data deletion or a more significant event like a server crash, our comprehensive approach ensures quick and effective recovery, safeguarding your critical data and maintaining business continuity.</p>
                    <div className='flex gap-2 ' >
                        <p className='cursor-pointer font-semibold text-lime-400 '>Find Out More   </p>
                        <IoMdArrowRoundForward className='mt-1 text-lime-400 ' />
                    </div>
                </div>
                 <div className='bg-gray-50 w-90 p-8'>
                    <h2 className='py-4 text-xl text-black font-semibold '>Voice Over IP</h2>
                    <p className='pb-4'>Embrace the cutting-edge technology of Voice Over IP, seamlessly integrated into your network and essential applications. Unlock a spectrum of features, including dial tone, voicemail, voicemail to email, fax to email, and even advanced solutions like call centers. Elevate your communication experience with the latest in telephone technology..</p>
                    <div className='flex gap-2 ' >
                        <p className='cursor-pointer font-semibold text-lime-400 '>Find Out More   </p>
                        <IoMdArrowRoundForward className='mt-1 text-lime-400 ' />
                    </div>
                </div>
                 <div className='bg-gray-50 w-90 p-8'>
                    <h2 className='py-4 text-xl text-black font-semibold '>Server Management</h2>
                    <p className='pb-4'>Enhance your server performance by handling all your patching needs, covering everything from application, database, and web servers to file, print, and exchange servers. Ensure your servers run optimally with our top-notch management services.</p>
                   <div className='flex gap-2 ' >
                        <p className='cursor-pointer font-semibold text-lime-400 '>Find Out More   </p>
                        <IoMdArrowRoundForward className='mt-1 text-lime-400 ' />
                    </div>
                </div>
                 <div className='bg-gray-50 w-90 p-8'>
                    <h2 className='py-4 text-xl text-black font-semibold '>IT Help Desk</h2>
                    <p className='pb-4'>Discover flexible IT Help Desk solutions tailored to your needs, available 8 hours a day, 5 days a week, or around-the-clock with 24/7 support. Our certified staff is ready to provide prompt and professional remote assistance whenever you need it.</p>
                   <div className='flex gap-2 ' >
                        <p className='cursor-pointer font-semibold text-lime-400 '>Find Out More   </p>
                        <IoMdArrowRoundForward className='mt-1 text-lime-400 ' />
                    </div>
                </div>
                 
            </div>
        </div>
        <div className='flex justify-around bg-blue-950 py-20 px-8 relative pb-30 mt-20 '>
            <div className='w-[50%]'>
                <Image src="/assets/emergency_img.jpg" alt='image' width={600} height={700} className=' absolute bottom-3/12  rounded-md ' />
            </div>
            <div className='w-[35%] snap-center '>
                <h2 className='text-white text-5xl font-semibold pb-8'>Elevate Performance</h2>
                <p className='text-green-100 pb-8'>Take the first step towards a tech-forward future. Reach out to us today and let's embark on a journey of innovation and excellence together!</p>
                <button className='bg-lime-500 hover:bg-indigo-800 text-white py-3 cursor-pointer w-60  rounded-md uppercase font-bold tracking-[2px]  '><Link  href='mailto: hr@thecloudrix.com'>Get In Touch</Link> </button>
            </div>
        </div>
    </div>
  )
}

export default page
