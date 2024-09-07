import React from 'react';
import {FarmerCard as Card} from '../../Components/Cards/Cards.js';
import { useNavigate } from 'react-router-dom';

function FarmerHome() {
  const navigate = useNavigate();
  
  return (
    <div className="relative top-32 flex flex-col md:flex-row justify-between mx-4 md:mx-10 space-y-6 md:space-y-0 md:space-x-10 p-8 rounded-lg shadow-lg">
      {/* Left Side */}
      <div className="space-y-8">
        {/* Larger cards with buttons */}
        <Card content="Current Applied Bids" isButton />
        <Card content="History" isButton />
        <Card content="Know Bid Status" isButton />
      </div>

      {/* Right Side */}
      <div className="space-y-8">
        <Card content="Buyers available and requirements"  onClick={() => navigate('/farmer/all-contracts')} isButton />
        <Card content="Agricultural News" isButton />
        <Card content="Government Schemes" isButton />
      </div>
    </div>
  );
}

export default FarmerHome;