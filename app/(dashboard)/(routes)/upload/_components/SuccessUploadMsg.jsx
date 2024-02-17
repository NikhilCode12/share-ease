"use client";
import { Check } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function SuccessUploadMsg({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-green-600 mt-5 text-gray-200 rounded-md flex gap-5 items-center justify-between"
    >
      <div className="flex gap-2">
        <Check className="text-green-800" />
        {message}
      </div>
    </motion.div>
  );
}

export default SuccessUploadMsg;
