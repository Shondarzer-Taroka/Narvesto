'use client'
import React, { useState } from "react";
import clsx from "clsx";

const steps = [
  {
    id: "01",
    title: "We'll Visit You at Home",
    image: "https://html.kodesolution.com/2024/stratify-html/assets/images/about/about-two-image.jpg",
  },
  {
    id: "02",
    title: "Initial Computer Designs",
    image: "https://html.kodesolution.com/2024/stratify-html/assets/images/consult/consult-image.jpg",
  },
  {
    id: "03",
    title: "Start the in-depth design process",
    image: "https://html.kodesolution.com/2024/stratify-html/assets/images/professional/professional-image.jpg",
  },
  {
    id: "04",
    title: "Assembly Home",
    image: "https://html.kodesolution.com/2024/stratify-html/assets/images/choose/choose-one-image.jpg",
  },
];

const HoverBoxes = () => {
  const [bgImage, setBgImage] = useState(steps[0].image);

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 grid grid-cols-4 h-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={clsx(
              "flex flex-col justify-center items-center text-white p-6 cursor-pointer transition-all duration-500",
              "hover:bg-black/40"
            )}
            onMouseEnter={() => setBgImage(step.image)}
          >
            <h2 className="text-5xl font-bold opacity-50">{step.id}</h2>
            <p className="text-lg mt-2 text-center">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverBoxes;
