

// import React from 'react';
// import { FaHeadset } from 'react-icons/fa';
// import { FiClock } from 'react-icons/fi';

// const VirtualAssistant = () => {
//   return (
//     <div className="relative w-full max-h-max md:h-[500px] bg-gradient-to-r from-purple-400 to-indigo-900 overflow-hidden flex items-center justify-center">
//       {/* Left Side Section */}
//       <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
//         <div className="text-white space-y-6">
//           <h1 className="text-4xl font-bold">
//             Your Personal <span className="opacity-55">Virtual Assistant,</span>
//             <br /> Anytime, Anywhere
//           </h1>
//           <div className="flex gap-4">
//             <img
//               src="https://audin2.creedcreatives.net/virtusync/wp-content/uploads/sites/8/2025/01/business-adviser-meeting-to-analyze-and-discuss-th-2025-01-10-05-29-09-utc-2.jpg"
//               alt="Business meeting"
//               className="w-[120px] rounded-lg shadow-lg object-cover"
//             />
//             <div>
//               <p className="text-lg">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
//               </p>
//               <button className="bg-[#e6e12a] mt-3 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition">
//                 Discover More
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Side Design */}
//         <div className="relative  flex flex-col md:flex-row items-center justify-center">
//           <img
//             src="https://audin2.creedcreatives.net/virtusync/wp-content/uploads/sites/8/2025/01/heo-char.png"
//             alt="Assistant"
//             className="w-[350px] "
//           />

//           {/* Tooltip Badges */}
//           <div className="absolute left-0 top-16 space-y-4">
//             <div className="flex items-center bg-[#e6e12a] text-black rounded-lg p-3 gap-2 shadow-lg hover:scale-105 transition">
//               <FaHeadset className="text-2xl" />
//               <span className="font-semibold">24/7 Support</span>
//             </div>

//             <div className="flex items-center bg-white text-black rounded-lg p-3 gap-2 shadow-lg hover:scale-105 transition">
//               <FiClock className="text-2xl text-purple-700" />
//               <span className="font-semibold">Quick Response</span>
//             </div>
//           </div>

//           {/* Performance Section */}
//           <div className="absolute right-0 bottom-10 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-52">
//             <h3 className="text-black font-semibold mb-2">Our Performance</h3>
//             <div className="mb-3">
//               <p className="text-sm text-black flex justify-between">
//                 Productivity Boost <span className="font-bold bg-indigo-800 text-white px-2 rounded-md">96%</span>
//               </p>
//               <div className="bg-gray-300 w-full h-2 rounded-full">
//                 <div className="bg-indigo-800 h-2 rounded-full w-[96%]"></div>
//               </div>
//             </div>

//             <div>
//               <p className="text-sm text-black flex justify-between">
//                 Client Satisfaction <span className="font-bold bg-[#e6e12a] text-black px-2 rounded-md">92%</span>
//               </p>
//               <div className="bg-gray-300 w-full h-2 rounded-full">
//                 <div className="bg-[#e6e12a] h-2 rounded-full w-[92%]"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VirtualAssistant;











// 'use client'
// import React from 'react';
// import { FaHeadset } from 'react-icons/fa';
// import { FiClock } from 'react-icons/fi';
// import { motion } from 'framer-motion';

// export const BannerNarvesto = () => {
//   // Progress Bar Animation Variants
//   const barVariants = {
//     hidden: { width: '0%' },
//     visible: (width: number) => ({
//       width: `${width}%`,
//       transition: { duration: 2, ease: 'easeInOut' },
//     }),
//   };

//   // Page Animation
//   const pageVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1, ease: 'easeInOut' },
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={pageVariants}
//       className="relative w-full max-h-max md:h-[500px] bg-gradient-to-r from-purple-400 to-indigo-900 overflow-hidden flex items-center justify-center"
//     >
//       <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
//         <div className="text-white space-y-6">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-4xl font-bold"
//           >
//             Your Personal <span className="opacity-55">Virtual Assistant,</span>
//             <br /> Anytime, Anywhere
//           </motion.h1>

//           <div className="flex gap-4">
//             <motion.img
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 1, delay: 0.4 }}
//               src="https://audin2.creedcreatives.net/virtusync/wp-content/uploads/sites/8/2025/01/business-adviser-meeting-to-analyze-and-discuss-th-2025-01-10-05-29-09-utc-2.jpg"
//               alt="Business meeting"
//               className="w-[120px] rounded-lg shadow-lg object-cover"
//             />
//             <div>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.6 }}
//                 className="text-lg"
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
//               </motion.p>
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="bg-[#e6e12a] mt-3 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition"
//               >
//                 Discover More
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         <div className="relative flex flex-col md:flex-row items-center justify-center">
//           <motion.img
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1, delay: 0.8 }}
//             src="https://audin2.creedcreatives.net/virtusync/wp-content/uploads/sites/8/2025/01/heo-char.png"
//             alt="Assistant"
//             className="w-[350px]"
//           />

//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="absolute left-0 top-16 space-y-4"
//           >
//             <div className="flex items-center bg-[#e6e12a] text-black rounded-lg p-3 gap-2 shadow-lg hover:scale-105 transition">
//               <span className="text-2xl">
//                 <FaHeadset />
//               </span>
//               <span className="font-semibold">24/7 Support</span>
//             </div>

//             <div className="flex items-center bg-white text-black rounded-lg p-3 gap-2 shadow-lg hover:scale-105 transition">
//               <span className="text-2xl text-purple-700">
//                 <FiClock />
//               </span>
//               <span className="font-semibold">Quick Response</span>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1.2 }}
//             className="absolute right-0 bottom-10 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-52"
//           >
//             <h3 className="text-black font-semibold mb-2">Our Performance</h3>
//             <div className="mb-3">
//               <p className="text-sm text-black flex justify-between">
//                 Productivity Boost <span className="font-bold bg-indigo-800 text-white px-2 rounded-md">96%</span>
//               </p>
//               <div className="bg-gray-300 w-full h-2 rounded-full">
//                 <motion.div
//                   custom={96}
//                   variants={barVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="bg-indigo-800 h-2 rounded-full"
//                 ></motion.div>
//               </div>
//             </div>

//             <div>
//               <p className="text-sm text-black flex justify-between">
//                 Client Satisfaction <span className="font-bold bg-[#e6e12a] text-black px-2 rounded-md">92%</span>
//               </p>
//               <div className="bg-gray-300 w-full h-2 rounded-full">
//                 <motion.div
//                   custom={92}
//                   variants={barVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="bg-[#e6e12a] h-2 rounded-full"
//                 ></motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };









// 'use client'
// import React from 'react';
// import { FaHeadset } from 'react-icons/fa';
// import { FiClock } from 'react-icons/fi';
// import { motion } from 'framer-motion';

// export const BannerNarvesto = () => {
//   // Progress Bar Animation Variants
//   const barVariants = {
//     hidden: { width: '0%' },
//     visible: (width: number) => ({
//       width: `${width}%`,
//       transition: { duration: 2, ease: 'easeInOut' },
//     }),
//   };

//   // Page Animation
//   const pageVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1, ease: 'easeInOut' },
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={pageVariants}
//       className="relative w-full max-h-max md:h-[500px] bg-gradient-to-r from-purple-400 to-indigo-900 overflow-hidden flex items-center justify-center bg-cover bg-center transition-transform duration-700"
//       style={{ backgroundImage: `url('https://audin2.creedcreatives.net/virtusync/wp-content/uploads/sites/8/2025/02/online-presentation-video-call-remote-conversati-2023-11-27-05-13-58-utc-1024x683.jpg')` }}
//     >
//       <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
//         <div className="text-white space-y-6">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-4xl font-bold"
//           >
//             Your Personal <span className="opacity-55">Virtual Assistant,</span>
//             <br /> Anytime, Anywhere
//           </motion.h1>

//           <div className="flex gap-4">
//             <motion.img
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 1, delay: 0.4 }}
//               src="https://audin2.creedcreatives.net/virtusync/wp-content/uploads/sites/8/2025/01/business-adviser-meeting-to-analyze-and-discuss-th-2025-01-10-05-29-09-utc-2.jpg"
//               alt="Business meeting"
//               className="w-[120px] rounded-lg shadow-lg object-cover "
//             />
//             <div>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.6 }}
//                 className="text-lg"
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
//               </motion.p>
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="bg-[#e6e12a] mt-3 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition"
//               >
//                 Discover More
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         <div className="relative flex flex-col md:flex-row items-center justify-center">
//           <motion.img
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1, delay: 0.8 }}
//             src="https://audin2.creedcreatives.net/virtusync/wp-content/uploads/sites/8/2025/01/heo-char.png"
//             alt="Assistant"
//             className="w-[350px]"
//           />

//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="absolute left-0 top-16 space-y-4"
//           >
//             <div className="flex items-center bg-[#e6e12a] text-black rounded-lg p-3 gap-2 shadow-lg hover:scale-105 transition">
//               <span className="text-2xl">
//                 <FaHeadset />
//               </span>
//               <span className="font-semibold">24/7 Support</span>
//             </div>

//             <div className="flex items-center bg-white text-black rounded-lg p-3 gap-2 shadow-lg hover:scale-105 transition">
//               <span className="text-2xl text-purple-700">
//                 <FiClock />
//               </span>
//               <span className="font-semibold">Quick Response</span>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 1.2 }}
//             className="absolute right-0 bottom-10 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-52"
//           >
//             <h3 className="text-black font-semibold mb-2">Our Performance</h3>
//             <div className="mb-3">
//               <p className="text-sm text-black flex justify-between">
//                 Productivity Boost <span className="font-bold bg-indigo-800 text-white px-2 rounded-md">96%</span>
//               </p>
//               <div className="bg-gray-300 w-full h-2 rounded-full">
//                 <motion.div
//                   custom={96}
//                   variants={barVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="bg-indigo-800 h-2 rounded-full"
//                 ></motion.div>
//               </div>
//             </div>

//             <div>
//               <p className="text-sm text-black flex justify-between">
//                 Client Satisfaction <span className="font-bold bg-[#e6e12a] text-black px-2 rounded-md">92%</span>
//               </p>
//               <div className="bg-gray-300 w-full h-2 rounded-full">
//                 <motion.div
//                   custom={92}
//                   variants={barVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="bg-[#e6e12a] h-2 rounded-full"
//                 ></motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };















'use client'
import React from 'react';
import { FaHeadset } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const BannerNarvesto = () => {
  // Progress Bar Animation Variants
  const barVariants = {
    hidden: { width: '0%' },
    visible: (width: number) => ({
      width: `${width}%`,
      transition: { duration: 2, ease: 'easeInOut' },
    }),
  };

  // Page Animation
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="relative w-full max-h-max md:h-[500px] bg-gradient-to-r from-purple-400 to-indigo-900 overflow-hidden flex items-center justify-center bg-cover bg-center transition-transform duration-700"
      style={{ backgroundImage: `url('https://audin2.creedcreatives.net/virtusync/wp-content/uploads/sites/8/2025/02/online-presentation-video-call-remote-conversati-2023-11-27-05-13-58-utc-1024x683.jpg')` }}
    >
      <div className="absolute inset-0 bg-[#0000006d] bg-opacity-50"></div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-10 relative z-10">
        <div className="text-white space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl font-bold"
          >
            Your Personal <span className="opacity-55">Virtual Assistant,</span>
            <br /> Anytime, Anywhere
          </motion.h1>

          <div className="flex gap-4">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              src="https://audin2.creedcreatives.net/virtusync/wp-content/uploads/sites/8/2025/01/business-adviser-meeting-to-analyze-and-discuss-th-2025-01-10-05-29-09-utc-2.jpg"
              alt="Business meeting"
              className="w-[120px] rounded-lg shadow-lg object-cover"
            />
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-lg"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#e6e12a] mt-3 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition"
              >
                Discover More
              </motion.button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            src="https://audin2.creedcreatives.net/virtusync/wp-content/uploads/sites/8/2025/01/heo-char.png"
            alt="Assistant"
            className="w-[350px]"
          />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute left-0 top-16 space-y-4"
          >
            <div className="flex items-center bg-[#e6e12a] text-black rounded-lg p-3 gap-2 shadow-lg hover:scale-105 transition">
              <span className="text-2xl">
                <FaHeadset />
              </span>
              <span className="font-semibold">24/7 Support</span>
            </div>

            <div className="flex items-center bg-white text-black rounded-lg p-3 gap-2 shadow-lg hover:scale-105 transition">
              <span className="text-2xl text-purple-700">
                <FiClock />
              </span>
              <span className="font-semibold">Quick Response</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute right-0 bottom-10 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-52"
          >
            <h3 className="text-black font-semibold mb-2">Our Performance</h3>
            <div className="mb-3">
              <p className="text-sm text-black flex justify-between">
                Productivity Boost <span className="font-bold bg-indigo-800 text-white px-2 rounded-md">96%</span>
              </p>
              <div className="bg-gray-300 w-full h-2 rounded-full">
                <motion.div
                  custom={96}
                  variants={barVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-indigo-800 h-2 rounded-full"
                ></motion.div>
              </div>
            </div>

            <div>
              <p className="text-sm text-black flex justify-between">
                Client Satisfaction <span className="font-bold bg-[#e6e12a] text-black px-2 rounded-md">92%</span>
              </p>
              <div className="bg-gray-300 w-full h-2 rounded-full">
                <motion.div
                  custom={92}
                  variants={barVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-[#e6e12a] h-2 rounded-full"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
