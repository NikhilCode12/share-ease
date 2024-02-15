"use client";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  const [activePage, setActivePage] = useState("Home");
  const newPath = path.slice(1);
  useEffect(() => {
    newPath === ""
      ? setActivePage("Home")
      : setActivePage(newPath.charAt(0).toUpperCase() + newPath.slice(2));
  }, [activePage]);

  return (
    <header className="bg-gray-800 border-b h-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a
              className=" text-gray-100 flex gap-4 items-center font-semibold text-lg"
              href="/"
            >
              {/* File share svg */}
              <span className="sr-only">ShareEase</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="0ptTM7js1LRNIAHonm3lla_qZ1FibjKOsRJ_gr1"
                  x1="14.242"
                  x2="30.172"
                  y1="8.358"
                  y2="38.695"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#2aa4f4"></stop>
                  <stop offset="1" stopColor="blue"></stop>
                </linearGradient>
                <path
                  fill="url(#0ptTM7js1LRNIAHonm3lla_qZ1FibjKOsRJ_gr1)"
                  d="M48,26c0,6.63-5.37,12-12,12c-1.8,0-24.66,0-26.5,0C4.25,38,0,33.75,0,28.5	c0-4.54,3.18-8.34,7.45-9.28C9.15,12.21,15.46,7,23,7c5.51,0,10.36,2.78,13.24,7.01C42.76,14.13,48,19.45,48,26z"
                ></path>
                <path
                  d="M21,24.441v7c0,1.105,0.895,2,2,2h2c1.105,0,2-0.895,2-2v-7h2.648c1.336,0,2.006-1.616,1.061-2.561	l-5.295-5.295c-0.781-0.781-2.047-0.781-2.828,0l-5.295,5.295c-0.945,0.945-0.276,2.561,1.061,2.561H21z"
                  opacity=".05"
                ></path>
                <path
                  d="M21.5,23.941v7.5c0,0.828,0.672,1.5,1.5,1.5h2c0.828,0,1.5-0.672,1.5-1.5v-7.5h3.021	c0.938,0,1.408-1.134,0.745-1.798l-5.129-5.13c-0.627-0.627-1.644-0.627-2.271,0l-5.129,5.13c-0.663,0.663-0.194,1.798,0.745,1.798	H21.5z"
                  opacity=".07"
                ></path>
                <path
                  fill="#fff"
                  d="M18.607,23.441H22v8c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8h3.393	c0.54,0,0.81-0.653,0.428-1.034l-4.964-4.964c-0.473-0.473-1.241-0.473-1.714,0l-4.964,4.964	C17.797,22.788,18.067,23.441,18.607,23.441z"
                ></path>
              </svg>
              <h1 className="hidden lg:flex ">ShareEase</h1>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className={`text-gray-100 transition hover:text-gray-200/75 ${
                      activePage === "Home" ? "active" : ""
                    }`}
                    href="/"
                    onClick={() => setActivePage("Home")}
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className={`text-gray-100 transition hover:text-gray-200/75 ${
                      activePage === "Upload" ? "active" : ""
                    }`}
                    href="/upload"
                    onClick={() => setActivePage("Upload")}
                  >
                    Upload
                  </a>
                </li>

                <li>
                  <a
                    className={`text-gray-100 transition hover:text-gray-200/75 ${
                      activePage === "About" ? "active" : ""
                    }`}
                    href="/about"
                    onClick={() => setActivePage("About")}
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className={`text-gray-100 transition hover:text-gray-200/75 ${
                      activePage === "Contact" ? "active" : ""
                    }`}
                    href="/contact"
                    onClick={() => setActivePage("Contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-900"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
