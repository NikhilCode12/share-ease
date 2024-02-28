import { UserButton } from "@clerk/nextjs";
import React from "react";
import { FiFile } from "react-icons/fi";

function Files() {
  const userFiles = [
    { name: "Document 1", type: "pdf" },
    { name: "Image 1", type: "jpg" },
    { name: "Spreadsheet", type: "xlsx" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Files</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Map through user files and display them */}
        {userFiles.map((file, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md">
            {/* File icon */}
            <div className="text-center mb-2">
              <FiFile className="text-gray-500 text-4xl mx-auto" />
            </div>
            {/* File name */}
            <p className="text-center font-semibold">{file.name}</p>
            {/* File type */}
            <p className="text-center text-gray-500">
              {file.type.toUpperCase()}
            </p>
          </div>
        ))}
      </div>

      {/* UserButton component for sign out */}
      <div className="mt-8">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Files;
