import { useState } from "react";

export const useUploadPost = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    const res = await fetch("/api/post/import", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Failed to upload files");
    }

    return res.json();
  };

  return { files, setFiles, handleUpload };
};
