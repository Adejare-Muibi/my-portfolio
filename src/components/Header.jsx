import React from 'react'
import Link from 'next/link';
import { MdHome } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";

const Header = () => {
  return (
    <div className='flex gap-60 justify-center text-white max-md: h-[100vh] flex-col bg-[url("/photo2.jpg")] bg-cover bg-no-repeat'>
        <div className='bg-black bg-opacity-50 h-[100vh]'></div>
        <div className='flex bg-black fixed z-10 w-full top-0 justify-around max-md:flex-col max-md:items-center max-md:justify-center pt-2'>
            <h1 className='text-[25px]'>DiamondRock</h1>
            <div className='flex gap-8 max-md:hidden'>
                <div className='flex items-center gap-2'>
                    <MdHome />
                    <h2>Home</h2>
                </div>
                <div className='flex items-center gap-2'>
                    <Link href={'#about'} className='flex items-center gap-2'>
                        <FaUser className='text-[10px]' />
                        <h2>About</h2>
                    </Link>
                </div>
                <div className='flex items-center gap-2'>
                    <FaList className='text-[13px]' />
                    <h2>Services</h2>
                </div>
                <div className='flex items-center gap-2'>
                    <IoBagHandleSharp />
                    <h2>Portfolio</h2>
                </div>
                <div className='flex items-center gap-2'>
                    <TiMessages />
                    <h2>Contact</h2>
                </div>
            </div>
        </div>
        <div className='flex flex-col absolute right-0 left-0 top-[50%] w-full  justify-center items-center gap-2'>
            <h1 className='text-5xl text-center font-semibold max'>Hi! I'm Adejare Muibi</h1>
            <h1 className='text-5xl text-center font-semibold'>A Frontend Developer</h1>
        </div>
        
        
    </div>
  )
}

export default Header