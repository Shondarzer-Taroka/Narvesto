import Link from 'next/link';
import React from 'react';
import AboutSection from './AboutSection';
import HoverBoxes from './HoverBoxes';
import ExpertFields from './ExpertFields';

const AboutUs = () => {
  return (
    <section> 
    <div className="relative bg-cover bg-center h-[340px]" style={{ backgroundImage: 'url(https://html.kodesolution.com/2024/stratify-html/assets/images/banner/banner-inner.jpg)' }}>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">About Us</h1>
        <nav className="mt-4">
          <ol className="flex space-x-2 text-lg">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li>{'>'}</li>
            <li>About</li>
          </ol>
        </nav>
      </div>
    </div>


    <AboutSection/>
    <HoverBoxes/>
    <ExpertFields/>
    
    </section>
  );
};

export default AboutUs;
