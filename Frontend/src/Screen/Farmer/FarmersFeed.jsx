import React from 'react';
import SingleBuyer from './SingleBuyer';

const FarmersFeed = () => {
  return (
    <div className='relative top-24 px-9 py-2'>
      {/* Centered Heading with increased size and dark color */}
      <h2 className="text-4xl font-extrabold text-[#1a202c] text-center mb-6">Available Bids</h2> 

      {/* Card Section */}
      <div className="flex">
        <SingleBuyer />
      </div>
    </div>
  );
}

export default FarmersFeed;
