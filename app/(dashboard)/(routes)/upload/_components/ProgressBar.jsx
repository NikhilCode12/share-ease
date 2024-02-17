"use client";
import React from "react";
import { motion } from "framer-motion";

function ProgressBar({ progress }) {
  return (
    <div className="relative w-full h-6 bg-gray-600 rounded-md overflow-hidden mt-6">
      <motion.div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-r-md"
        style={{ width: `${progress}%` }}
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: "easeOut" }}
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-200 font-semibold pointer-events-none text-sm">
        {`${Number(progress).toFixed(2)}%`}
      </div>
    </div>
  );
}

export default ProgressBar;
