import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaLink } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Portfolio = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center py-[30px]'>
      <div className='flex flex-col gap-12'>
      <div>
        <h1 className='text-[45px] font-bold'>Portfolio</h1>
      </div>
      <div className='flex flex-col gap-7'>
        <div className='flex'>
          <div className='flex flex-col gap-3 bg-[#222222] rounded-[10px] p-2'>
            <div className='flex flex-col gap-2'>
             <Image height={700} width={420} className='max-md:w-[80vw]' src={"/form.png"}></Image>
              <p className='w-[33vw] text-[#96BB7C] max-md:w-[80vw]'><span className='font-bold'>Formserver:</span> <span className='text-[16px]'>This is a form API and Email service for HTML & JavaScript forms. It is the most simplest way to embed custom contact us forms for Developers and regular individuals.</span></p>
            </div>
            <div className='flex items-center gap-[px] justify-between'>
              <Link href={'https://formserver-theta.vercel.app'} className='flex gap-2 items-center text-[#96BB7C]'>
                <FaLink />
                <p>Live Preview</p>
              </Link>
              <Link href={'https://github.com/Adejare-Muibi/formserver'} className='flex gap-2 items-center text-[#96BB7C]'>
                <IoLogoGithub />
                <p>Github</p>
              </Link>
            </div>
          </div>
        </div>
      </div>


      </div>
      
    </div>
  )
}

export default Portfolio