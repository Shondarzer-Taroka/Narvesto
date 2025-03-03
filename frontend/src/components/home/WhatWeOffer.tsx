import { colors } from '@/utilites/color';
import React from 'react';
import FAQ from './Faq';

const WhatWeOffer = () => {

    
    return (
       <div className='bg-gray-100 pb-24'>
         <div className='bg-gray-100 container mx-auto relative'>
            <h4 className={`${colors.primary} font-medium  text-center text-lg`}>What We Offer</h4> 
            
            
         <div className='px-4 md:px-12 relative'>
         <h1 className='md:text-4xl  mt-6 text-2xl  text-center font-bold'>Innovative <span className={`italic ${colors.primary}`}>Solutions Designed</span> to Maximize Your Productivity and <span className={`italic ${colors.primary}`}>Efficiency</span></h1>



         <p className='text-gray-600 md:w-[75%] mx-auto  text-center mt-6'>Mus cubilia quam hendrerit, egestas scelerisque egestas fames taciti integer. Erat mattis interdum ut efficitur conubia, a magna quisque. Facilisi faucibus sem porta litora praesent semper dapibus tristique. Magnis montes curae fames natoque dignissim suscipit.</p>

         <div className="absolute group-hover:opacity-0 group-hover:scale-0 -top-12 -left-12 w-28 h-28 bg-purple-400 opacity-20 rounded-full b">

 
            </div>

            
            
            <div className="absolute overflow-hidden -top-8 right-[430px] w-6 h-6 bg-gradient-to-br group-hover:opacity-0 group-hover:scale-0 from-purple-400 to-purple-600 opacity-60 rounded-full"></div>
            <div className="absolute -top-6 md:-top-8 left-[220px] md:left-[330px] w-4 h-4 bg-gradient-to-br group-hover:opacity-0 overflow-hidden group-hover:scale-0 from-purple-400 to-purple-600 opacity-60 rounded-full"></div>



         </div>

        <div className="absolute top-12 left-20 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 opacity-40 rounded-full blur-xl transform rotate-45"></div>
        {/* <div className="absolute top-30 right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 opacity-40 rounded-full blur-xl transform rotate-45"></div>
        <div className="absolute top-24 left-[400px] w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 rounded-full blur-xl"></div> */}


<section>

<FAQ/>
</section>

        </div>
       </div>
    );
};

export default WhatWeOffer;