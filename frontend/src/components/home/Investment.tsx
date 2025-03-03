"use client"
import React from "react";
import {  IoLocationOutline } from "react-icons/io5";
import {  IoMdHeartEmpty } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import Image from "next/image";
import { Progress } from "../ui/progress";
import img from '@/asset/image/home/product.webp';
import { bgColors } from "@/utilites/color";


// Dynamic color variable
interface ProductCardProps {
    item: {
        companyName: string;
        image: string;
        location: string;
        details: string;
        avlSlot: number;
        totalSlot: number;
        slotPrice: number;
        investmentType: string;
        slotOwner: { name: string; email: string }[];
    };
}


const ProductCard: React.FC<ProductCardProps> = () => {
   

    return (
        <div className="border border-gray-300 rounded-xl p-4 w-full bg-white  transition ">
            {/* Product Image */}
            <div className="relative">
                <Image alt="product/image" src={img} className="rounded-xl w-full h-56 object-cover" />

                {/* Category Tag */}
                <div className="mt-4">
                        <div>
                            <p className={`${bgColors.third} p-2 rounded inline text-black bg-[#fb257749]`}>Architecture</p>
                        </div>
                     </div>

                {/* Favorite Icon */}
                <div className="p-2 rounded-full bg-gray-600 absolute top-2 right-2 cursor-pointer">
                    
                        <IoMdHeartEmpty/>
                            
                      
                </div>
            </div>

            {/* Product Details */}
            <div className="mt-4 p-2">
                <h3 className="text-xl font-semibold text-gray-900">
                    Criphin - Contemporary Business Keynote
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus leo.
                </p>

                {/* Progress Bar */}
                <div className="mt-4">
                    <Progress bookedSlots={35} totalSlots={50} />
                </div>

                {/* Location & Company */}
                <div className="flex items-center gap-4 text-gray-700 text-sm mt-3">
                    <div className="flex items-center gap-1">

                        <div className="text-[1.2rem] text-gray-500">
                        <IoLocationOutline  /> 
                        </div>
                   
                        <span>Dhakca, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-1">

                        <div className="text-[1.2rem] text-gray-500">
                        <FaBuilding  />
                        </div>
                        
                        <span>Skyline Ltd.</span>
                    </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="flex items-center justify-between mt-5">
                    <div>
                        <span className="text-gray-400 text-sm">168 Sales</span>
                        <p className="text-lg font-semibold text-[${colors.primary}]">$52.00</p>
                    </div>

                    <div className="flex items-center gap-2">
                       

                        <button
                            className={`py-2 text-white px-4 border ${bgColors.primary} hover: hover:text-white rounded-md flex items-center gap-2 text-sm  transition-all`}
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
