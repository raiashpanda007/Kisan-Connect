import React from "react";
import { useSelector } from "react-redux";

import { LanguageIcon } from "../assets/Icons";

function header_component() {
  const user = useSelector((state) => state.user);

  const navBar = [
    {
      name: "Predictions",
      link: "/predictions",
    },
    {
      name: "Services",
      link: "/Services",
    },
    {
      name: "Help",
      link: "/help",
    },
  ];
  return (
    <div className="h-24 w-full bg-gradient-to-r from-green-300 to-green-500 shadow-lg p-4 absolute z-10 ">
      {!user.userStatus?<div className="container mx-auto flex justify-center items-center">
        {/* Enhanced Predictions Button */}
        
          <h1 className="text-3xl font-outfit font-semibold ">KRISHI CONNECT</h1>
        
      </div>: <div className="container mx-auto flex justify-between items-center">
        {/* Enhanced Predictions Button */}
        <button className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-8 text-lg font-semibold rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 ease-in-out shadow-xl">
          Predictions
        </button>
        
        {/* Enhanced Input Field */}
        <div className="relative">
          <input
            type="text"
            placeholder={"Search buyer"}
            className="border-2 border-green-500 py-2 px-6 pl-10 rounded-full outline-none focus:ring-2 focus:ring-green-600 text-gray-700 transition-all duration-200 bg-white bg-gradient-to-r from-gray-100 via-white to-gray-100"
            onFocus={() => setPlaceholder('')}  // Clear placeholder on focus
            onBlur={() => setPlaceholder('Search buyer')}  // Restore placeholder on blur if the input is empty
          />
          {/* Placeholder for the search icon */}
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {/* Replace with an SVG icon or image if needed */}
            🔍
          </span>
        </div>
        
        <div className="flex space-x-4">
          {/* Enhanced Ratings Button */}
          <button className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-6 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 ease-in-out shadow-lg">
            Ratings
          </button>
          {/* Profile Button */}
          <button className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-6 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 ease-in-out shadow-lg">
            Profile
          </button>
          {/* Help Button */}
          <button className="bg-white text-customDarkgreen font-semibold py-2 px-6 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 ease-in-out shadow-lg">
            Help
          </button>
        </div>
      </div>
}
    </div>
  );
}

export default header_component;
