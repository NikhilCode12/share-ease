"use client";
import { X } from "lucide-react";
import React from "react";
import {
  FaFileImage,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaFile,
  FaFileVideo,
  FaFileAudio,
} from "react-icons/fa";
import { motion } from "framer-motion";

function FilePreview({ file, removeFile }) {
  const getFileExtension = (fileName) => {
    return fileName.split(".").pop().toLowerCase();
  };

  const getFileIcon = (extension) => {
    const iconMap = {
      jpg: <FaFileImage size={50} color="#7FFF7F" />,
      jpeg: <FaFileImage size={50} color="#7FFF7F" />,
      png: <FaFileImage size={50} color="#E6E6FA" />,
      gif: <FaFileImage size={50} color="#D8BFD8" />,
      pdf: <FaFilePdf size={50} color="#FF6347" />,
      doc: <FaFileWord size={50} color="#87CEEB" />,
      docx: <FaFileWord size={50} color="#87CEEB" />,
      xls: <FaFileExcel size={50} color="#98FB98" />,
      xlsx: <FaFileExcel size={50} color="#98FB98" />,
      ppt: <FaFilePowerpoint size={50} color="#FFA500" />,
      pptx: <FaFilePowerpoint size={50} color="#FFA500" />,
      mp3: <FaFileAudio size={50} color="wheat" />,
      mp4: <FaFileVideo size={50} color="#FFD700" />,
      default: <FaFile size={50} color="skyblue" />,
    };

    return iconMap[extension] || iconMap["default"];
  };

  const fileName = file.name;
  const fileExtension = getFileExtension(fileName);

  return (
    <motion.div className="flex text-gray-200 border border-blue-500 rounded-md bg-gray-800 p-5 justify-between items-center mt-5">
      {/* File icon */}
      <div className="flex gap-2">
        <div className="rounded-full">{getFileIcon(fileExtension)}</div>
        {/* File Details */}
        <div className="flex flex-col items-start justify-between">
          {/* File name */}
          <h1 className="text-gray-400 font-semibold text-sm md:text-lg">
            {file.name}
          </h1>
          {/* File type and size */}
          <h2 className="text-blue-400  text-xs md:text-[14px]">
            {(file.size / 1024 / 1024).toFixed(2) + "MB"}
          </h2>
        </div>
      </div>
      <motion.div whileTap={{ scale: 0.9 }}>
        <X
          size={20}
          className="cursor-pointer text-gray-400 hover:text-gray-200"
          onClick={() => removeFile(file)}
        />
      </motion.div>
    </motion.div>
  );
}

export default FilePreview;
