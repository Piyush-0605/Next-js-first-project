import React from 'react'
import Image from 'next/image'
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";


function page() {
  return (
    <div>
      <div className='bg-blue-950 pt-30 pb-50 bg-[url(/assets/con3.jpg)] bg-cover bg-center bg-no-repeat h-[600]' >
        <div className='text-white items-center text-center pt-10' >
            <h2 className='text-7xl font-bold pb-12'>Cybersecurity Solutions</h2>
            <p className='text-xl pb-12 px-12 text-gray-100' >We redefine cybersecurity with cutting-edge solutions, deploying advanced technologies to detect and neutralize evolving threats in real-time..</p>
            <button className='bg-lime-500 hover:bg-indigo-800 text-white py-3 cursor-pointer w-60  rounded-md uppercase font-bold tracking-[2px]  ' ><Link href='mailto: hr@thecloudrix.com' >Lets Get Started </Link> </button>
        </div>
      </div>
    <div className='bg-gray-200'>
       <div className='py-20 text-center'>
            <p className='text-lime-500 font-bold uppercase pb-8 ' >Cybersecurity</p>
            <h2 className='text-5xl font-semibold'>Cybersecurity Solutions For Your Business</h2>
       </div>
        <div className='bg-gray-200 grid grid-flow-col grid-rows-2 gap-4 place-content-center py-8' >
            <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-indigo-400 '>
                <h2 className='py-4 text-xl text-black font-semibold '>Penetration Test</h2>
                <p className='pb-4'>Our penetration test, powered by advanced third-party software and conducted by certified ethical hackers, is a proactive cybersecurity evaluation. It identifies and addresses vulnerabilities in your IT infrastructure through realistic simulations, ensuring a resilient defense against potential threats.</p>
                <div className='flex gap-2 text-lime-500 font-semibold cursor-pointer hover:text-lime-700'>
                  <Link href='/services' > <span>Find Out More</span> </Link>
                  <IoMdArrowRoundForward className='mt-1'/>
                </div> 
            </div>
             <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-indigo-400 '>
                <h2 className='py-4 text-xl text-black font-semibold '>Firewall Management</h2>
                <p className='pb-4'>Our firewall management, crafted by cybersecurity experts, offers proactive protection by monitoring, updating, and customizing your defense. It swiftly responds to potential threats, ensuring a robust shield for your digital assets.</p>
                <div className='flex gap-2 text-lime-500 font-semibold cursor-pointer hover:text-lime-700'>
                  <Link href='/services' > <span>Find Out More</span> </Link>
                  <IoMdArrowRoundForward className='mt-1'/>
                </div> 
            </div>
             <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-indigo-400 '>
                <h2 className='py-4 text-xl text-black font-semibold '>Password Management</h2>
                <p className='pb-4'>Our password management solution, expertly designed for robust security, streamlines and fortifies your access control. Tailored configurations, proactive monitoring, and rapid response capabilities ensure a resilient defense against unauthorized access, providing peace of mind for your digital assets.</p>
                <div className='flex gap-2 text-lime-500 font-semibold cursor-pointer hover:text-lime-700'>
                  <Link href='/services' > <span>Find Out More</span> </Link>
                  <IoMdArrowRoundForward className='mt-1'/>
                </div> 
            </div>
             <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-indigo-400 '>
                <h2 className='py-4 text-xl text-black font-semibold '>Ransomware Protection</h2>
                <p className='pb-4'>With our dedicated ransomware protection, we empower businesses to navigate the digital landscape securely. Our proactive measures, including vigilant monitoring, timely updates, and responsive strategies, form a robust defense, ensuring businesses are safeguarded from the pervasive threat of ransomware attacks.</p>
                <div className='flex gap-2 text-lime-500 font-semibold cursor-pointer hover:text-lime-700'>
                  <Link href='/services' > <span>Find Out More</span> </Link>
                  <IoMdArrowRoundForward className='mt-1'/>
                </div> 
            </div>
             <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-indigo-400 '>
                <h2 className='py-4 text-xl text-black font-semibold '>Email Protection</h2>
                <p className='pb-4'>With our dedicated email protection, we safeguard businesses from a spectrum of threats. Through advanced filtering, continuous monitoring, and swift response mechanisms, we establish a secure shield around your email infrastructure, ensuring robust protection against diverse email-based threats.</p>
                <div className='flex gap-2 text-lime-500 font-semibold cursor-pointer hover:text-lime-700'>
                  <Link href='/services' > <span>Find Out More</span> </Link>
                  <IoMdArrowRoundForward className='mt-1'/>
                </div> 

            </div>
             <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-indigo-400 '>
                <h2 className='py-4 text-xl text-black font-semibold '>Compliance Monitoring</h2>
                <p className='pb-4'>Our compliance monitoring guarantees your business meets regulatory standards effortlessly. Through real-time assessments and tailored strategies, we ensure a secure and compliant business environment.</p>
                {/* <p className='cursor-pointer font-semibold text-green-500 '>Find Out More</p> */}
                <div className='flex gap-2 text-lime-500 font-semibold cursor-pointer hover:text-lime-700'>
                  <Link href='/services' > <span>Find Out More</span> </Link>
                  <IoMdArrowRoundForward className='mt-1'/>
                </div> 
            </div>
        </div>
    </div>
        {/* <div className='flex justify-around bg-blue-950 mt-20 px-8 py-20 pb-30 relative '>
            <div className='w-[50%]   '>
                <Image src="/assets/emergency_img.jpg" alt='image'  width={600} height={700} className=' absolute bottom-3/12  rounded-md '  />
            </div>
            <div className='w-[35%] snap-center py-20 '>
                <h2 className='text-white text-5xl font-semibold pb-8'>Elevate Performance</h2>
                <p className='text-green-100 pb-8'>Take the first step towards a tech-forward future. Reach out to us today and let's embark on a journey of innovation and excellence together!</p>      
                <div className='bg-lime-500 hover:bg-indigo-800 text-white py-3 cursor-pointer w-60 flex justify-center gap-2 shadow-xl rounded-md font-bold tracking-[2px] ' >
                  <button className='uppercase cursor-pointer  ' ><Link href='mailto: hr@thecloudrix.com' >  Get In Touch</Link> </button>
                  <IoMdArrowRoundForward className='mt-1  ' />
                </div> 
            </div>
        </div> */}


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
