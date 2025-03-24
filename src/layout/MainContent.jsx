import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainContent = ({ HandleSidebarToggle }) => {
  return (
    <>
      <Header HandleSidebarToggle={HandleSidebarToggle} />
      <div className="main-content bg-secondary/80 p-8">
        <Outlet />
      </div>
    </>
  );
};

export default MainContent;
