'use client';
import React from "react";
import { FaPencilAlt, FaDollarSign, FaChartBar, FaUsers } from "react-icons/fa";
import clsx from "clsx";

const services = [
  {
    id: 1,
    title: "Business Strategy and Planning",
    description: "Business Consulting, Strategy, Branding Identity, Interaction Design & Development, & SEO",
    image: "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg",
    icon: <FaPencilAlt />,
  },
  {
    id: 2,
    title: "International Business Consulting",
    description: "Financial Consulting, Insurance Consulting, Financial Management, Investment",
    image: "https://images.pexels.com/photos/3777556/pexels-photo-3777556.jpeg",
    icon: <FaDollarSign />,
  },
  {
    id: 3,
    title: "E-Commerce and Market",
    description: "Analysis Market, E-Commerce Strategy, Consumer Consulting",
    image: "https://images.pexels.com/photos/6483581/pexels-photo-6483581.jpeg",
    icon: <FaChartBar />,
  },
  {
    id: 4,
    title: "Human Resources and Management",
    description: "HR Consulting, Legal Advice, and Business Management SEO",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    icon: <FaUsers />,
  },
];

const ExpertFields = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900">We Are Experts in Our Fields</h2>
        <p className="text-gray-600 mt-2">
          True experts in the field will offer you the best strategy to navigate your investments.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={clsx(
              "relative group space-y-4 transition-transform duration-300 cursor-pointer",
              index % 2 === 1 ? "mt-10" : "mt-0" // Push even items down
            )}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full transition-transform duration-300 group-hover:rotate-180">
              {service.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
            {/* Image Wrapper */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Description */}
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertFields;

















// 'use client';
// import React from "react";
// import { FaPencilAlt, FaDollarSign, FaChartBar, FaUsers } from "react-icons/fa";
// import clsx from "clsx";

// const services = [
//   {
//     id: 1,
//     title: "Business Strategy and Planning",
//     description: "Business Consulting, Strategy, Branding Identity, Interaction Design & Development, & SEO",
//     image: "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg",
//     icon: <FaPencilAlt />,
//   },
//   {
//     id: 2,
//     title: "International Business Consulting",
//     description: "Financial Consulting, Insurance Consulting, Financial Management, Investment",
//     image: "https://images.pexels.com/photos/3777556/pexels-photo-3777556.jpeg",
//     icon: <FaDollarSign />,
//   },
//   {
//     id: 3,
//     title: "E-Commerce and Market",
//     description: "Analysis Market, E-Commerce Strategy, Consumer Consulting",
//     image: "https://images.pexels.com/photos/6483581/pexels-photo-6483581.jpeg",
//     icon: <FaChartBar />,
//   },
//   {
//     id: 4,
//     title: "Human Resources and Management",
//     description: "HR Consulting, Legal Advice, and Business Management SEO",
//     image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
//     icon: <FaUsers />,
//   },
// ];

// const ExpertFields = () => {
//   return (
//     <section className="container mx-auto px-6 py-16">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-semibold text-gray-900">We Are Experts in Our Fields</h2>
//         <p className="text-gray-600 mt-2">
//           True experts in the field will offer you the best strategy to navigate your investments.
//         </p>
//       </div>

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {services.map((service, index) => (
//           <div
//             key={service.id}
//             className={clsx(
//               "relative group space-y-4 transition-transform duration-300",
//               index % 2 === 1 ? "mt-10" : "mt-0" // Push even items down
//             )}
//           >
//             {/* Icon */}
//             <div
//               className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full transition-transform duration-300 group-hover:rotate-180"
//             >
//               {service.icon}
//             </div>
//             {/* Title */}
//             <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
//             {/* Image */}
//             <img src={service.image} alt={service.title} className="w-full h-60 object-cover rounded-lg" />
//             {/* Description */}
//             <p className="text-gray-600">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ExpertFields;
