'use client'
import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.1); // Adjust speed factor
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-12 px-6 lg:px-20 py-16">
      {/* Left Side: Image and Text */}
      <div className="flex-1 flex flex-col justify-between">
        <h5 className="text-gray-600 uppercase text-sm font-semibold">About Stratify</h5>
        <h2 className="text-4xl font-bold mt-2">
          We work with you to Make your <br /> Vision a Reality
        </h2>
        <div className="mt-6 overflow-hidden">
          <img
            src="https://html.kodesolution.com/2024/stratify-html/assets/images/about/about-two-image.jpg"
            alt="Business Team"
            className="w-full h-auto shadow-lg transform"
            style={{ transform: `translateY(${offset}px)`, transition: "transform 0.2s ease-out" }}
          />
        </div>
        
      </div>

      {/* Right Side: Content */}
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="text-4xl font-bold">
          We offer solutions that create <br />
          Significant opportunities for the <br />
          growth of your business.
        </h2>
        <p className="text-gray-600 mt-4">
          Being a prominent retail digital marketing company, we offer a variety of services
          to retail brands. We help our clients create strategic and highly effective retail
          marketing strategies. Results-oriented retail digital marketing campaigns.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Strategic Analysis for Businesses
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> 24/7 Support at Any Time
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Exceptional Atmosphere
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Complimentary Breakfast
            </li>
          </ul>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Orientation for Business
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> No Booking Fees
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Exceptional Atmosphere
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Analyze the Problems You are Facing
            </li>
          </ul>
        </div>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
