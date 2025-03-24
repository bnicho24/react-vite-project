import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"

const Sidebar = ({ sidebarToggle }) => {
  const location = useLocation();
  // console.log(location)
  return (
    <>
      <aside
        className={`aside peer fixed bottom-0 top-0 z-30 flex flex-col ltr:border-r rtl:border-l bg-white transition-all duration-300 ease-in-out ${
          sidebarToggle ? "w-[80px]" : "md:w-[16rem]"
        }`}
      >
        <div className="p-4">
          <div className="logo text-2xl font-semibold text-center mb-6 flex justify-center items-center gap-3">
          <img className="w-15 transition-all" src={logo} alt='My App' />
            <h2 className=" transition-all">My App</h2>
          </div>
          <ul className="space-y-4 menu">
            <li>
              <Link
                to="/main/dash"
                className={`flex items-center space-x-2 text-sm font-medium ${
                  location.pathname === "/main/dash" ? "bg-secondary/80" : ""
                } hover:bg-secondary/80 p-2 rounded-lg transition-colors duration-200`}
              >
                <svg
                  class="w-4 h-4 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                  ></path>
                </svg>
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/main/home"
                className={`flex items-center space-x-2 text-sm font-medium ${
                  location.pathname === "/main/home" ? "bg-secondary/80" : ""
                } hover:bg-secondary/80 p-2 rounded-lg transition-colors duration-200`}
              >
                <svg
                  class="w-4 h-4 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"></path>
                </svg>
                <span className="text-sm font-medium">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/main/services"
                className={`flex items-center space-x-2 text-sm font-medium ${
                  location.pathname === "/main/services"
                    ? "bg-secondary/80"
                    : ""
                } hover:bg-secondary/80 p-2 rounded-lg transition-colors duration-200`}
              >
                <svg
                  class="w-4 h-4 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                  ></path>
                </svg>

                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                to="/main/contactus"
                className={`flex items-center space-x-2 text-sm font-medium ${
                  location.pathname === "/main/contactus"
                    ? "bg-secondary/80"
                    : ""
                } hover:bg-secondary/80 p-2 rounded-lg transition-colors duration-200`}
              >
                <svg
                  class="w-4 h-4 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M5.022 4.764c.489 0 .75-.37.8-.856l.188-1.877A.952.952 0 0 0 5.063.985H2.791a1.127 1.127 0 0 0-1.067.749A16.11 16.11 0 0 0 1 7a16.737 16.737 0 0 0 .743 5.242c.154.463 1.748.773 2.236.773H5a.95.95 0 0 0 .946-1.046l-.188-1.877a.95.95 0 0 0-.946-.856h-.761A14.627 14.627 0 0 1 3.937 7c-.02-.747.019-1.495.114-2.236h.971Zm13.365 7.592L18.6 11H14a1 1 0 0 1 0-2h4.918l.159-1H14a1 1 0 1 1 0-2h5.393l.158-1H14a1 1 0 1 1 0-2h5.868l.111-.7a2.04 2.04 0 0 0-.473-1.629A1.912 1.912 0 0 0 18.063 0H9a1 1 0 0 0-1 1v11.78A2.985 2.985 0 0 0 7 15v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a2.991 2.991 0 0 0-1.613-2.644Z"></path>
                </svg>
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute bg-secondary/80 bottom-0 left-0 p-2 right-0 text-center text-sm">
          <p>© 2025 My App</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
