"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";

function Upgrade() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Starter Plan */}
        <motion.div
          className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Plan details */}
          <div className="p-6 sm:px-8">
            <motion.h2
              className="text-lg font-medium text-gray-900"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Starter
              <span className="sr-only">Plan</span>
            </motion.h2>
            {/* Include other plan details */}
          </div>
          {/* Included features */}
          <div className="p-6 sm:px-8">{/* Include list of features */}</div>
        </motion.div>
        {/* Pro Plan */}
        <motion.div
          className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Plan details */}
          <div className="p-6 sm:px-8">
            <motion.h2
              className="text-lg font-medium text-gray-900"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Pro
              <span className="sr-only">Plan</span>
            </motion.h2>
            {/* Include other plan details */}
          </div>
          {/* Included features */}
          <div className="p-6 sm:px-8">{/* Include list of features */}</div>
        </motion.div>
        {/* Enterprise Plan */}
        <motion.div
          className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Plan details */}
          <div className="p-6 sm:px-8">
            <motion.h2
              className="text-lg font-medium text-gray-900"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Enterprise
              <span className="sr-only">Plan</span>
            </motion.h2>
            {/* Include other plan details */}
          </div>
          {/* Included features */}
          <div className="p-6 sm:px-8">{/* Include list of features */}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Upgrade;
