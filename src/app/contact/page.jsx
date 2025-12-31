import React from 'react'
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

function page() {
  return (
    <div>
    <div className='bg-indigo-950 pt-30 pb-50 bg-[url(/assets/t4.jpg)] bg-cover bg-center bg-no-repeat h-[600]  ' >
        <div className='text-white items-center text-center ' >
            <h2 className='text-lime-600 font-bold text-2xl tracking-wide pb-4'>GET IN TOUCH</h2>
            <span className='w-60  p-1 border-t-4 px-8 border-lime-600'> </span>
            <h2 className='text-7xl font-bold pb-8'>Let's Talk</h2>
            <p className='text-xl pb-12' >We know you deserve more than just security on the sidelines, and we're here to deliver.</p>
            <div className='flex justify-center gap-5'>
                <button className='bg-lime-500 hover:bg-indigo-800 text-white py-3 cursor-pointer w-40  rounded-md'> <Link href='tel:+91 7000 844-611' >MEET WITH US </Link></button>
                <button className='bg-white hover:bg-indigo-800  py-3 cursor-pointer w-40  rounded-md text-black hover:text-white'><Link href='mailto: hr@thecloudrix.com' >CONTACT US </Link></button>
            </div>
        </div>
    </div>
    <div className="bg-[url(/assets/t3.jpg)] bg-cover bg-center bg-no-repeat h-[600]  " >
        <div className='flex gap-8 justify-between px-8'>
            <div className='text-white opacity-100 w-[50%] '>
            <h2 className=' opacity-100 py-10 ps-8 font-medium text-5xl'>Get in Touch</h2>
            <div className='ps-8 py-10'>
                <div className='flex gap-4 pb-4'>
                    <IoLocation />
                    <p className='text-xl  '>407 Shree Krishna Enclave, Panchderiya Sanwer Road Jakhiya, Indore MP </p>
                </div>
                <div className='flex gap-4 pb-4'>
                    <IoMdMail  />
                    <p className='text-xl  '>hr@thecloudrix.com</p>
                </div>
               <div className='flex gap-4 pb-4'>
                    <FaPhoneAlt />
                    <p className='text-xl ' >+91 7000 844-611</p>
               </div>       
            </div>
            <div className='ps-8'>
                <h2 className='text-3xl py-4' >Follows Us</h2>
                <div className='flex  gap-4'>
                    <Link href="https://www.facebook.com/" target="_blank" ><FaFacebookSquare className='text-4xl cursor-pointer hover:text-green-400'/> </Link>
                    <Link href="https://www.linkedin.com/company/cloud-rix/posts/?feedView=all" target="_blank" ><FaLinkedin className='text-4xl cursor-pointer hover:text-green-400 '/></Link>     
                </div>
            </div>
        </div>

        {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-amber-400 ">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900 text-white ">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-60 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900 text-white">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-60  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-60 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

        </div> */}
        <div className='bg-blue-950 w-[50%] mt-8 ps-8 py-8 rounded-lg '>
            <div className='flex mt-10 gap-8 '>
                <div>
                     <label htmlFor="first-name"   className="block  font-medium text-gray-900 text-white  ">First name</label>
                    <div className="mt-2">
                        <input id="first-name" name="first-name" type="text" autoComplete="given-name" placeholder='Name'
                            className="block w-60 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                 <div>
                     <label htmlFor="last-name" className="block  font-medium text-gray-900 text-white  ">Last name</label>
                    <div className="mt-2">
                        <input id="last-name" name="last-name" type="text" autoComplete="given-name" placeholder='Last Name'
                            className="block w-60 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-4'>
                     <label htmlFor="first-name" className="block  font-medium text-gray-900 text-white  ">Email</label>
                    <div className="mt-2">
                        <input id="email" name="email" type="email" autoComplete="given-name" placeholder='Email'
                            className="block w-80 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-4' >
                     <label htmlFor="first-name" className="block  font-medium text-gray-900 text-white ">Phone</label>
                    <div className="mt-2">
                        <input id="phone" name="phone" type="phone" autoComplete="given-name" placeholder='Phone'
                            className="block w-80 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
             <div>
                <div className='mt-4' >
                    <textarea name="msg" id="msg" size="60"   className='bg-white  w-80 h-20 ' >  </textarea>
                </div>
            </div>

            <div className="mt-4  ">       
                <button type="submit"
                    className="rounded-md bg-lime-500 px-3 py-2  font-semibold text-white shadow-xs hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer w-50 "
                >
                    Submit
                </button>
            </div>
        </div>
        </div> 
    </div>
    <div className='bg-indigo-950 py-30 text-white text-center ' >
        <h2 className='font-bold text-6xl pb-8'>Have An Emergency?</h2>
        <p className='text-xl pb-8'>Give Us A Call</p>
        <button className='bg-lime-500 hover:bg-indigo-800 text-white py-3 cursor-pointer w-50  rounded-md  '><Link  href='tel:+91 7000 844-611' >(512) 402-1380 </Link></button>
      </div>
    </div>
  )
}

export default page
