import React from 'react'
import Image from 'next/image'
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { RxCodesandboxLogo } from "react-icons/rx";
import { RxCode } from "react-icons/rx";
import { RxStack } from "react-icons/rx";
import { RxDashboard } from "react-icons/rx";
import { CgDatabase } from "react-icons/cg";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Link from "next/link";

function page() {
  return (
      <div>
          <div className='bg-blue-950 pt-30 pb-50 bg-[url(/assets/con2.jpg)] bg-cover bg-center bg-no-repeat h-[600] ' >
            <div className='text-white items-center text-center ' >
                <h2 className='text-7xl font-bold pb-12 mt-8 '>About Us</h2>
                <p className='text-xl pb-12 px-25 text-gray-100' >At CloudRix, we believe in the power of collaboration and the strength of our team. Our diverse and talented workforce is the backbone of our organization, bringing together expertise from various disciplines to create unique solutions for our clients' needs</p>
                <button className='bg-lime-500 hover:bg-indigo-800 text-white py-3 cursor-pointer w-60  rounded-md uppercase font-bold tracking-[2px]  ' >Lets Get Started</button>
            </div>
          </div>

            <div className='flex py-22 px-8  gap-8 flex-row'>
                <div className='righ-box w-[48%] me-6 '>
                    <Image src="/assets/about_us.jpg" alt='image'   width={800} height={1200} />
                </div>
                <div className="left-box w-[48%]  ">
                    {/* <h2 className='font-bold text-xl pb-5 text-lime-500 ' >About Us</h2>
                    <h2 className='text-6xl font-medium pb-5'>We're A Partner For Your Innovations</h2>
                    <p className='pb-5'>At CloudRix Technologies, we pride ourselves on delivering cutting-edge IT solutions tailored to your business needs. As a Veteran-owned company, we bring a unique commitment to excellence and discipline in every aspect of our services.</p>
                    <p className='pb-6'>We specialize in offering comprehensive vCSO services, providing strategic cybersecurity guidance tailored to diverse industries. From finance to healthcare, manufacturing to technology, we safeguard your digital landscape with expertise honed across various sectors.</p> */}

                    <div className='pb-4' >
                        <h2 className='font-semibold pb-2 text-lime-500' >Our Mission</h2>
                        <p>Our mission is to deliver high-quality, reliable, and user-friendly solutions that create real value for our users. We strive to innovate continuously, maintain transparency, and provide excellent service that helps people grow and succeed.</p>
                    </div>
                    <div className='pb-4' >
                        <h2 className='font-semibold pb-2 text-lime-500 ' >Our Goals</h2>
                        <p>Our goals are to continuously improve our services, meet customer needs with excellence, and build long-term trust. We aim to grow through innovation, teamwork, and a strong commitment to quality.</p>
                    </div>
                    <div className='pb-4' >
                        <h2 className='font-semibold pb-2 text-lime-500' >Why Us?</h2>
                        <p>We focus on quality, reliability, and customer satisfaction. Our team delivers simple, effective solutions with timely support and a commitment to excellence you can trust.</p>
                    </div>                  
                </div>    
            </div>

        <div className='bg-gray-200'>
           <div className='py-20 text-center'>
                <p className='text-lime-500 font-bold uppercase pb-8 text-4xl' >Everything You Need for Enterprise SaaS</p>
                <h2 className='text-xl  w-[60%] text-center m-auto '>Built for American enterprises, Cloudrix delivers production-ready infrastructure for multi-tenant applications</h2>
           </div>
            <div className='bg-gray-200 flex flex-wrap gap-8 place-content-center py-8 px-8 ' >
                <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-lime-400 '>
                     <RxStack className='text-lime-500 text-5xl pb-2'/>
                    <h2 className='py-4 text-xl text-black font-semibold '>Unified Identity & SSO</h2>
                    <p className='pb-4'>Enterprise-grade authentication with SAML, OAuth 2.0, and OIDC. Seamless SSO integration with Active Directory, Okta, and Auth0.</p>
                </div>
                 <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-lime-400 '>
                     <RxDashboard className='text-lime-500 text-6xl pb-2' />
                    <h2 className='py-4 text-xl text-black font-semibold '>Multi-Tenant Isolation</h2>
                    <p className='pb-4'>Complete data isolation with tenant-aware routing, database sharding, and resource quotas. Built-in compliance with SOC 2 and GDPR.</p>                
                </div>
                 <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-lime-400 '>
                    <CgDatabase  className='text-lime-500 text-6xl pb-2' />
                    <h2 className='py-4 text-xl text-black font-semibold '>Billing & Subscriptions</h2>
                    <p className='pb-4'>Flexible pricing models with usage-based billing, subscription management, and revenue analytics. Native Stripe integration included.</p>
                </div>
                 <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-lime-400  '>
                    <RxCodesandboxLogo className='text-lime-500 text-6xl pb-2' />
                    <h2 className='py-4 text-xl text-black font-semibold '>API Gateway</h2>
                    <p className='pb-4'>High-performance API management with rate limiting, caching, authentication, and real-time analytics. GraphQL and REST support.</p>                    
                </div>
                 <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-lime-400 '>
                    <RxCode className='text-lime-500 text-6xl pb-2'/>
                    <h2 className='py-4 text-xl text-black font-semibold '>Developer Console</h2>
                    <p className='pb-4'>werful admin portal with API key management, webhooks, logs, and real-time monitoring. Built for developer productivity.</p>                 
                </div>
                 <div className='bg-gray-50 w-90 p-8 rounded-2xl cursor-pointer text-shadow-md  hover:border-2 border-lime-400  '>
                    <SiHomeassistantcommunitystore  className='text-lime-500 text-6xl pb-2' />
                    <h2 className='py-4 text-xl text-black font-semibold'>Marketplace Ecosystem</h2>
                    <p className='pb-4'>Launch your own app marketplace with OAuth flows, partner integrations, and revenue sharing. White-label ready.</p>
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
