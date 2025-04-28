import React, { useContext } from "react";
import doctorImg from "../assets/about.jpg";
import {
  FaUserTie,
  FaGraduationCap,
  FaStethoscope,
  FaHeartbeat,
} from "react-icons/fa"; // Import relevant icons

import translations from "./Translation.js";
import { LanguageContext } from "../context/LanguageContext.jsx";
const About = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="about" className="flex flex-col  md:flex-row gap-4 my-20">
      <div className="w-1/3">
        <img className="h-96 " src={doctorImg} alt="" />
      </div>
      <div className=" w-2/3 space-y-4">
        <h2 className="text-2xl uppercase font-semibold">
          {translations[language].about_title}
        </h2>
        <h2 className="text-4xl font-bold">
          {translations[language].about_tagline}
        </h2>
        <p>{translations[language].about_text}</p>

        <div className="my-10 grid grid-cols-2 gap-4">
          {/* 29 Years Experience */}
          <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-teal-500 to-teal-300 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-4xl mb-3">
              <FaUserTie />
            </div>
            <p className="text-lg font-semibold text-center">
              {" "}
              {translations[language].experience}
            </p>
          </div>

          {/* Qualifications */}
          <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-teal-500 to-teal-300 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-4xl mb-3">
              <FaGraduationCap />
            </div>
            <p className="text-lg font-semibold text-center">
              {" "}
              {translations[language].degree1} ,{translations[language].degree2}
            </p>
          </div>

          {/* Specializations */}
          <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-teal-500 to-teal-300 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-4xl mb-3">
              <FaStethoscope />
            </div>
            <p className="text-lg font-semibold text-center">
              {" "}
              {translations[language].degree3} ,{" "}
              {translations[language].degree4}
            </p>
          </div>

          {/* Specialization in Infertility and Cancer Treatment */}
          <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-teal-500 to-teal-300 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="text-4xl mb-3">
              <FaHeartbeat />
            </div>
            <p className="text-lg font-semibold text-center">
            {translations[language].special_training}
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default About;
