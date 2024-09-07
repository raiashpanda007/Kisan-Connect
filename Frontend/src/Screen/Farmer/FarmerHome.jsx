import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FarmerCard as Card } from '../../Components/Cards/Cards.js';
import { FaTractor, FaClipboardList, FaHistory, FaSearchDollar, FaUsers, FaNewspaper, FaLandmark } from 'react-icons/fa';

const IconCard = ({ icon: Icon, content, className, onClick }) => (
  <Card
    content={
      <div className="flex flex-col items-center justify-center h-full">
        <Icon className="text-4xl mb-2 text-green-600" />
        <span className="text-center">{content}</span>
      </div>
    }
    isButton
    className={`${className} group`}
    onClick={onClick}
  />
);

function FarmerHome() {
  const navigate = useNavigate();

  const handleBuyersClick = () => {
    navigate('/farmer/all-contracts');
  };

  return (
    <div className="relative top-32 mx-auto max-w-7xl p-8 rounded-lg shadow-2xl bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <FaTractor className="text-6xl text-green-600 animate-bounce" />
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 drop-shadow-lg">
            Welcome, Farmer
          </h1>
        </div>
        <p className="text-2xl text-gray-700 font-light">Explore your bids, history, and more below.</p>
      </div>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <IconCard
          icon={FaClipboardList}
          content="Current Applied Bids"
          className="h-48 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white border-opacity-20 hover:bg-green-50"
        />
        <IconCard
          icon={FaHistory}
          content="History"
          className="h-48 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white border-opacity-20 hover:bg-blue-50"
        />
        <IconCard
          icon={FaSearchDollar}
          content="Know Bid Status"
          className="h-48 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white border-opacity-20 hover:bg-purple-50"
        />
        <IconCard
          icon={FaUsers}
          content="Buyers Available"
          className="h-48 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white border-opacity-20 hover:bg-yellow-50"
          onClick={ ()=> navigate('/farmer/all-contracts')}
        />
        <IconCard
          icon={FaNewspaper}
          content="Agricultural News"
          className="h-48 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white border-opacity-20 hover:bg-red-50"
        />
        <IconCard
          icon={FaLandmark}
          content="Government Schemes"
          className="h-48 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white border-opacity-20 hover:bg-indigo-50"
        />
      </div>
    </div>
  );
}

export default FarmerHome;