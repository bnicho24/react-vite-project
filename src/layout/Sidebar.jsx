import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

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
            <img className="w-15 transition-all" src={logo} alt="My App" />
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
                  className="h-4 w-4 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />{" "}
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/main/rating"
                className={`flex items-center space-x-2 text-sm font-medium ${
                  location.pathname === "/main/rating" ? "bg-secondary/80" : ""
                } hover:bg-secondary/80 p-2 rounded-lg transition-colors duration-200`}
              >
                <svg
                  className="h-4 w-4 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span className="text-sm font-medium">Ratings</span>
              </Link>
            </li>
            <li>
              <Link
                to="/main/todolist"
                className={`flex items-center space-x-2 text-sm font-medium ${
                  location.pathname === "/main/todolist" ? "bg-secondary/80" : ""
                } hover:bg-secondary/80 p-2 rounded-lg transition-colors duration-200`}
              >
                <svg
                  className="h-4 w-4 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span className="text-sm font-medium">User ToDo List</span>
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
                  className="h-4 w-4 text-gray-800"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
                  <rect x="10" y="12" width="4" height="4" />
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
                  className="w-4 h-4 text-gray-800"
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
                  className="h-4 w-4 text-gray-800"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />{" "}
                  <line x1="20" y1="3" x2="20" y2="7" />{" "}
                  <line x1="16" y1="3" x2="16" y2="7" />
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
