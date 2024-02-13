import React from "react";
import Bars from "./Bars";
import Buttons from "./Buttons";
import styled from "styled-components";
import { useState } from "react";

const Blured = styled.div`
  border-radius: 1.5rem;
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(100px);
  box-shadow: 0px 0px 12px 10px rgba(91, 128, 20, 0.18);
  overflow: hidden;
`;

function Sorting() {
  const [arr, setArr] = useState([]);
  return (
    <>
      <div className="flex flex-col mx-auto w-[80vw] h-[75vh] max-sm:h-[80vh] mt-5 gap-5">
        <div className="flex w-[100%] max-xl:justify-center">
          <Buttons arr = {arr} setArr={setArr}/>
        </div>
        <Blured className="bg-black w-[100%] h-[100%] rounded-lg text-[snow]">
          <Bars arr = {arr} setArr={setArr}/>
        </Blured>
      </div>
    </>
  );
}

export default Sorting;
