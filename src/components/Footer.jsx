"use client"
import React from 'react'
import Link from 'next/link'
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#222222] py-[35px] gap-2 mt-28 items-center justify-center flex flex-col'>
        <div className='flex gap-3'>
            <div className='p-3 bg-[#96BB7C] rounded-[50px] hover:cursor-pointer'>
                <Link target='_blank' href={'https://x.com/tweetofjumuah?s=21&t=JHsvRI8Mb-f58tOiYIG9gw'} ><BsTwitterX className='text-white' /></Link>
            </div>
            <div className='p-3 bg-[#96BB7C] rounded-[50px]'>
                <Link target='_blank' href={''} ><LuInstagram className='text-white' /></Link>
            </div>
            <div className='p-3 bg-[#96BB7C] rounded-[50px] hover:cursor-pointer'>
                <Link target='_blank' href={'https://github.com/Adejare-Muibi'}><FaGithub className='text-white' /></Link>
            </div>
            <div className='p-3 bg-[#96BB7C] rounded-[50px] hover:cursor-pointer'>
                <Link target='_blank' href={'https://www.linkedin.com/in/adejare-muibi-4462191b0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFMwnE9LKRNyF24M27ZdAqQ%3D%3D'} ><FaLinkedin className='text-white' /></Link>
            </div>
        </div>
        <div>
            <p className='text-white text-[20px] max-md:text-[15px]'>2024 &copy; adejare-muibi All Rights Reserved.</p>
        </div>
    </div>
  )
}
export default Footer