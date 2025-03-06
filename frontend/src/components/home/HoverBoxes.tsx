

'use client'
import React, { useState } from "react";
import clsx from "clsx";

const steps = [
  {
    id: "01",
    title: "We'll Visit You at Home",
    description: "Our expert will visit your place for an initial consultation.",
    image: "https://html.kodesolution.com/2024/stratify-html/assets/images/about/about-two-image.jpg",
  },
  {
    id: "02",
    title: "Initial Computer Designs",
    description: "We create digital prototypes to bring your ideas to life.",
    image: "https://html.kodesolution.com/2024/stratify-html/assets/images/consult/consult-image.jpg",
  },
  {
    id: "03",
    title: "Start the in-depth design process",
    description: "Our team begins crafting your project with precision.",
    image: "https://html.kodesolution.com/2024/stratify-html/assets/images/professional/professional-image.jpg",
  },
  {
    id: "04",
    title: "Assembly Home",
    description: "The final product is assembled and delivered to your location.",
    image: "https://html.kodesolution.com/2024/stratify-html/assets/images/choose/choose-one-image.jpg",
  },
];

const HoverBoxes = () => {
  const [bgImage, setBgImage] = useState(steps[0].image);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Boxes */}
      <div className="relative z-10 grid grid-cols-4 h-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={clsx(
              "flex flex-col justify-end items-center text-white p-6 cursor-pointer transition-all duration-500 border border-white/20 relative",
              "hover:bg-black/40"
            )}
            onMouseEnter={() => {
              setBgImage(step.image);
              setHoverIndex(index);
            }}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Step Number */}
            <h2 className="text-5xl font-bold opacity-50">{step.id}</h2>

            {/* Title */}
            <p className="text-lg mt-2 text-center opacity-55">{step.title}</p>

            {/* Animated Description */}
            <div
              className={clsx(
                "absolute bottom-0 left-0 w-full bg-black/60 p-4 text-sm text-center opacity-0 transform translate-y-full transition-all duration-500",
                hoverIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
              )}
            >
              {step.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverBoxes;
