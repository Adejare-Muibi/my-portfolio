'use client';
import React from 'react'
import Link from 'next/link';
import { MdHome } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import {IoCloseSharp} from 'react-icons/io5';
import { useState } from 'react';

const Header = () => {

    const [click, setClick] = useState(false);
    function handleClick() {
		setClick(!click);
	}

  return (
    <div className='flex gap-60 justify-center text-white max-md:h-[100vh] flex-col bg-[url("/photo2.jpg")] bg-cover bg-no-repeat'>
        <div className='bg-black bg-opacity-50 h-[100vh]'></div>
        <div className='flex bg-black fixed z-10 w-full top-0 lg:justify-between lg:px-9 max-md:flex-col max-md:items-center max-md:justify-center py-3 max-md:py-0'>
            <h1 className='text-[28px] max-md:text-[25px] flex max-md:items-center max-md:w-[100%] max-md:justify-between max-md:px-3 max-md:py-2'>DiamondRock <span className="md:hidden cursor-pointer text-[23px]" onClick={handleClick}>{click ? <IoCloseSharp /> : <GiHamburgerMenu className='text-[19px]' />} </span></h1>
            <div className={`transition-all duration-500 ease-in-out lg:hidden overflow-hidden flex flex-col w-full items-center justify-center bg-[#222222] gap-7 ${click ? 'max-h-[500px] py-7 overflow-hidden duration-[2000ms]' : 'max-h-0 opacity-0'}`}>
                <div className='flex flex-col items-center gap-4 lg:hidden'>
                    <div className='flex items-center gap-1'>
                        <Link href={'#home'} className='flex items-center gap-1 hover:text-[#96BB7C] transition-colors duration-[0.7s]'>
                            <MdHome className='text-[10px]' />
                            <h2>Home</h2>
                        </Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Link href={'#about'} className='flex items-center gap-1 hover:text-[#96BB7C] transition-colors duration-[0.7s]'>
                            <FaUser className='text-[10px]' />
                            <h2>About</h2>
                        </Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Link href={'#services'} className='flex items-center gap-1 hover:text-[#96BB7C] transition-colors duration-[0.7s]'>
                            <FaList className='text-[10px]' />
                            <h2>Services</h2>
                        </Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Link href={'#portfolio'} className='flex items-center gap-1 hover:text-[#96BB7C] transition-colors duration-[0.7s]'>
                            <IoBagHandleSharp className='text-[10px]' />
                            <h2>Portfolio</h2>
                        </Link>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Link href={'#contact'} className='flex items-center gap-1 hover:text-[#96BB7C] transition-colors duration-[0.7s]'>
                            <TiMessages className='text-[10px]' />
                            <h2>Contact</h2>
                        </Link>
                    </div>  
                </div>
                <div className='flex items-center hover:bg-white border-white border-[1.5px] max-md:justify-center hover:text-[#96BB7C] rounded-[5px] py-2 px-6'>
                    <Link href={'#contact'} className='font-semibold'>HIRE ME</Link>
                </div>
            </div>
            
            <div className='flex gap-8 max-md:flex-col max-md:hidden'>
                <div className='flex items-center gap-1'>
                    <Link href={'#home'} className='flex items-center gap-2 hover:text-[#96BB7C] transition-colors duration-[0.7s]'>
                        <MdHome className='text-[13px]' />
                        <h2>Home</h2>
                    </Link>
                </div>
                <div className='flex items-center gap-1'>
                    <Link href={'#about'} className='flex items-center gap-2 hover:text-[#96BB7C] transition-colors duration-[0.7s]'>
                        <FaUser className='text-[13px]' />
                        <h2>About</h2>
                    </Link>
                </div>
                <div className='flex items-center gap-1'>
                    <Link href={'#services'} className='flex items-center gap-2 hover:text-[#96BB7C] transition-colors duration-[0.7s]'>
                        <FaList className='text-[13px]' />
                        <h2>Services</h2>
                    </Link>
                </div>
                <div className='flex items-center gap-1'>
                    <Link href={'#portfolio'} className='flex items-center gap-2 hover:text-[#96BB7C] transition-colors duration-[0.7s]'>
                        <IoBagHandleSharp className='text-[13px]' />
                        <h2>Portfolio</h2>
                    </Link>
                </div>
                <div className='flex items-center gap-1'>
                    <Link href={'#contact'} className='flex items-center gap-2 hover:text-[#96BB7C] transition-colors duration-[0.7s]'>
                        <TiMessages className='text-[13px]' />
                        <h2>Contact</h2>
                    </Link>
                </div>  
                <div className='flex items-center hover:bg-white border-white border-[1.5px] max-md:justify-center hover:text-[#96BB7C] rounded-[5px] py-2 px-11'>
                    <Link href={'#contact'} className='font-semibold'>HIRE ME</Link>
                </div>
            </div>  
        </div>
        <div className='flex flex-col absolute right-0 left-0 top-[50%] w-full justify-center items-center gap-2'>
            <h1 className='text-5xl text-center font-semibold max-md:text-3xl'>Hi! I&apos;m Adejare Muibi</h1>
            <h1 className='text-5xl text-center font-semibold max-md:text-3xl'>A Frontend Developer</h1>
        </div>  
    </div>
  )
}

export default Header