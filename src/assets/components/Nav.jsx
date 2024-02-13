import React from "react";
import Logo from "/Logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { state } from "../../store";
import { useSnapshot } from "valtio";
function Nav() {
  const snap = useSnapshot(state);
  return (
    <div className="flex justify-between pt-1 items-center mx-[50px] ">
      <Text className="flex flex-grow items-center justify-center gap-16 max-sm:gap-3  ">
        <Link to="/" onClick={() => (state.isRunning = false)}>
          <span className="nav-text p-2 rounded-md duration-300">SORTING</span>
        </Link>
        <Link to="/ml" onClick={() => (state.isRunning = false)}>
          <span className="nav-text p-2 rounded-md px-6 duration-300">ML</span>
        </Link>
        <div>
          <img
            src={Logo}
            alt=""
            className="pt-2 w-[100px] h-[100px] max-md:w-[80px] max-md:h-[80px] max-[595px]:w-[80px] max-[595px]:h-[80px] max-[451px]:w-[60px] max-[451px]:h-[60px]"
          />
        </div>
        <Link to="/heap" onClick={() => (state.isRunning = false)}>
          <span className="nav-text p-2 rounded-md duration-300">HEAPS</span>
        </Link>
        <Link to="/about">
          <span className="nav-text p-2 rounded-md duration-300">ABOUT</span>
        </Link>
      </Text>
    </div>
  );
}

export default Nav;
const Text = styled.div`
  color: #420285 ;
  font-family: 'Gothic A1', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 770px) {
    font-size: 18px;
  }
  @media (max-width: 560px) {
    font-size: 15px;
  }
  @media (max-width: 501px) {
    font-size: 12px;
  }
  .nav-text:hover{
      background:#F8F8F8;
  }
`;
