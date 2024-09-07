import React from 'react';
import SingleBuyer from './SingleBuyer';
import { useSelector } from 'react-redux';
const FarmersFeed = () => {
  const allBids = useSelector((state) => state.TotalBids.allBids);
  return (
    <div className='relative top-24 px-9 py-2 w-screen' >
      {/* Centered Heading with increased size and dark color */}
      <h2 className="text-4xl font-extrabold text-[#1a202c] text-center mb-6 w-full">Available Bids</h2> 

      {/* Card Section */}
      <div className=" w-full">
        {
          allBids.map((bid)=>(
            <SingleBuyer {...bid} />
          ))
          
        }
       
      </div>
    </div>
  );
}

export default FarmersFeed;
