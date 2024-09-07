import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
  const user = useSelector((state) => state.user); // Access user state from Redux
  const navigate = useNavigate(); // Hook to navigate between routes

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Local state to track login status
  const [userType, setUserType] = useState(user.userType); // Local state to track userType

  // useEffect to monitor changes in userStatus and userType
  useEffect(() => {
    if (user.userStatus) {
      setIsLoggedIn(true);
      setUserType(user.userType);
    } 
  }, [user]);

  return (
    <div className="h-24 w-full bg-gradient-to-r from-green-300 to-green-500 shadow-lg p-4 absolute z-10">
      {!isLoggedIn ? (
        // If user is not logged in, render the title only
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-3xl font-outfit font-semibold">KRISHI CONNECT</h1>
        </div>
      ) : (
        // If user is logged in
        <div className="container mx-auto flex justify-between items-center">
          {/* Conditionally render Predictions Button for farmers */}
          
            <button
              className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-8 text-lg font-semibold rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 ease-in-out shadow-xl"
              onClick={() => navigate("/farmer/predictions")} // Navigate to farmer predictions page
            >
              {
                console.log(user)
              }
              {user.user.userType==='farmer'?'Predictions':'Bids'}
            </button>
          

          {/* Input field for searching buyers */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search buyer"
              className="border-2 border-green-500 py-2 px-6 pl-10 rounded-full outline-none focus:ring-2 focus:ring-green-600 text-gray-700 transition-all duration-200 bg-white bg-gradient-to-r from-gray-100 via-white to-gray-100"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>

          {/* Buttons for language selection, profile, and help */}
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-6 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 ease-in-out shadow-lg">
              Select Language
            </button>
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-6 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 ease-in-out shadow-lg">
              Profile
            </button>
            <button className="bg-white text-customDarkgreen font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-lg">
              Help
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderComponent;
