import React from "react";
import { Button1, Button2 } from "../../Components/Button/Button.js";
import {ContractListItem} from "../../Components/Component.js"
function Home() {
  return (
    <div className="h-full w-full">
      
        <div className="ml-3 h-1/5 w-1/3 flex items-end justify-between text-center  ">
          <Button1 label={"Create a Bid"} />
          <Button2 label={"Current a bids"} />
        </div>
        <div className=" h-4/5 p-3">
          <h1 className="h-1/6 text-3xl  font-outfit text-customDarkgreen font-semibold ">
            Open Contracts
          </h1>
          <div className=" h-5/6 flex flex-col items-center overflow-auto px-9 py-2">
            <ContractListItem />
          </div>
        </div>
      
    </div>
  );
}

export default Home;
