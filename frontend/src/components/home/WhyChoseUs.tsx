import { bgColors, colors, gradiant } from '@/utilites/color';
import React from 'react';

const WhyChoseUs = () => {
    return (
        <div className='mt-28 bg-gray-100 py-32'>
            <div className='container px-4 md:px-0 mx-auto '>
            {/* top secton */}

            <div className='md:flex items-center'>

                <section className='md:w-1/2'>

<h4 className={`${colors.primary} font-medium md:text-left text-center`}>Why Choose Us</h4> 


<h1 className='md:text-4xl mt-2 text-2xl md:text-left text-center font-bold'>We’re <br /> <span className={`${colors.primary} italic`}>Dedicated Partners in</span>  <br />Your Success</h1>
                </section>
                <section className='md:w-1/2'>

                    <p className='text-gray-600 md:text-left text-center mt-2 md:mt-0'>Mus cubilia quam hendrerit, egestas scelerisque egestas fames taciti integer. Erat mattis interdum ut efficitur conubia, a magna quisque. Facilisi faucibus sem porta litora praesent semper dapibus tristique. Magnis montes curae fames natoque.</p>
                </section>
            </div>
        </div>

        {/* bottom section */}
        <div className='grid px-4 md:px-0 mt-8 lg:grid-cols-4 md:grid-cols-2 gap-8 container mx-auto'>
        <section className={`${gradiant.primary} p-6 rounded-2xl relative overflow-hidden transition-all duration-500 group`}>
  {/* H1 Number */}
  <h1 className="text-3xl font-bold text-white ">
    01
  </h1>

  {/* Small dots */}
  <div className="mt-4 flex gap-1">
    <div className="bg-white w-1 h-1 rounded-full"></div>
    <div className="bg-white w-1 h-1 rounded-full"></div>
    <div className="bg-white w-1 h-1 rounded-full"></div>
    <div className="bg-white w-1/2 h-1 rounded-full"></div>
  </div>

  {/* Text content */}
  <article className="text-white relative">
    <h2 className="text-white pt-44 text-2xl transition-transform duration-500 group-hover:-translate-y-32">
      100% Confidential & Secure
    </h2>

    {/* Paragraph moves up into H1's position */}
    <p className="absolute bottom-0 left-0 w-full  text-white opacity-0 translate-y-full group-hover:translate-y-[-1rem] group-hover:opacity-100 transition-all duration-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
    </p>
  </article>
</section>
<section className={`border-[#1f0059] border p-6 rounded-2xl relative overflow-hidden transition-all duration-500 group`}>
  {/* Gradient Overlay */}
  <div className={`absolute inset-0 ${gradiant.secondary} bg-gradient-to-br from-[#7a46c2] to-[#c084fc] opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
<div className="absolute group-hover:opacity-0 group-hover:scale-0 -top-12 -left-12 w-28 h-28 bg-purple-400 opacity-20 rounded-full b"></div>
<div className="absolute top-12 right-4 w-4 h-4 bg-gradient-to-br group-hover:opacity-0 group-hover:scale-0 from-purple-400 to-purple-800 opacity-30 rounded-full"></div>
<div className="absolute top-1/2 -left-2 w-4 h-4 bg-gradient-to-br group-hover:opacity-0 group-hover:scale-0 from-purple-400 to-purple-800 opacity-30 rounded-full"></div>

  <div className={`absolute -bottom-12 -right-12 w-40 h-40 ${bgColors.secondary} opacity-10 group-hover:opacity-0 group-hover:scale-0 rounded-full blur-l`}></div>

  {/* H1 Number */}
  <h1 className="text-3xl font-bold relative z-10">
    02
  </h1>

  {/* Small dots */}
  <div className="mt-4 flex gap-1 relative z-10">
    <div className={`${bgColors.primary} w-1 h-1 rounded-full`}></div>
    <div className={`${bgColors.primary} w-1 h-1 rounded-full`}></div>
    <div className={`${bgColors.primary} w-1 h-1 rounded-full`}></div>
    <div className={`${bgColors.primary} w-1/2 h-1 rounded-full`}></div>
  </div>

  {/* Text content */}
  <article className={`${colors.primary} relative z-10`}>
    <h2 className={`${colors.primary} pt-44 text-2xl transition-transform duration-500 group-hover:-translate-y-32`}>
    Scalable & Flexible Services
    </h2>

    {/* Paragraph moves up into H1's position */}
    <p className={`absolute bottom-0 left-0 w-full ${colors.third} opacity-0 translate-y-full group-hover:translate-y-[-1rem] group-hover:opacity-100 transition-all duration-500`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
    </p>
  </article>
</section>
<section className={`border-[#1f0059] border p-6 rounded-2xl relative overflow-hidden transition-all duration-500 group`}>
  {/* Gradient Overlay */}
  <div className={`absolute inset-0  bg-gradient-to-br from-[#7a46c2] to-[#c084fc] opacity-20 group-hover:opacity-20 transition-all duration-500`}></div>



  {/* H1 Number */}
  <h1 className="text-3xl font-bold relative z-10">
    03
  </h1>

  {/* Small dots */}
  <div className="mt-4 flex gap-1 relative z-10">
    <div className={`${bgColors.secondary} w-1 h-1 rounded-full`}></div>
    <div className={`${bgColors.secondary} w-1 h-1 rounded-full`}></div>
    <div className={`${bgColors.secondary} w-1 h-1 rounded-full`}></div>
    <div className={`${bgColors.secondary} w-1/2 h-1 rounded-full`}></div>
  </div>

  {/* Text content */}
  <article className={`${colors.primary} relative z-10`}>
    <h2 className={`${colors.primary} pt-44 text-2xl transition-transform duration-500 group-hover:-translate-y-32`}>
    Client Satisfaction Guaranteed
    </h2>

    {/* Paragraph moves up into H1's position */}
    <p className={`absolute bottom-0 left-0 w-full ${colors.third} opacity-0 translate-y-full group-hover:translate-y-[-1rem] group-hover:opacity-100 transition-all duration-500`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
    </p>
  </article>
</section>
<section className={`border-[#1f0059] border p-6 rounded-2xl relative overflow-hidden transition-all duration-500 group`}>
  {/* Gradient Overlay */}
  <div className={`absolute inset-0 ${gradiant.secondary} bg-gradient-to-br from-[#7a46c2] to-[#c084fc] opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
<div className="absolute group-hover:opacity-0 group-hover:scale-0 -top-12 -left-12 w-28 h-28 bg-purple-400 opacity-20 rounded-full b"></div>
<div className="absolute top-12 right-4 w-4 h-4 bg-gradient-to-br group-hover:opacity-0 group-hover:scale-0 from-purple-400 to-purple-800 opacity-30 rounded-full"></div>
<div className="absolute top-1/2 -left-2 w-4 h-4 bg-gradient-to-br group-hover:opacity-0 group-hover:scale-0 from-purple-400 to-purple-800 opacity-30 rounded-full"></div>

  <div className={`absolute -bottom-12 -right-12 w-40 h-40 ${bgColors.secondary} opacity-10 group-hover:opacity-0 group-hover:scale-0 rounded-full blur-l`}></div>

  {/* H1 Number */}
  <h1 className="text-3xl font-bold relative z-10">
    04
  </h1>

  {/* Small dots */}
  <div className="mt-4 flex gap-1 relative z-10">
    <div className={`${bgColors.primary} w-1 h-1 rounded-full`}></div>
    <div className={`${bgColors.primary} w-1 h-1 rounded-full`}></div>
    <div className={`${bgColors.primary} w-1 h-1 rounded-full`}></div>
    <div className={`${bgColors.primary} w-1/2 h-1 rounded-full`}></div>
  </div>

  {/* Text content */}
  <article className={`${colors.primary} relative z-10`}>
    <h2 className={`${colors.primary} pt-44 text-2xl transition-transform duration-500 group-hover:-translate-y-32`}>
    Time-Saving & Cost-Effectives

    </h2>

    {/* Paragraph moves up into H1's position */}
    <p className={`absolute bottom-0 left-0 w-full ${colors.third} opacity-0 translate-y-full group-hover:translate-y-[-1rem] group-hover:opacity-100 transition-all duration-500`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
    </p>
  </article>
</section>




         
            
        </div>
        </div>
    );
};

export default WhyChoseUs;