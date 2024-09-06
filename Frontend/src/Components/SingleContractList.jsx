import React from "react";
import { Transition } from '@headlessui/react';


function SingleContractList({contractId,Crop,quantity,Price,TotalBidsApplied}) {
  return (
    <div className="relative z-20 w-full cursor-pointer">
      <Transition
        show={true}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-[#2D3748]">
              Contract Id:{" "}
            </span>
            <span className="text-sm text-gray-600">Total Applied Bids: </span>
          </div>
          <div className="mt-2 text-gray-700">Crop:</div>
          <div className="mt-2 text-gray-700">Quantity:</div>
          <div className="mt-2 text-gray-700">Price:</div>
        </div>
      </Transition>
    </div>
  );
}

export default SingleContractList;
