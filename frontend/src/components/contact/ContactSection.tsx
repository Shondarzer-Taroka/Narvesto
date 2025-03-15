import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaSkype } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-[#f3edf9] p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FiPhone className="text-gray-800 w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Call Number</h3>
              <p className="text-gray-600">+25 2551 3694</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FiMail className="text-gray-800 w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
              <p className="text-gray-600">virtusync@mail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FiMapPin className="text-gray-800 w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Office Address</h3>
              <p className="text-gray-600">Ulitsa Lyuksemburg, Tomsk Oblast, Russia</p>
            </div>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Follow Our Social Media</h3>
            <div className="flex gap-4 mt-2 text-gray-800">
              <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-gray-500" />
              <FaPinterestP className="w-6 h-6 cursor-pointer hover:text-gray-500" />
              <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-gray-500" />
              <FaSkype className="w-6 h-6 cursor-pointer hover:text-gray-500" />
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <iframe
            title="Google Map"
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.79301653024!2d-0.24168102568744824!3d51.52873980572898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bcd23bc309f%3A0x1933e765f12db7e5!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1710958697426!5m2!1sen!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
