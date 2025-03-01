import { bgColors, colors } from '@/utilites/color';
import React from 'react';
import icon1 from '@/asset/image/home/countdownIcon.png'
import icon2 from '@/asset/image/home/countDownicon2.png'
import icon3 from '@/asset/image/home/countdownicon3.png'
import Image from 'next/image';
import Count from '@/utilites/Count';


const ShortStats = () => {
    return (
        <div className='md:flex  items-center  container mx-auto justify-between'>
         <section className='md:w-1/2 px-4 md:px-0'>
            <h6 className={`public-sans ${colors.secondary} `}>Corporate Profile</h6>
            <h1 className='font-bold py-3 mt-2 text-gray-900 text-5xl  '>Partnering for a  Sustainable Future</h1>
            <article className='md:flex gap-4 mt-8'>
                
                <div>
                    <h6 className='font-semibold md:ml-6'>A Compelling Investment</h6>

                    <div className='flex gap-2'>

                    <div className={`flex-grow hidden md:block mt-4 w-4 mr-4 ${bgColors.secondary}`}>

</div>

                    <p className='mt-2'>Our ultimate goal is maximizing long-term value for shareholders through operating and financial discipline; lower-risk, fast payback growth projects; and returns-focused metrics.</p>
                    </div>
                </div>
                <div className='mt-6 md:mt-0'>
                    <h6 className='font-semibold '>Our Ultimate Goal</h6>
                    <p className='mt-2'>Invera is positioned to drive value for its shareholders through its focused, streamlined and resilient portfolio with significant earnings growth drivers in place.</p>
                </div>
            </article>
            </section> 


              {/*count down  */}
         <section className='bg-gray-100 py-44 px-10'>
            <div className='flex items-center gap-14 border-b border-gray-200 pb-8'>
              <div >
              <h1 className={`${colors.third} font-semibold text-3xl flex min-w-20`}>$ <Count count={48}/> </h1>
              <p className={`${colors.secondary} w-3`}>billions</p>
              </div>

              <div className='flex gap-4'>
                <Image src={icon1} alt='icon' className='size-8'/>
                <p className='font-semibold tracking-[2px] sapce1 text-[12px]'>Growing Net  Sales in Year 2022</p>
              </div>


            </div>
            <div className='flex border-b border-gray-200 pb-8 items-center mt-8 gap-14'>
              <div >
              <h1 className={`${colors.third} font-semibold text-3xl flex min-w-20`}>$ <Count count={30}/> </h1>
              <p className={`${colors.secondary} w-3`}>Employees</p>
              </div>

              <div className='flex gap-4'>
                <Image src={icon3} alt='icon' className='size-8'/>
                <p className='font-semibold tracking-[2px] sapce1 text-[12px]'>24,700 Employees in 98 <br />Manufacturing Sites</p>
              </div>


            </div>
            <div className='flex border-gray-200 pb-8 items-center mt-8 gap-14'>
              <div >
              <h1 className={`${colors.third} font-semibold text-3xl flex min-w-20`}>$ <Count count={98}/> </h1>
              <p className={`${colors.secondary} w-3`}>Production Sites</p>
              </div>

              <div className='flex gap-4'>
                <Image src={icon2} alt='icon' className='size-8'/>
                <p className='font-semibold tracking-[2px] sapce1 text-[12px]'>28 Countries in which  <br />we are Producting</p>
              </div>


            </div>
            </section>   
        </div>
    );
};

export default ShortStats;