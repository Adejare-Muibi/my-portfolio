"use client"
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { BsThreeDotsVertical } from "react-icons/bs";



const Table = () => {
    const [showpopup, setshowpopup] = useState(true);

     const togglepopup = () => {
    setshowpopup(!showpopup);

    
     };
  return (
    <div className="flex justify-center items-center min-h-screen gap-[40px] flex-col py-[80px]">
      <table className="text-white border border-[#484848]">
        <thead>
          <tr className='bg-[#242424]'>
            <th className="py-4 border-b border-[#484848]">GUESTS</th>
            <th className="py-4 border-b border-[#484848]">PROPERTY</th>
            <th className="py-4 border-b border-[#484848]">COST</th>
            <th className="py-4 border-b border-[#484848]">CHECK-IN</th>
            <th className="py-4 border-b border-[#484848]">CHECK-OUT</th>
            <th className="py-4 border-b border-[#484848]">STATUS</th>
            <th className="py-4 border-b border-[#484848] "></th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-[#484848]'>
            <td className="py-4 px-10">Benjamin Wilson</td>
            <td className="py-4 px-10">Studio Apartment</td>
            <td className="py-4 px-10">$10,000</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">
                <div className='bg-[#13521F] text-[#30FF51] rounded-[20px] py-2 px-4'>Reserved</div>
            </td>
            <td className="py-4 px-10 cursor-pointer"><BsThreeDotsVertical  /></td>
          </tr>
          <tr className='border-b border-[#484848] bg-[#242424]'>
            <td className="py-4 px-10">John Doe</td>
            <td className="py-4 px-10">Studio Apartment</td>
            <td className="py-4 px-10">$10,000</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">
                <div className='bg-[#663619] text-[#FF5F00] rounded-[20px] py-2 px-4'>Declined</div>
            </td>
            <td className="py-4 px-10 cursor-pointer"><BsThreeDotsVertical onClick={togglepopup}/></td>
            {showpopup && 
              <div className='flex flex-col gap-[30px] text-white bg-[#7e7e98] p-[20px] absolute right-28 '>
                  <div className='flex justify-end cursor-pointer'>
                    <Image width={50} height={50} className='w-[1.5vw]' src={"/close.png"} onClick={() => setshowpopup(false)}></Image>
                  </div>
                  <div className='flex flex-col gap-6'>
                      <div className='text-[25px] font-bold'>
                          <h1>Booking details</h1>
                      </div>
                      <div className='flex flex-col gap-3'>
                      <div className='flex gap-3 items-center bg-[#1E1E1E] py-[12px] pl-[20px] pr-[50px] text-left rounded-[12px] border-[0.2px] border-[#4a4949]'>
                          <div className='w-[4vw]'>
                              <Image height={100} width={100} src={"/Ellipse.png"}></Image>
                          </div>
                          <div className='flex flex-col'>
                              <h1>Kenneth Morgan</h1>
                              <p>kennmorg@gmail.com</p>
                          </div>
                      </div>
                      <div className='flex gap-10 bg-[#1E1E1E] p-[20px] rounded-[12px] border-[0.2px] border-[#4a4949]'>
                          <div className='flex flex-col gap-6'>
                              <div className='flex flex-col gap-2'>
                                  <h1 className='text-[15px] text-[#6F767E]'>PROPERTY</h1>
                                  <h1 className='text-[#FCFCFC]'>Studio Apartment</h1>
                              </div>
                              <div className='flex flex-col gap-2'>
                                  <h1 className='text-[15px] text-[#6F767E]'>CHECK-IN DATE</h1>
                                  <h1>01/04/2023</h1>
                              </div>
                              <div className='flex flex-col gap-2'>
                                  <h1 className='text-[15px] text-[#6F767E]'>AMOUNT PAID</h1>
                                  <h1>£200,000</h1>
                              </div>
                              <div></div>
                          </div>
                          <div className='flex flex-col gap-6'>
                              <div className='flex flex-col gap-2'>
                                  <h1 className='text-[15px] text-[#6F767E] '>HABITABLE DAYS</h1>
                                  <h1>Nil</h1>
                              </div>
                              <div className='flex flex-col gap-2'>
                                  <h1 className='text-[15px] text-[#6F767E]'>CHECK-OUT DATE</h1>
                                  <h1>01/04/2023</h1>
                              </div>
                          </div>
                      </div>
                      <div className='flex flex-col gap-9'>
                        <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                          <h1 className='text-[12px]'>PAYMENT PROOF</h1>
                          <button className='bg-[#1E1E1E] p-[20px] w-[100%] rounded-[12px] border-[0.2px] border-[#4a4949]'>images</button>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <h1 className='text-[12px]'>APPROVAL STATUS</h1>
                          <select className="py-3 px-2 border-[0.2px] rounded-[12px] outline-none w-[100%] border-[#4a4949] bg-[#1E1E1E] "name="timely" id="timely" required="">
                              <option value="" selected="" disabled="">Reserved</option>
                              <option value="Yes">Taken</option>
                              <option value="No">Booked</option>
                          </select>
                        </div>
                        </div>
                        <div className='flex gap-5'>
                          <button className='bg-[black] border-[#DEA838] border-[2px] hover:text-[black] hover:bg-[#DEA838] py-3 px-14 rounded-[12px]'>Cancel</button>
                          <button className='bg-[#DEA838] text-[black] hover:text-white hover:bg-[black] hover:border-[#DEA838] hover:border-[2px] py-3 px-16 rounded-[12px]'>Save</button>
                      </div>

                      </div>
                    
                  </div>
                </div>
              </div>
            }
          </tr>
          <tr className='border-b border-[#484848]'>
            <td className="py-4 px-10">Benjamin Wilson</td>
            <td className="py-4 px-10">Studio Apartment</td>
            <td className="py-4 px-10">$10,000</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">
                <div className='bg-[#663619] text-[#FF5F00] rounded-[20px] py-2 px-4'>Declined</div>
            </td>
            <td className="py-4 px-10"><BsThreeDotsVertical /></td>
          </tr>
          <tr className='border-b border-[#484848] bg-[#242424]'>
            <td className="py-4 px-10">Kenneth Morgan</td>
            <td className="py-4 px-10">Studio Apartment</td>
            <td className="py-4 px-10">$10,000</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">
                <div className='bg-[#605127] text-[#ECBA2F] rounded-[20px] py-2 px-4'>Pending</div>
            </td>
            <td className="py-4 px-10"><BsThreeDotsVertical /></td>
          </tr>
          <tr className='border-b border-[#484848]'>
            <td className="py-4 px-10">Benjamin Wilson</td>
            <td className="py-4 px-10">Studio Apartment</td>
            <td className="py-4 px-10">$10,000</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">
                <div className='bg-[#13521F] text-[#30FF51] rounded-[20px] py-2 px-4'>Reserved</div>
            </td>
            <td className="py-4 px-10"><BsThreeDotsVertical /></td>
          </tr>
          <tr className='border-b border-[#484848] bg-[#242424]'>
            <td className="py-4 px-10">Kenneth Morgan</td>
            <td className="py-4 px-10">Studio Apartment</td>
            <td className="py-4 px-10">$10,000</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">
                <div className='bg-[#13521F] text-[#30FF51] rounded-[20px] py-2 px-4'>Reserved</div>
            </td>
            <td className="py-4 px-10"><BsThreeDotsVertical /></td>
          </tr>
          <tr className='border-b border-[#484848]'>
            <td className="py-4 px-10">John Doe</td>
            <td className="py-4 px-10">Studio Apartment</td>
            <td className="py-4 px-10">$10,000</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">
                <div className='bg-[#13521F] text-[#30FF51] rounded-[20px] py-2 px-4'>Reserved</div>
            </td>
            <td className="py-4 px-10"><BsThreeDotsVertical /></td>
          </tr>
          <tr className='border-b border-[#484848]'>
            <td className="py-4 px-10">John Doe</td>
            <td className="py-4 px-10">Studio Apartment</td>
            <td className="py-4 px-10">$10,000</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">
                <div className='bg-[#13521F] text-[#30FF51] rounded-[20px] py-2 px-4'>Reserved</div>
            </td>
            <td className="py-4 px-10"><BsThreeDotsVertical /></td>
          </tr>
          <tr className='border-b border-[#484848]'>
            <td className="py-4 px-10">John Doe</td>
            <td className="py-4 px-10">Studio Apartment</td>
            <td className="py-4 px-10">$10,000</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">
                <div className='bg-[#13521F] text-[#30FF51] rounded-[20px] py-2 px-4'>Reserved</div>
            </td>
            <td className="py-4 px-10"><BsThreeDotsVertical /></td>
          </tr>
          <tr className='border-b border-[#484848]'>
            <td className="py-4 px-10">Benjamin Wilson</td>
            <td className="py-4 px-10">Studio Apartment</td>
            <td className="py-4 px-10">$10,000</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">01/04/2023</td>
            <td className="py-4 px-10">
                <div className='bg-[#663619] text-[#FF5F00] rounded-[20px] py-2 px-4'>Declined</div>
            </td>
            <td className="py-4 px-10"><BsThreeDotsVertical /></td>
          </tr>
        </tbody>
      </table>


    </div>
  );
}

export default Table;
