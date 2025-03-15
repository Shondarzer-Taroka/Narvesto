


import { FaUserFriends, FaHeadset, FaIndustry } from "react-icons/fa";

const ContactHero = () => {
  return (
    <div className="flex justify-center items-center rounded-xl h-full bg-gradient-to-r from-[#5f1d97] to-[#6233a7] p-6">
      <div className=" text-white p-10 rounded-3xl max-w-3xl relative">
        {/* Background Wavy Effect */}
        <div className="absolute inset-0 opacity-30">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
            <path fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1"
              d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,149.3C672,128,768,96,864,106.7C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z">
            </path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-sm font-medium text-gray-300 mb-2">Let's Make Your Life Easier!</p>
          <h1 className="text-3xl font-bold">
            Say Goodbye to Overwhelm – Hire <i>Your</i> VA Today!
          </h1>

          {/* Stats */}
          <div className="flex justify-between items-center mt-6 space-x-4">
            <div className="flex flex-col items-center">
              <FaUserFriends className="text-2xl mb-2" />
              <p className="text-lg font-semibold">614 K</p>
              <p className="text-sm text-gray-300">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHeadset className="text-2xl mb-2" />
              <p className="text-lg font-semibold">254 M</p>
              <p className="text-sm text-gray-300">Trusted Partners</p>
            </div>
            <div className="flex flex-col items-center">
              <FaIndustry className="text-2xl mb-2" />
              <p className="text-lg font-semibold">78 K</p>
              <p className="text-sm text-gray-300">Industries Served</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-[#6233a7] transition">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
