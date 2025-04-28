import React, { useContext } from 'react';
import { FaStethoscope, FaSyringe, FaAmbulance, FaUserMd } from 'react-icons/fa'; // New icons

import translations from "./Translation.js";
import { LanguageContext } from "../context/LanguageContext.jsx";
const Services = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="text-center space-y-4 mb-12">
        <h3 className="text-2xl uppercase font-semibold text-teal-600">
        {translations[language].service_title}
        </h3>
        <h2 className="text-4xl font-bold text-gray-900"> {translations[language].service_tagline}</h2>
      </div>

      {/* Services Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* Service 1: Outdoor Checkup */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-teal-500 to-teal-300 text-white p-6 rounded-full mb-4">
            <FaStethoscope className="text-4xl" />
          </div>
          <p className="text-xl font-semibold text-center mb-4">
          {translations[language].service1}
          </p>
     
        </div>

        {/* Service 2: Operation & Surgery */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-teal-500 to-teal-300 text-white p-6 rounded-full mb-4">
            <FaSyringe className="text-4xl" />
          </div>
          <p className="text-xl font-semibold text-center mb-4">
          {translations[language].service2}

            </p>
    
        </div>

        {/* Service 3: Emergency Care */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-teal-500 to-teal-300 text-white p-6 rounded-full mb-4">
            <FaAmbulance className="text-4xl" />
          </div>
          <p className="text-xl font-semibold text-center mb-4">
          {translations[language].service3}

            </p>
        
        </div>
 
      </div>
    </div>
  );
};

export default Services;
