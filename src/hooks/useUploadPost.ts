import { useState } from "react";

export const useUploadPost = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [category, setCategory] = useState<number | undefined>(undefined);

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    const res = await fetch(`/api/post/import?categoryId=${category}`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Failed to upload files");
    }

    return res.json();
  };

  return { files, setFiles, handleUpload, category, setCategory };
};
