import React from "react";
import UploadForm from "./_components/UploadForm";

function Upload() {
  return (
    <div className="p-4 px-8 md:px-28">
      <h2 className="text-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-lg font-extrabold text-transparent sm:text-2xl m-5 bg-clip-text">
        Drag and drop your files here or click to upload
      </h2>
      <UploadForm />
    </div>
  );
}

export default Upload;
