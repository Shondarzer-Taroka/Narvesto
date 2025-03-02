import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import ProductCard from './Investment';
import { colors } from '@/utilites/color';

const investPlace = [
    {
        companyName: 'RTX Furniture',
        image: 'https://example.com/rtx-furniture.png',
        location: 'Dhaka, Bangladesh',
        details: 'Premium quality wooden and metal furniture manufacturer.',
        avlSlot: 23,
        totalSlot: 49,
        slotPrice: 2300,
        investmentType: 'Manufacturing',
        slotOwner: [{ name: 'Ab Kayeum', email: 'ab@gmail.com' }]
    },
    {
        companyName: 'Tech Innovators',
        image: 'https://example.com/tech-innovators.png',
        location: 'Silicon Valley, USA',
        details: 'A leading startup in AI and automation technology.',
        avlSlot: 15,
        totalSlot: 50,
        slotPrice: 5000,
        investmentType: 'Technology',
        slotOwner: [{ name: 'John Doe', email: 'john@example.com' }]
    },
    {
        companyName: 'Green Energy Corp',
        image: 'https://example.com/green-energy.png',
        location: 'Berlin, Germany',
        details: 'Renewable energy solutions for a sustainable future.',
        avlSlot: 30,
        totalSlot: 60,
        slotPrice: 4000,
        investmentType: 'Renewable Energy',
        slotOwner: [{ name: 'Alice Smith', email: 'alice@example.com' }]
    },

    {
        companyName: 'Green Energy Corp',
        image: 'https://example.com/green-energy.png',
        location: 'Berlin, Germany',
        details: 'Renewable energy solutions for a sustainable future.',
        avlSlot: 30,
        totalSlot: 60,
        slotPrice: 4000,
        investmentType: 'Renewable Energy',
        slotOwner: [{ name: 'Alice Smith', email: 'alice@example.com' }]
    },
    {
        companyName: 'Green Energy Corp',
        image: 'https://example.com/green-energy.png',
        location: 'Berlin, Germany',
        details: 'Renewable energy solutions for a sustainable future.',
        avlSlot: 30,
        totalSlot: 60,
        slotPrice: 4000,
        investmentType: 'Renewable Energy',
        slotOwner: [{ name: 'Alice Smith', email: 'alice@example.com' }]
    },
    {
        companyName: 'Green Energy Corp',
        image: 'https://example.com/green-energy.png',
        location: 'Berlin, Germany',
        details: 'Renewable energy solutions for a sustainable future.',
        avlSlot: 30,
        totalSlot: 60,
        slotPrice: 4000,
        investmentType: 'Renewable Energy',
        slotOwner: [{ name: 'Alice Smith', email: 'alice@example.com' }]
    },
];

const InvestmentOpportunity: React.FC = () => {
    return (
        <div className='container p-8 mt-16 mx-auto'>
            {/* Heading Section */}
            <div className="text-center mb-8">
                <h1 className={`text-3xl font-semibold ${colors.primary}`}>Explore Investment Opportunities</h1>
                <p className="mt-2 text-lg text-gray-600">Invest in a wide range of industries including Manufacturing, Technology, and Renewable Energy. Secure your slot today and grow your portfolio with the right opportunities!</p>
            </div>

            <Carousel>
                <div className='mx-auto'>
                    <CarouselContent>
                        {investPlace.map((item, idx) => (
                            <CarouselItem key={idx} className="md:basis-1/2 w-full lg:basis-1/3">
                                {/* Pass item as a prop to ProductCard */}
                                <ProductCard item={item} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </div>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default InvestmentOpportunity;
