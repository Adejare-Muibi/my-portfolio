import React from 'react'
import Link from 'next/link'

const Let = () => {
  return (
    <div className='lg:hidden max-md:hidden'>
           <div className='flex gap-5 max-md:flex-col justify-center'>
        <div className='flex gap-12 justify-center max-md:justify-around max-md:gap-20 w-full'>
          <div className='flex gap-5 flex-col'>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className='max-md:w-[20vw]'><span className='font-semibold text-[20px] max-md:text-[16px]'>Stack :</span> <span className='ml-1 text-[13px]'>Frontend</span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className='max-md:w-[20vw]'><span className='font-semibold text-[20px] max-md:text-[16px]'>Email :</span> <span className='ml-1 text-[13px]'>adejaremuibi96@gmail.com</span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className='max-md:w-[18vw]'><span className='font-semibold text-[20px] max-md:text-[16px]'>Phone :</span> <span className='ml-1 text-[13px] max-md:hidden'><Link className='text-[#96BB7C] max-md:hidden' href={'https://wa.me/2348102780804'}>https://wa.me/2348102780804</Link></span> <span className='ml-1 text-[13px] lg:hidden'>+2348102780804</span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className='max-md:w-[22vw]'><span className='font-semibold text-[20px] max-md:text-[16px]'>Freelance :</span> <span className='ml-1 text-[13px]'></span>Available</h1>
            </div>
          </div>
          <div className='flex gap-5 flex-col'>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className='max-md:w-[20vw]'><span className='font-semibold text-[20px] max-md:text-[16px]'>Github :</span> <span className='ml-1 text-[13px] max-md:hidden'><Link className='text-[#96BB7C]' href={'https://github.com/adejare-muibi'}>https://github.com/muibi-adejare</Link></span> <span className='ml-1 text-[13px] lg:hidden'>muibiadejare</span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className='max-md:w-[20vw]'><span className='font-semibold text-[20px] max-md:text-[16px]'>Linkdin :</span> <span className='ml-1 text-[13px] max-md:hidden'><Link className='text-[#96BB7C]' href={'https://www.linkedin.com/in/adejare-muibi-4462191b0/'}>https://www.linkedin.com/in/adejare-muibi-4462191b0/</Link></span> <span className='ml-1 text-[13px] lg:hidden'>adejaremuibi</span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className='max-md:w-[20vw]'><span className='font-semibold text-[20px] max-md:text-[16px]'>Location :</span> <span className='ml-1 text-[13px]'>Everywhere</span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className='max-md:w-[20vw]'><span className='font-semibold text-[20px] max-md:text-[16px]'>Twitter :</span> <span className='ml-1 text-[13px] max-md:hidden'><Link className='text-[#96BB7C]' href={'https://x.com/tweetofjumuah'}>https://x.com/tweetofjumuah?</Link></span> <span className='ml-1 text-[13px] lg:hidden'>TweetOfJumuah</span></h1>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 text-[13px]'>
          <div>
            <h1>Programming Languages: Javascrpit/Typescript, Java</h1>
          </div>
          <div>
            <h1>Markup/Styling: Html,CSS, Tailwind</h1>
          </div>
          <div>
            <h1>Frameworks/Libraries: React.Js, Next.Js</h1>
          </div>
          <div>
            <h1>Version Control: Git/Github</h1>
          </div>
          <div>
            <h1>Problem Solving, Strong Communication Skills</h1>
          </div>
          <div>
            <h1>Collaboration And Teamwork</h1>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Let