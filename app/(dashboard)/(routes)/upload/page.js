"use client";
import React, { useState } from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "@/firebaseConfig.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function Upload() {
  const [progress, setProgress] = useState(0);
  const storage = getStorage(app);
  const uploadFile = (file) => {
    const storageRef = ref(storage, "file-uploads/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
        progress == 100 &&
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="p-4 px-8 md:px-28 h-full">
      <h2 className="text-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-lg font-extrabold text-transparent sm:text-2xl m-5 bg-clip-text">
        Drag and drop your files here or click to upload
      </h2>
      <UploadForm
        handleUploadFileClick={(file) => uploadFile(file)}
        totalProgress={progress}
      />
    </div>
  );
}

export default Upload;
