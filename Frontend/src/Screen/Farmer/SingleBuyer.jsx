import React,{useState,useEffect} from "react";
import { Transition } from '@headlessui/react';
import { useSelector } from "react-redux";
function SingleBuyer({ CropName, Price, Quantity, ContractID, Duration }) {
  const [ApplyNow, setApplyNow] = useState(false);
  const allBids = useSelector((state) => state.TotalBids.allBids);
  useEffect(() => {
    if(ApplyNow){
      const obj = allBids.find((bid)=>(
        bid.ContractID === ContractID
      ));
      

    }
  }, [ApplyNow]);
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
              Contract ID : {`${ContractID}`}
            </span>
          </div>
          <div className="mt-2 text-gray-700">Crop Name:{`${CropName}`}</div>
          <div className="mt-2 text-gray-700">Price:{`${Price}`}</div>
          <div className="mt-2 text-gray-700">Quantity:{`${Quantity}`}</div>
          <div className="mt-2 text-gray-700">Contact No: 941629983</div>
          <div className="mt-2 text-gray-700">Duration: {`${Duration}`}</div>
          
          {/* Apply Now Button */}
          <button className={ApplyNow?"absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-green-500 py-2 px-6 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg":"absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg"} onClick={()=>setApplyNow((prev)=>!prev)}>
            {ApplyNow ? 'Applied' : 'Apply Now'}
          </button>
        </div>
      </Transition>
    </div>
  );
}

export default SingleBuyer;
