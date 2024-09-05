"use client"
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { SiSimilarweb } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { CgSoftwareDownload } from "react-icons/cg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




const Services = () => {

useEffect(() => {
    AOS.init({ duration: 3000});
    }, []);

  return (
    <div id='services' className='flex flex-col justify-center items-center py-[30px] w-full max-md:overflow-x-hidden' data-aos="flip-right">
        <div className='flex flex-col justify-center max-md:items-center gap-12'>
            <div>
                <h1 className='font-bold text-[45px] text-white'>Services</h1>
            </div>
            <div className='flex flex-col gap-8 text-white'>
                <div className='flex gap-12 max-md:flex-col'>
                    <div className='flex group flex-col items-center border-[0.2px] border-[#4e4d4d] px-[17px] py-[25px] gap-10 rounded-[10px] bg-[#222222]'>
                        <div className='text-[45px] text-[#96BB7C] group-hover:bg-[#96BB7C] group-hover:text-white group-hover:text-[30px] group-hover:p-[14px] rounded-[100px] transition-colors duration-[1s]'><FaSearch /></div>
                        <div className='flex flex-col items-center gap-7'>
                            <h1 className='font-semibold text-[20px]'>Website development</h1>
                            <p className='w-[23vw] text-center text-[15px] max-md:w-[70vw]'>Web development is the work involved in developing a website for the internet for specific purposes.</p>
                        </div>
                    </div>
                    <div className='flex group flex-col items-center border-[0.2px] border-[#4e4d4d] px-[17px] py-[25px] gap-10 rounded-[10px] bg-[#222222]'>
                        <div className='text-[45px] text-[#96BB7C] group-hover:bg-[#96BB7C] group-hover:text-white group-hover:text-[30px] group-hover:p-[14px] rounded-[100px] transition-colors duration-[1s]'><MdOutlineWebAsset /></div>
                        <div className='flex flex-col items-center gap-7'>
                            <h1 className='font-semibold text-[20px]'>Web Design</h1>
                            <p className='w-[23vw] text-center text-[15px] max-md:w-[70vw]'>Web design refers to the design of websites that are displayed on the internet.</p>
                        </div>
                    </div>
                    <div className='flex group flex-col items-center border-[0.2px] border-[#4e4d4d] px-[17px] py-[25px] gap-10 rounded-[10px] bg-[#222222]'>
                        <div className='text-[45px] text-[#96BB7C] group-hover:bg-[#96BB7C] group-hover:text-white group-hover:text-[30px] group-hover:p-[14px] rounded-[100px] transition-colors duration-[1s]'><SiSimilarweb /></div>
                        <div className='flex flex-col items-center gap-7'>
                            <h1 className='font-semibold text-[20px]'>Web Application</h1>
                            <p className='w-[23vw] text-center text-[15px] max-md:w-[70vw]'>A web application or web app is an application software that is accessed using a web browser</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-12 max-md:flex-col'>
                    <div className='flex group flex-col items-center border-[0.2px] border-[#4e4d4d] px-[17px] py-[25px] gap-10 rounded-[10px] bg-[#222222]'>
                        <div className='text-[45px] text-[#96BB7C] group-hover:bg-[#96BB7C] group-hover:text-white group-hover:text-[30px] group-hover:p-[14px] rounded-[100px] transition-colors duration-[1s]'><CgSoftwareDownload /></div>
                        <div className='flex flex-col items-center gap-7'>
                            <h1 className='font-semibold text-[20px]'>Software development</h1>
                            <p className='w-[23vw] text-center text-[15px] max-md:w-[70vw]'>Software development is the process of conceiving, designing, programming, testing and maintaining applications</p>
                        </div>
                    </div>
                    <div className='flex group flex-col items-center border-[0.2px] border-[#4e4d4d] px-[17px] py-[25px] gap-10 rounded-[10px] bg-[#222222]'>
                        <div className='text-[45px] text-[#96BB7C] group-hover:bg-[#96BB7C] group-hover:text-white group-hover:text-[30px] group-hover:p-[14px] rounded-[100px] transition-colors duration-[1s]'><MdPhoneIphone /></div>
                        <div className='flex flex-col items-center gap-7'>
                            <h1 className='font-semibold text-[20px]'>Mobile Design</h1>
                            <p className='w-[23vw] text-center text-[15px] max-md:w-[70vw]'>Designing and implementing website/web app for the smallest screen sizes</p>
                        </div>
                    </div>
                    <div className='flex group flex-col items-center border-[0.2px] border-[#4e4d4d] px-[17px] py-[25px] gap-10 rounded-[10px] bg-[#222222]'>
                        <div className='text-[45px] text-[#96BB7C] group-hover:bg-[#96BB7C] group-hover:text-white group-hover:text-[30px] group-hover:p-[14px] rounded-[100px] transition-colors duration-[1s]'><TbSpeakerphone /></div>
                        <div className='flex flex-col items-center gap-7'>
                            <h1 className='font-semibold text-[20px]'>Web hosting and Maintenance</h1>
                            <p className='w-[23vw] text-center text-[15px] max-md:w-[70vw]'>Hosting services provide the ability to launch your site on the internet Maintenance ensures that all your data and code is up to date</p>
                        </div>
                    </div>
                </div>   
            </div>    
        </div> 
    </div>
  )
}

export default Services