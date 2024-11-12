// "use client"
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link';
// import { FaLink } from "react-icons/fa";
// import { IoLogoGithub } from "react-icons/io";

// const Portfolio = () => {
//   return (
//     <div id='portfolio' className='text-white flex flex-col justify-center items-center py-[30px]'>
//       <div className='flex flex-col gap-12'>
//         <div>
//           <h1 className='text-[45px] font-bold'>Portfolio</h1>
//         </div>
//         <div className='flex flex-col gap-7'>
//           <div className='flex'>
//             <div className='flex flex-col gap-3 bg-[#222222] rounded-[10px] p-2'>
//               <div className='flex flex-col gap-2'>
//                 <Image height={700} width={420} alt='port' className='max-md:w-[80vw]' src={"/form.png"}></Image>
//                 <p className='w-[33vw] text-[#96BB7C] max-md:w-[80vw]'><span className='font-bold'>Formserver:</span> <span className='text-[16px]'>This is a form API and Email service for HTML & JavaScript forms. It is the most simplest way to embed custom contact us forms for Developers and regular individuals.</span></p>
//               </div>
//               <div className='flex items-center gap-[px] justify-between'>
//                 <Link target='_blank' href={'https://formserver-theta.vercel.app'} className='flex gap-2 items-center text-[#96BB7C]'>
//                   <FaLink />
//                   <p>Live Preview</p>
//                 </Link>
//                 <Link target='_blank' href={'https://github.com/Adejare-Muibi/formserver'} className='flex gap-2 items-center text-[#96BB7C]'>
//                   <IoLogoGithub />
//                   <p>Github</p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Portfolio

"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const portfolioItems = [
  {
    id: 1,
    title: "Formserver",
    description: "This is a form API and Email service for HTML & JavaScript forms. It is the simplest way to embed custom contact us forms for Developers and regular individuals.",
    imgSrc: "/form.png",
    liveLink: "https://formserver-theta.vercel.app",
    githubLink: "https://github.com/Adejare-Muibi/formserver"
  },
  {
    id: 2,
    title: "Tosh Portfolio",
    description: "A customized portfolio of a software Developer showcasing their profiles and experiences in their field and passion for creating exceptionaldigital experiences.",
    imgSrc: "/tosh.png",
    liveLink: "https://tosh-portfolio.vercel.app/",
    githubLink: "https://github.com/Adejare-Muibi/Tosh-portfolio"
  },
  {
    id: 3,
    title: "MustyWorld",
    description: "An ultimate digital marketplace where innovation meets opportunity. It connects buyers and sellers from around the world, offering a very vast array of digital products.",
    imgSrc: "/musty.png",
    liveLink: "https://musty-world.vercel.app/",
    githubLink: "https://github.com/Adejare-Muibi/MustyWorld"
  }
];

const Portfolio = () => {
  return (
    <div id='portfolio' className='text-white flex flex-col justify-center items-center py-[30px]' data-aos="zoom-in">
      <div className='flex flex-col gap-12 max-md:items-center'>
        <div>
          <h1 className='text-[45px] font-bold'>Portfolio</h1>
        </div>
        <div className='flex gap-7 justify-center max-md:flex-col'>
          {portfolioItems.map((item) => (
            <div key={item.id} className='flex flex-col gap-3 bg-[#222222] rounded-[10px] p-2 w-[30vw] max-md:w-[80vw]'>
              <div className='flex flex-col gap-2'>
                <Image height={700} width={420} alt={item.title} src={item.imgSrc} className='rounded' />
                <p className='text-[#96BB7C]'>
                  <span className='font-bold'>{item.title}:</span> <span className='text-[16px]'>{item.description}</span>
                </p>
              </div>
              <div className='flex items-center justify-between'>
                <Link target='_blank' href={item.liveLink} className='flex gap-2 items-center text-[#96BB7C]'>
                  <FaLink />
                  <p>Live Preview</p>
                </Link>
                <Link target='_blank' href={item.githubLink} className='flex gap-2 items-center text-[#96BB7C]'>
                  <IoLogoGithub />
                  <p>Github</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
