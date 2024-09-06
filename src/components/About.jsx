"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProgressBar from './Progress';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";




const About = () => {
  const [progress, setProgress] = useState(80); // Example percentage value
  const [progress2, setProgress2] = useState(85); // Example percentage value
  const [progress3, setProgress3] = useState(60); // Example percentage value
  const [progress4, setProgress4] = useState(50); // Example percentage value
  const [progress5, setProgress5] = useState(40); // Example percentage value
  const [progress1, setProgress1] = useState(50); // Example percentage value
  const [color, setColor] = useState('#96BB7C');
  
  useEffect(() => {
    AOS.init({ duration: 3000});
    }, []);
  

  return (
    <div  id='about' className='flex bg-[#222222] flex-col gap-24 max-md:gap-[30px] justify-center items-center text-white w-[100%] max-md:overflow-x-hidden'>
      <div className='flex justify-around bg-[#2b2929] py-[50px] max-md:gap-[50px] max-md:justify-center items-center max-md:flex-col w-full max-md:overflow-x-hidden' data-aos="fade-up">
      <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-5 max-md:items-center'>
            <h1 className='text-[45px] font-bold'>About Me</h1>
            <h2 className='w-[40vw] max-md:w-[84vw]'>
              I&apos;m an ambitious, enthutiastic and passionate website developer with a love for creating responsive, user-friendly interfaces. With a year experience in the field, I&apos;ve honed my skills in HTML, CSS,
              JavaScript, React and Next. I&apos;m always excited to collaborate on projects that challenge me and allow me to grow as a developer. Let&apos;s connect and explore opportunities to work together.
            </h2>
          </div>
          <div className='flex flex-col gap-8 max-md:w-[] max-md:items-center'>
            <div className='flex flex-col gap-7 mt-6 w-full max-md:w-[100%] max-md:justify-center'> 
              <div>
                <p>HTML</p>
                <ProgressBar percentage={progress} color={color} />
              </div>
              <div>
                <p>CSS</p>
                <ProgressBar percentage={progress2} color={color} />
              </div>
              <div>
                <p>JAVASCRIPT</p>
                <ProgressBar percentage={progress3} color={color} />
              </div>
              <div>
                <p>NEXT.JS</p>
                <ProgressBar percentage={progress4} color={color} />
              </div>
              <div>
                <p>REACT.JS</p>
                <ProgressBar percentage={progress1} color={color} />
              </div>
            </div>
            <div className='py-[5px] flex gap-[10px] max-md:flex-col'>
              <div className='flex items-center bg-[#96BB7C] max-md:justify-center hover:bg-white hover:text-[#96BB7C] rounded-[7px] py-2 px-6 max-md:px-28'>
                <Link href={'#hire'}>HIRE ME</Link>
              </div>
              <div className='flex items-center hover:bg-white hover:text-[#6C757D] bg-[#6C757D] rounded-[7px] py-2 px-6 max-md:justify-center max-md:px-28'>
                <a href="/myCV.pdf" download="myCV.pdf">DOWNLOAD CV</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image className='rounded-[10px]' src={"/convo.jpg"} height={50} width={300} alt='me' />
        </div>
      </div>
      <div className='flex max-md:flex-col max-md:gap-6 justify-around items-center w-[100%] max-md:overflow-x-hidden'>
        <div className='flex lg:gap-[150px] gap-[12px]'>
          <div className='flex gap-5 flex-col'>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className=''><span className='font-semibold text-[20px] max-md:text-[16px]'>Stack :</span> <span className='ml-1 text-[13px]'>Frontend</span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className='max-md:w-[20vw]'><span className='font-semibold text-[20px] max-md:text-[16px]'>Email :</span> <span className='ml-1 text-[13px]'>adejaremuibi96@gmail.com</span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className=''><span className='font-semibold text-[20px] max-md:text-[16px]'>Phone :</span> <span className='ml-1 text-[13px] max-md:w-[6vw]'><Link className='text-[#96BB7C]' href={'https://wa.me/2348102780804'}>+2348102780804</Link></span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className=''><span className='font-semibold text-[20px] max-md:text-[16px]'>Freelance :</span> <span className='ml-1 text-[13px]'></span>Available</h1>
            </div>
          </div>
          <div className='flex gap-5 flex-col'>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className=''><span className='font-semibold text-[20px] max-md:text-[16px]'>Github :</span> <span className='ml-1 text-[13px]'><Link className='text-[#96BB7C]' href={'https://github.com/adejare-muibi'}>github.com</Link></span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className='max-md:w-[20vw]'><span className='font-semibold max-md:text-[16px]'>Linkdin :</span> <span className='ml-1 text-[13px]'><Link className='text-[#96BB7C]' href={'https://www.linkedin.com/in/adejare-muibi-4462191b0/'}>linkedin.com</Link></span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className=''><span className='font-semibold text-[20px] max-md:text-[16px]'>Location :</span> <span className='ml-1 text-[13px]'>Everywhere</span></h1>
            </div>
            <div className='flex gap-3 border-b-[0.5px] pb-[7px] items-center border-[#363434]'>
              <h1 className=''><span className='font-semibold text-[20px] max-md:text-[16px]'>Twitter :</span> <span className='ml-1 text-[13px]'><Link className='text-[#96BB7C]' href={'https://x.com/tweetofjumuah'}>@TweetOfJumuah</Link></span></h1>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 text-[13px] max-md:pr-[48px]'>
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
      <div className='w-full flex gap-4 justify-center max-md:items-center max-md:flex-col mb-14 max-md:overflow-x-hidden' data-aos="slide-right">
        <div className='flex flex-col gap-7 max-md:justify-center'>
          <div>
            <h1 className='text-[25px] font-semibold'>Experience</h1>
          </div>
          <div className='flex flex-col gap-12 px-4 py-7 rounded-[7px] bg-[#222222] border-[0.2px] border-[#4e4d4d]'>
            <div className='flex flex-col gap-3'>
              <p>05-2024 - Present|</p>
              <h1 className='text-[17px] font-semibold'>Frontend Developer Formserver (Intern)</h1>
              <div className='w-[40vw] max-md:w-[82vw] text-[14px] flex flex-col gap-3'>
                <p className=''>1. personally built the frontend alongside my team with little to no help of my boss</p>
                <p className=''>2. Collaborated with colleagues on the creations of apis which helped increase overall efficiency and transparency.</p>
                <p className=''>3. Maintained web applications using next, Typescript and Tailwind.</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <p>02-2024- Present|</p>
              <h1 className='text-[17px] font-semibold'>Freelance</h1>
              <div className='w-[42vw] max-md:w-[82vw] text-[14px] flex flex-col gap-3'>
                <p className=''>1. Successful Project Delivery and Code Optimization .</p>
                <p className=''>2. Implemented responsive layouts and optimized performance for improved user experience.</p>
                <p className=''>3. Developed code for software applications using multiple programming languages.</p>
                <p className=''>4. Developed and maintained code for software applications using multiple programming languages</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-7 max-md:justify-center'>
          <div>
            <h1 className='text-[25px] font-semibold'>Skills and Education</h1>
          </div>
          <div className='flex flex-col gap-12 max-md:w-[90vw] px-4 py-7 rounded-[7px] bg-[#222222] border-[0.2px] border-[#4e4d4d]'>
            <div className='w-[40vw] max-md:w-[82vw] flex flex-col gap-3'>
              <h1 className='text-[17px] font-semibold'>Programming Languages: Javascrpit/Typescript</h1>
              <h1 className='text-[17px] font-semibold'>Markup/Styling: Html,CSS, Tailwind</h1>
              <h1 className='text-[17px] font-semibold'>Frameworks/Libraries: React.Js, Next.Js</h1>
              <h1 className='text-[17px] font-semibold'>Version Control: Git/Github</h1>
              <h1 className='text-[17px] font-semibold'>Problem Solving, Strong Communication Skills</h1>
              <h1 className='text-[17px] font-semibold'>Collaboration And Teamwork</h1>
            </div>
            <div className=''>
              <h1 className='text-[18px] font-semibold'>SENIOR SCHOOL CERTIFICATE EXAMINATION (WAEC)</h1>   
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-[14px]'>Barchelor of Arts|</p>
              <h1 className='text-[18px] font-semibold'>LINGUISTICS</h1>
              <p className='text-[14px]'>University of Ilorin. Ilorin, Kwara State. Nigeria.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;