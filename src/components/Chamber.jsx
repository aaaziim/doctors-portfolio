import React, { useContext } from "react";
import {
  FaStethoscope,
  FaSyringe,
  FaAmbulance,
  FaUserMd,
} from "react-icons/fa"; // New icons
import { LanguageContext } from "../context/LanguageContext";
import translations from "./Translation.js";

const Chamber = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="text-center space-y-4 mb-12">
        <h3 className="text-2xl uppercase font-semibold text-teal-600">
          {translations[language].chamber_title}
        </h3>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
        {/* Chamber Card */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-teal-500 to-teal-300 text-white p-6 rounded-full mb-4">
            <FaStethoscope className="text-4xl" />
          </div>
          <p className="text-xl font-semibold text-center mb-4">
            {" "}
            {translations[language].chamber__name}
          </p>
          <p className="text-center text-gray-700">
            {translations[language].chamber_title}
          </p>
          <p className="text-center text-gray-700">
            {translations[language].chamber_address}
          </p>
          <p className="text-center text-gray-700">
            {translations[language].visiting_hour}
          </p>
        </div>

        {/* Appointment Card */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-teal-500 to-teal-300 text-white p-6 rounded-full mb-4">
            <FaSyringe className="text-4xl" />
          </div>
          <p className="text-3xl font-semibold text-center mb-4">
            {translations[language].appointment_title}
          </p>
          <p className="text-xl font-semibold text-center mb-4">
            {translations[language].appointment_tag}
          </p>
          <button
            className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition-all duration-300 ease-in-out"
            onClick={() => (window.location.href = "tel:+8801766663305")}
          >
          {translations[language].appointment_btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chamber;
