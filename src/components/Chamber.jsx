import React from 'react';
import { FaStethoscope, FaSyringe, FaAmbulance, FaUserMd } from 'react-icons/fa'; // New icons

const Chamber = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="text-center space-y-4 mb-12">
        <h3 className="text-2xl uppercase font-semibold text-teal-600">Find at</h3>
    
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
        {/* Chamber Card */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-teal-500 to-teal-300 text-white p-6 rounded-full mb-4">
            <FaStethoscope className="text-4xl" />
          </div>
          <p className="text-xl font-semibold text-center mb-4">Chamber</p>
          <p className="text-center text-gray-700">Lab Aid <br />
            Address: 5th Floor, Room no: 607, K Jahan Center, House-106, Sadar Road, Barisal - 8200 <br />
            Visiting Hour: 9:30am to 2:00pm. (Saturday - Thursday)
          </p>
        </div>

        {/* Appointment Card */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-r from-teal-500 to-teal-300 text-white p-6 rounded-full mb-4">
            <FaSyringe className="text-4xl" />
          </div>
          <p className="text-xl font-semibold text-center mb-4">Make an Appointment</p>
          <button 
            className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition-all duration-300 ease-in-out"
            onClick={() => window.location.href = 'tel:+8801766663305'}
          >
            Call Now
          </button>
        </div>

      
      
      </div>
    </div>
  );
};

export default Chamber;
