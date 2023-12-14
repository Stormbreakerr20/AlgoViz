import React, { useState } from "react";
import { state } from "../../../../store";
import { useSnapshot } from "valtio";
import "react-dropdown/style.css";
import Drop from "./Drop";
import { BsGooglePlay } from "react-icons/bs";
import { TbBinaryTree } from "react-icons/tb";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Buttons() {
  const snap = useSnapshot(state);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  };

  return (
    <>
      <div className="flex justify-between w-[100%] gap-3 max-xl:flex-col max-xl:w-[80%] max-[880px]:w-[100%]">
        <div className="flex gap-3 flex-grow max-xl:w-[100%] max-sm:flex-col">
          <div className="flex-grow h-[40px] shadow-md max-xl:w-[50%] max-sm:w-[100%]  rounded-lg z-50">
            <Drop/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
