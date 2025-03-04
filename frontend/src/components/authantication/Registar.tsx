import React from 'react';
import image from '@/asset/image/authantication/meeting-594091_1280.jpg';
import Image from 'next/image';
import { bgColors } from '@/utilites/color';
import user from '@/asset/image/authantication/user.jpg'
import user2 from '@/asset/image/authantication/user2.jpg'
import user3 from '@/asset/image/authantication/user3.jpg'
import GlassCalendar from './GlassCalendar';

const Registar = () => {
    return (
        <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
            <div className='container min-h-screen p-4 rounded-2xl flex shadow-2xl mx-auto bg-gradient-to-br from-gray-200 to-[#f0e8c6] '>
                {/* Left Section */}
                <section className='w-[80%] justify-center'>

<button className='bg-transparent py-2 px-3 rounded-2xl border border-black'>Narvesto</button>

<div className='text-center'>
    <h1 className='text-2xl'>Create an Account</h1>
    <p className='text-gray-700 mt-2'>Sign up and stay with us</p>

</div>

                </section>
                
                {/* Right Section */}
                <section className=' flex items-center  justify-center'>
                    <div className='relative'>
                        <Image src={image} alt='img' className='rounded-3xl' />

                        <div className={`${bgColors.primary} text-white absolute top-4 left-10 shadow z-10 px-4 py-3 rounded-xl`}>
                            <div className='flex justify-between '>
                            <h4 className=' text-xs '><b>Business Consultation Hours</b>
                            </h4>
                            <span className='w-2 h-2 rounded-full ml-4 text-left bg-gray-900'>


                            </span>
                            </div>
                            <p className='text-xs text-gray-100 '>10:30 AM – 1:50 PM</p>
                        </div>
                        <div className={`bg-[#303030] text-white absolute top-14 left-16 shadow px-4 py-3 rounded-xl`}>
                            <div className='flex justify-between '>
                            <h4 className=' text-xs w-[170px]'>
                            </h4>
                            <span className={`w-2 h-2 rounded-full ml-4 text-left ${bgColors.primary}`}>


                            </span>
                            </div>
                            <p className='text-xs text-gray-100 '>10:30 AM – 1:50 PM</p>
                        </div>

{/* image */}

<section className='absolute top-1/2 right-15'>
<div className='relative '>
   <div className='flex gap-1'>
   <div>
        <Image src={user} alt='user' className='w-18 h-18 rounded-full'/>
    </div>
    <div className='mt-6'>
        <Image src={user2} alt='user' className='w-14 h-14 rounded-full'/>
    </div>
   </div>
    <div className='left-10 absolute -bottom-4'>
        <Image src={user3} alt='user' className='w-10 h-10 rounded-full'/>
    </div>
    
</div>
</section>

{/* glass calendar */}

<section className='absolute top-1/2'>
    <GlassCalendar/>
</section>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Registar;
