import React, { useContext } from "react";
import doctorImg from "../assets/banner1.jpg"; // Your local image
import { Link } from "react-router-dom";

import translations from "./Translation.js";
import { LanguageContext } from "../context/LanguageContext.jsx";
const Hero = () => {
    const { language } = useContext(LanguageContext);
  return (
    <div className="carousel w-full relative h-[500px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="w-full h-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${doctorImg})` }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(rgba(72, 0, 72, 0.8), rgba(192, 72, 72, 0.8))",
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-10 lg:px-24">
            <div className="max-w-xl text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold">
              {translations[language].chamber_name}

              </h1>
              <p className="text-lg">
              {translations[language].doctor_tagline}

              </p>
              <div className="flex gap-4">
                <Link
                  to="/appointment"
                  className="px-8 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white shadow-xl hover:bg-teal-600 hover:shadow-2xl transform transition-all duration-300 ease-in-out"
                >
                       {translations[language].appointment_title}

                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-teal-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                 {translations[language].service_title}
                </Link>
              </div>
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="absolute bottom-4 right-4 z-20 flex space-x-4">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="w-full h-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${doctorImg})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(rgba(72, 0, 72, 0.8), rgba(192, 72, 72, 0.8))",
            }}
          ></div>
          <div className="relative z-10 h-full flex items-center px-10 lg:px-24">
            <div className="max-w-xl text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Trusted Care for Every Stage of Womanhood
              </h1>
              <p className="text-lg">
                We specialize in personalized healthcare tailored to your needs.
              </p>
                 <div className="flex gap-4">
                <Link
                  to="/appointment"
                  className="px-8 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white shadow-xl hover:bg-teal-600 hover:shadow-2xl transform transition-all duration-300 ease-in-out"
                >
                       {translations[language].appointment_title}

                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-teal-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                 {translations[language].service_title}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 z-20 flex space-x-4">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Slide 3 (can repeat or add new content) */}
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="w-full h-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${doctorImg})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(rgba(72, 0, 72, 0.8), rgba(192, 72, 72, 0.8))",
            }}
          ></div>
          <div className="relative z-10 h-full flex items-center px-10 lg:px-24">
            <div className="max-w-xl text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Empowering Women's Health
              </h1>
              <p className="text-lg">
                Our dedicated team ensures high-quality care for every woman.
              </p>
                 <div className="flex gap-4">
                <Link
                  to="/appointment"
                  className="px-8 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white shadow-xl hover:bg-teal-600 hover:shadow-2xl transform transition-all duration-300 ease-in-out"
                >
                       {translations[language].appointment_title}

                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-teal-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                 {translations[language].service_title}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 z-20 flex space-x-4">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Slide 4 (optional extra) */}
      <div id="slide4" className="carousel-item relative w-full">
        <div
          className="w-full h-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${doctorImg})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(rgba(72, 0, 72, 0.8), rgba(192, 72, 72, 0.8))",
            }}
          ></div>
          <div className="relative z-10 h-full flex items-center px-10 lg:px-24">
            <div className="max-w-xl text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Your Health, Our Priority
              </h1>
              <p className="text-lg">
                Quality care and support every step of your healthcare journey.
              </p>
                 <div className="flex gap-4">
                <Link
                  to="/appointment"
                  className="px-8 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white shadow-xl hover:bg-teal-600 hover:shadow-2xl transform transition-all duration-300 ease-in-out"
                >
                       {translations[language].appointment_title}

                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-teal-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                 {translations[language].service_title}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 z-20 flex space-x-4">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
