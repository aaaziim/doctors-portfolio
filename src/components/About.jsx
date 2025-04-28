import React from "react";
import doctorImg from "../assets/about.jpg";
import { FaUserTie, FaGraduationCap, FaStethoscope, FaHeartbeat } from 'react-icons/fa'; // Import relevant icons

const About = () => {
  return (
    <div className="flex flex-col  md:flex-row gap-4 my-20">
      <div>
        <img className="h-96 " src={doctorImg} alt="" />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl uppercase font-semibold">
          About Dr. Shahida Begum Minu
        </h2>
        <h2 className="text-4xl font-bold">
          Best Medical Care For Yourself and Your Family
        </h2>
        <p>
          Dr. Shahida Begum Minu is Gynecologist Consultant at Lab Aid Barisal.
          She holds degrees in medicine from MBBS, DGO, MCPS(OBGYN), and FCPS
          (OBGYN). She is specially trained in Infertility and Gynecological
          Cancer Treatment and registered with the BMDC under registration
          number 25751. She has 27 years of experience after receiving her MBBS
          degree and 21 years of experience after receiving her postgraduate
          degree. She has worked in several notable hospitals in Bangladesh and
          Saudi Arabia. Her most recent position was as the department head in
          the Department of Gynecology & Obstetrics at Khwaja Yunus Ali Medical
          College & Hospital. She treats her patients at Labaid Diagnostic in
          Barisal from 9:30am to 2:00pm. (Saturday - Thursday)
        </p>

        <div className="my-10 grid grid-cols-2 gap-4">
      {/* 29 Years Experience */}
      <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-teal-500 to-teal-300 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-4xl mb-3">
          <FaUserTie />
        </div>
        <p className="text-lg font-semibold">29 Years Experience</p>
      </div>

      {/* Qualifications */}
      <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-teal-500 to-teal-300 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-4xl mb-3">
          <FaGraduationCap />
        </div>
        <p className="text-lg font-semibold">MBBS, DGO</p>
      </div>

      {/* Specializations */}
      <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-teal-500 to-teal-300 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-4xl mb-3">
          <FaStethoscope />
        </div>
        <p className="text-lg font-semibold">MCPS(OBGYN), FCPS(OBGYN)</p>
      </div>

      {/* Specialization in Infertility and Cancer Treatment */}
      <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-teal-500 to-teal-300 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-4xl mb-3">
          <FaHeartbeat />
        </div>
        <p className="text-lg font-semibold">Specially trained in Infertility and Gynecological Cancer Treatment</p>
      </div>
    </div>

        <div></div>
      </div>
    </div>
  );
};

export default About;
