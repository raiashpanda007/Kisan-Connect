import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AppliedBids = () => {
  const [bids, setBids] = useState([
    { id: 1, farmerName: 'John Doe', rating: 4.5, quantityApplied: 500, location: 'California' },
    { id: 2, farmerName: 'Jane Smith', rating: 4.2, quantityApplied: 750, location: 'Texas' },
    // Add more initial bids as needed
  ]);

  return (
    <div className="relative top-24 max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Applied Bids</h1>
      <div className="flex justify-between mb-5 items-center p-4 border-b">
          <span className="font-semibold">contract id : 2427</span>
          <button className="flex items-center bg-gray-100 px-3 py-1 rounded">
            Sort By
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        
        
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
          {bids.map(bid => (
            <div key={bid.id} className="p-4 border-b">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Farmer Name: {bid.farmerName}</span>
                <span>Rating: {bid.rating}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity Applied: {bid.quantityApplied}</span>
                <span>Location: {bid.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedBids;