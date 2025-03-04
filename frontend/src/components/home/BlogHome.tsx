import { colors } from '@/utilites/color';
import Image from 'next/image';
import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { MdPreview } from 'react-icons/md';
import { FiArrowRightCircle } from 'react-icons/fi';
import image from '@/asset/image/home/random4.jpg';
import image2 from '@/asset/image/home/random.jpg';
import image3 from '@/asset/image/home/random3.jpg';

const blogData = [
    {
        id: 1,
        title: 'Te nulla oportere reprimique his dolorum',
        date: 'June 4, 2020',
        views: '2.4K',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde pariatur beatae accusantium error aspernatur ad esse molestias? Delectus recusandae in molestiae, nobis ad quae velit ut, perspiciatis porro itaque alias magni, harum similique! Repellat ducimus, autem assumenda eius sapiente exercitationem veniam non dolor. Incidunt laudantium atque deserunt veritatis ipsa!",
        image: image,
        category:"Bussines"
    },
    {
        id: 2,
        title: 'Eiusmod tempor incididunt ut labore et dolore magna',
        date: 'July 10, 2021',
        views: '3.1K',
        description: 'Dolore magna aliqua. Ut enim ad minim veniam...',
        image: image2,
        category:"Invest"
    },
    {
        id: 3,
        title: 'Consectetur adipiscing elit, sed do eiusmod tempor',
        date: 'August 15, 2022',
        views: '1.8K',
        description: 'Incididunt ut labore et dolore magna aliqua...',
        image: image3,
        Category:"Imporvement"
    },
];

const BlogHome = () => {
    return (
        <div className='bg-gray-100 relative pt-28 overflow-hidden'>
            {/* Blob Background */}
            <div className='absolute top-0 left-0 w-60 h-60 bg-purple-200 opacity-25 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-80 h-80 bg-red-200 opacity-25 rounded-full blur-3xl'></div>
            
            <div className='px-4 md:px-0 container mx-auto relative z-10'>
                <section className='md:flex justify-between md:text-left text-center items-center'>
                    <div className='flex-1'>
                        <h1 className={`${colors.primary}`}>Latest Blog</h1>
                        <h1 className='md:text-4xl mt-2 text-2xl font-bold'>
                            Your Go-To <span className={`${colors.primary} italic`}>Resource</span> for Business Efficiency
                        </h1>
                    </div>
                    <p className='text-gray-700 mt-12 flex-1 text-sm'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti nihil consequatur dolorum explicabo. Dolor, fugiat ducimus. Quae tempore accusamus, ex voluptate eos facere rerum similique blanditiis deleniti, adipisci quia.
                    </p>
                </section>
                
                <section className='md:flex gap-8 mt-12'>
                    {/* Left Side - Single Large Blog */}
                    <div className='md:w-[40%] flex flex-col justify-between'>
                        <article className='shadow-lg pb-8 rounded-md bg-gray-50 h-full flex flex-col'>
                            <a href='#' className='overflow-hidden relative group'>
                                <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40'></div>
                                <Image alt='' className='object-cover w-full h-80 rounded-t-md transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3' src={blogData[0].image} width={500} height={320} />
                            </a>
                            <div className={`${colors.primary} flex px-6 justify-between pt-3 text-sm`}>
                                <div className='flex items-center gap-2'>
                                    <CiCalendar /> <span>{blogData[0].date}</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MdPreview /> <span>{blogData[0].views} views</span>
                                </div>
                            </div>
                            <div className='flex-1 p-6 flex flex-col'>
                                <h3 className='text-lg font-semibold'>{blogData[0].title}</h3>
                                <p className='mt-2'>{blogData[0].description.slice(0, 150)}...</p>
                            </div>
                            <p className={`${colors.secondary} flex gap-2 hover:text-[#1f0059] cursor-pointer items-center px-6`}>Read More <FiArrowRightCircle /></p>
                        </article>
                    </div>
                    
                    {/* Right Side - Two Smaller Blogs */}
                    <div className='md:w-[60%] flex flex-col gap-8 mt-8 md:mt-0'>
                        {blogData.slice(1).map((blog) => (
                            <article key={blog.id} className='shadow-lg rounded-md bg-gray-50 flex md:flex-row flex-col h-1/2'>
                                <a href='#' className='md:w-[50%] overflow-hidden relative group'>
                                    <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40'></div>
                                    <Image
                                        alt=''
                                        className={`object-cover w-full h-full transition-transform rounded-t-md  duration-1000 group-hover:scale-110 `}
                                        src={blog.image}
                                        width={500}
                                        height={300}
                                    />
                                </a>
                                <div className='p-6 flex flex-col justify-between flex-1'>
                                    <div className={`${colors.primary} flex justify-between text-sm`}>
                                        <div className='flex items-center gap-2'>
                                            <CiCalendar /> <span>{blog.date}</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <MdPreview /> <span>{blog.views} views</span>
                                        </div>
                                    </div>
                                    <h3 className='text-lg font-semibold mt-2'>{blog.title}</h3>
                                    <p className='text-gray-700 mt-2'>{blog.description}</p>
                                    <p className={`${colors.secondary} flex gap-2 hover:text-[#1f0059] cursor-pointer items-center`}>Read More <FiArrowRightCircle /></p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BlogHome;
