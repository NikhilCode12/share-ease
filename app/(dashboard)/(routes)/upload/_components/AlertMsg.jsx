"use client";
import { AlertCircle, X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function AlertMsg({ message, setError }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-red-500 mt-5 text-gray-200 rounded-md flex gap-5 items-center justify-between"
    >
      <div className="flex gap-2">
        <AlertCircle className="" />
        {message}
      </div>
      <motion.div whileTap={{ scale: 0.9 }}>
        <X
          size={20}
          className="cursor-pointer text-gray-300 hover:text-gray-200"
          onClick={() => setError(null)}
        />
      </motion.div>
    </motion.div>
  );
}

export default AlertMsg;
