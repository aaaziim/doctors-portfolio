import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from "../components/Translation";

// Import icons from react-icons
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookMessenger } from 'react-icons/fa';

const Contact = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className="container mx-auto pt-10">
        <div className="text-center mx-auto mb-10 max-w-xl">
          <h5 className="inline-block text-blue-600 uppercase border-b-4 border-blue-600 pb-1 mb-2">
            {translations[language].contact_title}
          </h5>
          <h1 className="text-4xl font-bold">
            {translations[language].contact_tagline}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Location */}
          <div className="bg-gray-100 rounded flex flex-col items-center justify-center text-center h-52 p-4">
            <div className="flex items-center justify-center bg-blue-600 rounded-full mb-4 w-24 h-16 transform -rotate-15">
              <FaMapMarkerAlt className="text-white text-3xl transform rotate-15" />
            </div>
            <h6 className="text-gray-700 text-sm">
              {translations[language].contact_address}
            </h6>
          </div>

          {/* Phone */}
          <div className="bg-gray-100 rounded flex flex-col items-center justify-center text-center h-52 p-4">
            <div className="flex items-center justify-center bg-blue-600 rounded-full mb-4 w-24 h-16 transform -rotate-15">
              <FaPhoneAlt className="text-white text-3xl transform rotate-15" />
            </div>
            <h6 className="text-gray-700 text-sm">
              {/* Clicking the number will open the dialer */}
              <a
                href={`tel:${translations[language].contact_serial}`}
                className="text-blue-600 hover:underline"
              >
                {translations[language].contact_serial}  
              </a>
            </h6>
          </div>

          {/* Messenger */}
          <div className="bg-gray-100 rounded flex flex-col items-center justify-center text-center h-52 p-4">
            <div className="flex items-center justify-center bg-blue-600 rounded-full mb-4 w-24 h-16 transform -rotate-15">
              <FaFacebookMessenger className="text-white text-3xl transform rotate-15" />
            </div>
            <h6 className="text-gray-700 text-sm">
              <a
                href="https://m.me/Dr.ShahidaBegumMinu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {translations[language].contact_messenger}
              </a>
            </h6>
          </div>
        </div>

        {/* Divider */}
        <div className="text-center mb-10">
          <h6 className="inline-block text-blue-600 uppercase border-t-4 border-blue-600 py-3"></h6>
        </div>

        {/* Google Map */}
        <div className="w-full h-[500px] flex flex-col items-center">
          <h6 className="text-blue-600 uppercase border-b-4 border-blue-600 inline-block mb-6">
          {translations[language].contact_map}
            Find us in Google Map
          </h6>
          <div className="relative w-full h-full px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6449501977727!2d90.36787037530435!3d22.70425747939814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553406755f3d71%3A0x1e1f747bcfa333e5!2sLABAID%20Diagnostic%20Barishal!5e0!3m2!1sen!2sbd!4v1745816856229!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
