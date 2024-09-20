"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {React, useEffect} from 'react'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchApi(e) {
    e.preventDefault();
    const baseurl = 'https://forms-io.onrender.com/submit-form/fa7acc2b-1f65-4cae-a57d-5d4e4c1b4656';
    if (!name || !email || !message || !subject) {
        return toast.warn('Fill out the empty space');
    }
    setLoading(true);
    try {
        const responds = await fetch(baseurl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, subject, message })
        }).then((res) => res.json());
        if (responds) {
            toast.success('Message submitted successfully');
            setLoading(false);
        }
    } catch (error) {
        toast.error('Error submitting message. Please try again.');
        }
   }

    useEffect(() => {
        AOS.init({ duration: 3000});
        }, []);
  return (
    <div id="contact" className="text-white flex flex-col justify-center items-center gap-20 pt-[50px] pb-[30px] max-md:overflow-x-hidden" data-aos="zoom-in">
    <div className="gap-12 flex flex-col max-md:items-center">
      <div className="text-[45px] font-bold">
        <h1>Contact Me</h1>
      </div>
      <div className="flex flex-col gap-14 items-center justify-center w-full">
        <div className="flex flex-col gap-3 items-center">
          <p className="text-[#96BB7C] font-bold text-[25px]">You Need My Services?</p>
          <p className="font-semibold text-[20px]">CONTACT ME HERE!</p>
        </div>
        <div className="flex gap-[270px] items-center justify-center w-full max-md:flex-col max-md:gap-[50px]">
          <div className="flex gap-[120px] max-md:flex-col max-md:gap-[50px]">
            <div className="flex flex-col items-center gap-3">
              <IoCall className="text-[#96BB7C] text-[30px]" />
              <p className="text-[18.5px] font-semibold">Ring Me On</p>
              <p className="text-[14px]">+234 8102780804</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaLocationDot className="text-[#96BB7C] text-[30px]" />
              <p className="text-[18.5px] font-semibold">Location</p>
              <p className="text-[14px]">Everywhere</p>
            </div>
          </div>
          <div className="flex gap-[90px] max-md:flex-col max-md:gap-[50px]">
            <div className="flex flex-col items-center gap-3">
              <MdEmail className="text-[#96BB7C] text-[30px]" />
              <p className="text-[18.5px] font-semibold">Email</p>
              <p className="text-[14px]">adejaremuibi96@gmail.com</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <TbWorldWww className="text-[#96BB7C] text-[30px]" />
              <p className="text-[18.5px] font-semibold">Website</p>
              <p className="text-[14px]">adejaremuibi96@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-10 items-center justify-center" id="hire">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-bold text-[24px] text-[#96BB7C]">SEND ME AN EMAIL</p>
          <p className="font-bold text-[16px]">I&apos;M VERY RESPONSIVE TO MESSAGES</p>
        </div>
        <form 
          className="flex flex-col w-full justify-center gap-7">
          <div className="flex gap-[30px] max-md:flex-col max-md:gap-7 w-full">
            <input required type="text" name="fullName" placeholder="Name" className="bg-[#222222] w-full py-[14px] pl-[12px] rounded-[10px] outline-none" value={name} onChange={(e) => setName(e.target.value)} />
            <input required type="Email" name="email" placeholder="Email" className="bg-[#222222] w-full py-[14px] pl-[12px] rounded-[10px] outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div> 
          <div className="flex w-full">
            <input required type="text" name="subject" placeholder="Subject" className="bg-[#222222] w-full py-[14px] pl-[12px] rounded-[10px] outline-none" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="flex w-full">
            <textarea name="message" required placeholder="Message" rows={7} className="bg-[#222222] pt-[10px] w-full outline-none pl-[12px] rounded-[10px]" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <div className="flex">
            <button type="submit" className="bg-[#96BB7C] rounded-[10px] w-[30%] max-md:w-[60%] py-[14px]" onClick={fetchApi}>
                    {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>    
        {/* <form 
          action="https://forms-io.onrender.com/submit-form/fa7acc2b-1f65-4cae-a57d-5d4e4c1b4656"
          method="POST"
          className="flex flex-col w-full justify-center gap-7">
          <div className="flex gap-[30px] max-md:flex-col max-md:gap-7 w-full">
            <input required type="text" name="fullName" placeholder="Name" className="bg-[#222222] w-full py-[14px] pl-[12px] rounded-[10px] outline-none" />
            <input required type="Email" name="email" placeholder="Email" className="bg-[#222222] w-full py-[14px] pl-[12px] rounded-[10px] outline-none" />
          </div> 
          <div className="flex w-full">
            <input required type="text" name="subject" placeholder="Subject" className="bg-[#222222] w-full py-[14px] pl-[12px] rounded-[10px] outline-none" />
          </div>
          <div className="flex w-full">
            <textarea name="message" required placeholder="Message" rows={7} className="bg-[#222222] pt-[10px] w-full outline-none pl-[12px] rounded-[10px]"></textarea>
          </div>
          <div className="flex">
            <button type="submit" className="bg-[#96BB7C] rounded-[10px] w-[30%] max-md:w-[60%] py-[14px]">Send Message</button>
          </div>
        </form>     */}
      </div>   
    </div>
    <ToastContainer/>
  </div>
  
  )
}

export default Contact