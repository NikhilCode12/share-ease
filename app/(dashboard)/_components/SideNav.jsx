"use client";
import {
  Files,
  LayoutDashboard,
  Settings,
  StarsIcon,
  UploadCloud,
} from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function SideNav() {
  const menuListItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: 2,
      label: "Upload",
      icon: UploadCloud,
      path: "/upload",
    },
    {
      id: 3,
      label: "Files",
      icon: Files,
      path: "/files",
    },
    {
      id: 4,
      label: "Upgrade",
      icon: StarsIcon,
      path: "/upgrade",
    },
    {
      id: 5,
      label: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      label: "Github",
      icon: FaGithub,
      path: "https://github.com/NikhilCode12",
      color: "white",
    },
    {
      id: 2,
      label: "LinkedIn",
      icon: FaLinkedin,
      path: "https://www.linkedin.com/in/nikhil-sharma-41a287226/",
      color: "lightblue",
    },
    {
      id: 3,
      label: "Twitter",
      icon: FaTwitter,
      path: "https://twitter.com/Sharma_Nikh12",
      color: "skyblue",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSideNav = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="bg-gray-800 h-full">
      {/* Logo */}
      <div className="flex border-b border-gray-600 px-4 py-2">
        <a
          className="text-gray-100 flex gap-4 items-center font-semibold text-lg"
          href="/"
        >
          {/* File share svg */}
          <span className="sr-only">ShareEase</span>
          <motion.svg
            whileHover={{ y: [0, -5, 0] }}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
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
          </motion.svg>
          <motion.h1 whileTap={{ scale: 0.975 }} className="hidden lg:flex">
            ShareEase
          </motion.h1>
        </a>
      </div>
      {/* Side Nav links */}
      <div>
        {menuListItems.map((item, index) => {
          return (
            <motion.a
              key={index}
              href={item.path}
              className={`flex items-center gap-4 px-4 py-3 text-gray-300 hover:bg-gray-700 ${
                index === activeIndex ? "text-blue-400" : ""
              }`}
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(index)}
            >
              <item.icon />
              <span>{item.label}</span>
            </motion.a>
          );
        })}
      </div>
      {/* Share links */}
      <div className="flex gap-8 items-center absolute bottom-0 w-full px-4 bg-gray-700 rounded-sm py-6 justify-center">
        {socialLinks.map((item, index) => {
          return (
            <motion.a
              key={index}
              href={item.path}
              className="flex items-center rounded-full"
              target="_blank"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon size={24} color={"white"} />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
