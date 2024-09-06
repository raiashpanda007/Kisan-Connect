import React from 'react';

const FarmerCard = ({ content, isButton }) => {
  return (
    <div className="bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 border-2 border-gray-300 rounded-lg p-8 w-96 shadow hover:shadow-lg transition-shadow duration-200 ease-in-out flex justify-center items-center">
      {isButton ? (
        <button className="bg-transparent  py-6 px-12 text-xl font-semibold rounded-lg hover:border-gradient-to-r hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out shadow-md">
          {content}
        </button>
      ) : (
        <p className="text-gray-700 text-lg">{content}</p>
      )}
    </div>
  );
};

export default FarmerCard;