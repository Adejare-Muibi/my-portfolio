"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaLink } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Portfolio = () => {
  const portfolio =[
    {
      id: 1,
      picture: "/form.png",
      para: "ygg",
      head: "ghgh",
      githubLink: "/gitlink",
      previewLink: "/gitlink",
      gitText:"github",
      prevText:"live preview"
    },
    {
      id: 2,
      picture: "/form.png",
      para: "ygg",
      head: "ghgh",
      githubLink: "/gitlink",
      previewLink: "/gitlink",
      gitText:"github",
      prevText:"live preview"
    },
  ]
  return (
    <div id='portfolio' className='text-white flex flex-col justify-center items-center py-[30px]'>
      <div className='flex flex-col gap-12'>
        <div>
          <h1 className='text-[45px] font-bold'>Portfolio</h1>
        </div>
        <div className='flex flex-col gap-7'>
          <div className='flex'>
            <div className='flex flex-col gap-3 bg-[#222222] rounded-[10px] p-2'>
              <div className='flex flex-col gap-2'>
                <Image height={700} width={420} alt='port' className='max-md:w-[80vw]' src={"/form.png"}></Image>
                <p className='w-[33vw] text-[#96BB7C] max-md:w-[80vw]'><span className='font-bold'>Formserver:</span> <span className='text-[16px]'>This is a form API and Email service for HTML & JavaScript forms. It is the most simplest way to embed custom contact us forms for Developers and regular individuals.</span></p>
              </div>
              <div className='flex items-center gap-[px] justify-between'>
                <Link target='_blank' href={'https://formserver-theta.vercel.app'} className='flex gap-2 items-center text-[#96BB7C]'>
                  <FaLink />
                  <p>Live Preview</p>
                </Link>
                <Link target='_blank' href={'https://github.com/Adejare-Muibi/formserver'} className='flex gap-2 items-center text-[#96BB7C]'>
                  <IoLogoGithub />
                  <p>Github</p>
                </Link>
                {/* {portfolio.map((p)=>(
                  <div>
                    <h1>{p.head}</h1>
                    <h1>{p.para}</h1>
                    <Image src={p.picture} alt="" width={500} height={500}/>
                    <Link target='_blank' href={p.githubLink} className='flex gap-2 items-center text-[#96BB7C]'>
                    <FaLink />
                    <p>{p.gitText}</p>
                   </Link>

                  </div>
                ))

                } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio