import React from 'react'
import { FaHome } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrCompliance } from "react-icons/gr";
import { AiFillDatabase } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { IoMdArrowRoundForward } from "react-icons/io";


function Ourservice() {
  return (
     <div className='bg-indigo-950 text-white'>
        <div className='py-12 px-8'>
             <h1 className='text-5xl pb-8  ' >Our services</h1>
            <p className='pe-8 text-[18px]'>Our comprehensive IT solutions encompass a spectrum of services designed to fortify your digital infrastructure. From robust cybersecurity measures to strategic vCSO guidance, we empower businesses across industries to thrive in the digital realm securely.</p>
        </div>
      <div className='flex m-1 flex-wrap justify-center'> 
        <div className='card bg-indigo-900 p-8 m-6 w-80 hover:bg-indigo-800 rounded-xl '  >
             <FaHome className='text-lime-500 text-6xl pb-2' />
            <h2 className='text-xl pb-4 '>Virtual CSO (vCSO)</h2>
            <p className=' text-[16px] pb-4'>Elevate your cybersecurity strategy with our vCSO services, ensuring tailored expertise to safeguard your digital assets and navigate the evolving threat landscape.</p>
            <div className='flex gap-2 text-lime-500 cursor-pointer hover:text-lime-600'>
                  <span>Learn more </span>
                  <IoMdArrowRoundForward className='mt-1'/>
            </div>         
      </div>
      <div className='card bg-indigo-900 p-8 m-6 w-80 hover:bg-indigo-800 rounded-xl '  >
            <CgFileDocument className='text-lime-500 text-6xl pb-2'/>
            <h2 className='text-xl pb-4 '>Cybersecurity</h2>
            <p className=' text-[16px] pb-4' >Fortify your defenses with our comprehensive cybersecurity services, providing robust protection against evolving digital threats.</p>
             <div className='flex gap-2 text-lime-500 cursor-pointer hover:text-lime-600'>
                  <span>Learn more </span>
                  <IoMdArrowRoundForward className='mt-1'/>
            </div> 
      </div>
      <div className='card bg-indigo-900 p-8 m-6 w-80 hover:bg-indigo-800 rounded-xl '  >
            <GrCompliance className='text-lime-500 text-6xl pb-2'/>
            <h2 className='text-xl pb-4 '>Compliance</h2>
            <p className=' text-[16px] pb-4'>Navigate regulatory landscapes seamlessly with our compliance services, ensuring your business meets and exceeds industry standards.</p>
             <div className='flex gap-2 text-lime-500 cursor-pointer hover:text-lime-600'>
                  <span>Learn more </span>
                  <IoMdArrowRoundForward className='mt-1'/>
            </div> 
      </div>
      <div className='card  bg-indigo-900 p-8 m-6 w-80 hover:bg-indigo-800 rounded-xl'  >
            <div > <BiSolidPhoneCall className='text-lime-500 text-6xl pb-2' /></div>  
            <h2 className='text-xl pb-4 '>Voice Over IP</h2>
            <p className=' text-[16px] pb-4'>Experience efficient and reliable communication with our Voice Over IP solutions, tailored to enhance connectivity and productivity for your business.</p>
             <div className='flex gap-2 text-lime-500 cursor-pointer hover:text-lime-600'>
                  <span>Learn more </span>
                  <IoMdArrowRoundForward className='mt-1'/>
            </div> 
      </div>
      <div className='card bg-indigo-900 p-8 m-6 w-80 hover:bg-indigo-800 rounded-xl'  >
            <AiFillDatabase className='text-lime-500 text-6xl pb-2' />
            <h2 className='text-xl pb-4 ' >Managed IT</h2>
            <p className=' text-[16px] pb-4'>Elevate your IT infrastructure with our Managed IT services, ensuring seamless operations, proactive support, and a robust defense against cyber threats.</p>
            <div className='flex gap-2 text-lime-500 cursor-pointer hover:text-lime-600'>
                  <span>Learn more </span>
                  <IoMdArrowRoundForward className='mt-1'/>
            </div> 
      </div>
       <div className='card  bg-indigo-900 p-8 m-6 w-80 hover:bg-indigo-800 rounded-xl'  >
            <RiCustomerServiceLine className='text-lime-500 text-6xl pb-2'/>
            <h2 className='text-xl pb-4 '>IT Support</h2>
            <p className=' text-[16px] pb-4'>Experience responsive and reliable IT support tailored to your business needs, keeping your systems running smoothly and minimizing downtime.</p>
           <div className='flex gap-2 text-lime-500 cursor-pointer hover:text-lime-600'>
                  <span>Learn more </span>
                  <IoMdArrowRoundForward className='mt-1'/>
            </div> 
      </div>
      </div>
      
    </div>
  )
}

export default Ourservice
