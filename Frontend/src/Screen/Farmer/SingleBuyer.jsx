import React from "react";
import { Transition } from '@headlessui/react';

function SingleBuyer({ CropType, PriceRange, Quantityrequired, ContactNo, Duration }) {
  return (
    <div className="relative z-20 w-full cursor-pointer mt-6"> {/* Added margin-top */}
      <Transition
        show={true}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-101 duration-500 ease-in-out relative">
          <div className="flex justify-between items-center mb-4"> {/* Added margin-bottom */}
            <span className="font-semibold text-lg text-[#2D3748]">
              Necessary-Demands:
            </span>
          </div>
          <div className="mt-2 text-gray-700">Crop Type:</div>
          <div className="mt-2 text-gray-700">Price Range:</div>
          <div className="mt-2 text-gray-700">Quantity required:</div>
          <div className="mt-2 text-gray-700">Contact No:</div>
          <div className="mt-2 text-gray-700">Duration:</div>
          
          {/* Apply Now Button */}
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg">
            Apply Now
          </button>
        </div>
      </Transition>
    </div>
  );
}

export default SingleBuyer;
