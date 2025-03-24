import React, { useState } from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const MainWrapper = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const HandleSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };
  return (
    <>
      <div className={`main-wrapper ${sidebarToggle ? "toggle-sidebar" : ""}`}>
        <Sidebar sidebarToggle={sidebarToggle} />
        <div
          className={`wrapper flex flex-auto flex-col transition-all duration-300 ease-in-out ${
            sidebarToggle ? "pl-[80px]" : "pl-[16rem]"
          }`}
        >
          <MainContent HandleSidebarToggle={HandleSidebarToggle} />
        </div>
      </div>
    </>
  );
};

export default MainWrapper;
