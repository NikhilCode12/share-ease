"use client";
import React, { useState, useEffect } from "react";
import { UploadCloud } from "lucide-react";
import { motion } from "framer-motion";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";
import SuccessUploadMsg from "./SuccessUploadMsg";

function UploadForm({ handleUploadFileClick, totalProgress = 0 }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [uploadClicked, setUploadClicked] = useState(false); // New state variable

  const onFileAdd = (file) => {
    if (file && file.size > 5000000) {
      setError(
        "File size exceeds 5MB! Try again with a smaller file or upgrade to a premium plan."
      );
    } else {
      setError(null);
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  const handleNewUploadClick = () => {
    setShowSuccessMsg(false);
    setFile(null);
    setUploadClicked(false); // Reset uploadClicked when new upload is clicked
  };

  useEffect(() => {
    if (totalProgress === 100) {
      setShowSuccessMsg(true);
    }
  }, [totalProgress]);

  return (
    <div className="text-center h-full">
      {/* Drop and upload zone */}
      {!file && !showSuccessMsg && (
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:border-blue-400 dark:hover:border-blue-500 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 px-2">
              <svg
                className="w-10 h-10 mb-4 text-blue-500 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm md:text-lg text-gray-500 dark:text-gray-400">
                <span className="font-semibold dark:text-blue-400">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                All file formats are supported. Max file size allowed:{" "}
                <span className="text-blue-400">5MB (free tier).</span>
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => onFileAdd(e.target.files[0])}
            />
          </label>
        </div>
      )}
      {/* Alert for size limit */}
      {error && <AlertMsg message={error} setError={() => setError(null)} />}
      {/* File Preview after file is dropped */}
      {file && <FilePreview file={file} removeFile={removeFile} />}
      {/* Progress Bar and Button to upload*/}
      {(file || showSuccessMsg) &&
        uploadClicked &&
        totalProgress > 0 &&
        !showSuccessMsg && <ProgressBar progress={totalProgress} />}
      {(file || showSuccessMsg) && !showSuccessMsg && (
        <motion.button
          onClick={() => {
            handleUploadFileClick(file);
            setUploadClicked(true); // Set uploadClicked to true when upload button is clicked
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!file}
          className="mt-6 rounded-md border border-blue-700 bg-blue-700 px-12 py-3 text-md font-medium text-white focus:outline-none focus:ring ring-gray-200 active:text-opacity-75 sm:w-auto text-center disabled:bg-gray-600 disabled:border-none"
        >
          Upload File
          <motion.div className="inline-block" whileHover={{ y: [0, -2, 0] }}>
            <UploadCloud size={22} className="inline-block ml-2 font-medium" />
          </motion.div>
        </motion.button>
      )}
      {/* New Upload button */}
      {showSuccessMsg && (
        <motion.button
          onClick={handleNewUploadClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 rounded-md border border-blue-700 bg-blue-700 px-12 py-3 text-md font-medium text-white focus:outline-none focus:ring ring-gray-200 active:text-opacity-75 sm:w-auto text-center"
        >
          New Upload
        </motion.button>
      )}
      {/* Success message */}
      {showSuccessMsg && (
        <SuccessUploadMsg message="File uploaded successfully!" />
      )}
    </div>
  );
}

export default UploadForm;
