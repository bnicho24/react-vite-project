import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useNavigate } from "react-router-dom";

const Header = ({ HandleSidebarToggle }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    // localStorage.setItem("user",{auth: false});
    localStorage.clear();
    navigate("/");
  };


  return (
    <header
      className="sticky top-0 z-9 p-4 flex justify-between items-center bg-white"
      style={{ borderBottom: "1px solid #e5e5e5" }}
    >
      <div className="flex w-full items-center justify-between gap-2 sm:gap-4">
        <div
          className="border-gray-200 p-2 border rounded-md cursor-pointer"
          onClick={HandleSidebarToggle}
        >
          <svg
            className="w-5 h-5 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 14"
          >
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-dark-700 items-center justify-between gap-2">
          Welcome to Portfolio
        </h1>

        <div className="w-full max-w-sm min-w-[200px] items-center justify-between gap-2">
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="w-72 items-center justify-between gap-4 shadow-theme-md lg:flex lg:justify-end lg:px-0">
        <img
          src="https://demo.tailadmin.com/src/images/user/owner.jpg"
          alt={user.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        <Popover>
          <PopoverTrigger className="rotate-button">
            <span className="text-lg font-medium cursor-pointer flex items-center gap-2">
              {user.name ? "Nicholas" : ""} 
              <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"></path>
            </svg>
            </span>
          </PopoverTrigger>
          <PopoverContent className="flex items-center gap-2 w-[160px]">
            <svg
              className=" w-4 h-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
              ></path>
            </svg>
            <span
              className=" text-sm font-medium cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </span>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
