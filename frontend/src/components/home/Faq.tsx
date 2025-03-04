'use client'
import { colors } from '@/utilites/color';
import React, { useState } from 'react';
import img1 from '@/asset/image/home/whyCHoseUs.jpg';
import img2 from '@/asset/image/home/WhyCHooseus2.jpg';
import img3 from '@/asset/image/home/whyChooseUs3.jpg';
import img4 from '@/asset/image/home/whyCHooseUs4.avif';
import Image from 'next/image';
import { FaCircleNotch } from "react-icons/fa";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const faqData = [
    {
      question: 'Administrative Support',
      heading: "Administrative Support",
      image: img1,
      details: 'Lorem ipsum...',
      li: ['Email and calendar management', 'Appointment scheduling', 'Data entry and document organization', 'Travel planning and itinerary management'],
    },
    {
      question: 'Customer Support',
      heading: "Customer Support",
      image: img2,
      details: 'Lorem ipsum...',
      li: ['Responding to customer inquiries', 'Live chat and helpdesk support', 'Managing customer feedback and reviews', 'Order processing and tracking'],
    },
    {
      question: 'Data & Research Assistance',
      heading: "Data & Research Assistance",
      image: img3,
      details: 'Lorem ipsum...',
      li: ['Market research and competitor analysis', 'Industry trend reports', 'Lead generation and data collection', 'Organizing research into actionable insights'],
    },
    {
      question: "E-Commerce Support",
      heading: "E-Commerce Support",
      image: img4,
      details: 'Lorem ipsum...',
      li: ['Product listing and inventory management', 'Processing orders and returns', 'Handling customer inquiries and reviews', 'Storefront optimization for better sales'],
    }
  ];
  
  const toggleOpen = (index:number ) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="bg-gray-100 relative">
      {/* Always Visible Dots with Ultra-Smooth Motion */}
      <div 
        className={`absolute overflow-hidden w-5 h-5 bg-gradient-to-br from-purple-400 to-purple-600 opacity-40 rounded-full transition-all duration-[1000ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
        ${open !== null ? ' translate-x-24 md:translate-x-[600px]  translate-y-[280px] md:translate-y-[300px] opacity-100' : 'top-o left-0 opacity-40'}`}
      ></div>

      <div 
        className={`absolute w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full transition-all duration-[1000ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
       -bottom-9 right-[430px] opacity-60`}
      ></div>

      <section className="p-6 container mx-auto bg-gradient-to-r rounded-lg">
        <div className="space-y-4 relative">
          {faqData.map((item, index) => (
            <div key={index} className="border-2 p-4 relative group">
              
              {/* FAQ Header */}
              <div
                onClick={() => toggleOpen(index)}
                className={`flex justify-between items-center cursor-pointer ${colors.primary} hover:text-gray-900`}
              >
                <span>{item.question}</span>
                <span className={`transition-transform duration-300 ${open === index ? 'rotate-180' : ''}`}>
                  &#9660;
                </span>
              </div>

              {/* FAQ Content */}
              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  open === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="mt-4 md:flex gap-4 space-y-4">
                  <section className='w-[40%]'>
                    <Image src={item.image} alt="Image" className="rounded-md" />
                  </section>
                  <section>
                    <h1 className={`${colors.primary} font-semibold text-2xl`}>{item.heading}</h1>
                    <p className="text-gray-600 mt-2">{item.details}</p>
                    <ul className="list-cir mt-8 pl-5 space-y-2 text-gray-600">
                      {item.li.map((point, i) => (
                        <div key={i} className='flex gap-4 items-center'>
                          <span className={`${colors.primary}`}>
                            <FaCircleNotch />
                          </span>
                          <li>{point}</li>
                        </div>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Floating Gradient Blobs */}
<div className="absolute top-12 left-20 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 opacity-40 rounded-full blur-2xl animate-pulse"></div>
<div className="absolute top-30 right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 opacity-40 rounded-full blur-2xl animate-bounce"></div>
{/* <div className="absolute bottom-12 left-10 w-20 h-20 bg-gradient-to-br from-red-500 to-yellow-500 opacity-30 rounded-full blur-xl animate-pulse"></div> */}
<div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-green-400 to-teal-500 opacity-40 rounded-full blur-3xl animate-bounce"></div>

      </section>
    </div>
  );
};

export default FAQ;
