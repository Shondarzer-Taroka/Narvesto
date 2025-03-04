"use client";

import { useState } from "react";
import { bgColors, colors } from "@/utilites/color";
import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";
import { ChevronDownIcon } from "lucide-react";
import img from "@/asset/image/home/accoromdion.avif";
import { cn } from "@/lib/utils";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "Is it accessible?", answer: "Yes. It adheres to the WAI-ARIA design pattern." },
    { question: "Can I use it for commercial projects?", answer: "Yes, it's fully free to use!" },
    { question: "Does it support animations?", answer: "Of course! It has smooth transitions." },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container px-4 md:px-0 grid gap-4 items-center md:grid-cols-3 mx-auto">
        {/* FAQ Section */}
        <section>
          <h4 className={`${colors.primary} font-medium text-lg`}>{`Faq's`}</h4>
          <h1 className={`md:text-4xl ${colors.primary} mt-6 text-2xl font-bold`}>
            Got Questions? We’ve Got <span className={`italic ${colors.secondary}`}>Answers</span>!
          </h1>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </section>

        {/* Image with Play Button */}
        <section className="relative">
          <Image src={img} alt="img" className="rounded-md" />
          <div className={`${bgColors.primary} absolute top-1/2 left-[45%] w-12 rounded-full mx-auto text-center text-white animate-pulse`}>
            
            <div className=" ml-1 p-2">
            <CiPlay1 size={40}  />
            </div>
            
          </div>
        </section>

        {/* Custom Accordion */}
        <section className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg overflow-hidden shadow-md border transition-all duration-500",
                openIndex === index ? "bg-gradient-to-br from-[#14032f82] to-[#9233eae3]" : bgColors.primary
              )}
            >
              <button
                className="w-full flex justify-between items-center font-medium p-4 text-left text-white transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <ChevronDownIcon
                  className={cn(
                    "size-5 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              {/* Smooth Transition Fix */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openIndex === index ? "max-h-[200px] p-4 opacity-100 bg-white text-gray-800" : "max-h-0 opacity-0"
                )}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default FAQAccordion;
