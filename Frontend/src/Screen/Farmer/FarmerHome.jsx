import React from 'react';
import {FarmerCard as Card} from '../../Components/Cards/Cards.js';

function FarmerHome() {
  return (
    <div className="relative top-32 flex justify-between mx-10 space-x-10 p-8 rounded-lg shadow-lg">
      {/* Left Side */}
      <div className="space-y-8">
        {/* Larger cards with buttons */}
        <Card content="Current Applied Bids" isButton />
        <Card content="History" isButton />
        <Card content="Know Bid Status" isButton />
      </div>

      {/* Right Side */}
      <div className="space-y-8">
        <Card content="Buyers available and requirements" isButton />
        <Card content="Agricultural News" isButton />
        <Card content="Government Schemes" isButton />
      </div>
    </div>
  );
}

export default FarmerHome;
