"use client";

import { useState } from "react";
import "./uploadImage.min.css";
import Delete from "./Delete";

function UploadImage({ dir = "rtl", onFilesChange }) {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const imagePreviews = selectedFiles.map(
      (file) => URL.createObjectURL(file)
    );

    setImages((prev) => [...prev, ...imagePreviews]);
    setFiles((prev) => [...prev, ...selectedFiles]);

    onFilesChange?.([...files, ...selectedFiles]);

    e.target.value = "";
  };

  const handelDeleteImage = (image, index) => {
    URL.revokeObjectURL(image);

    const items = images.filter((item) => item !== image);
    const myFiles = files.filter((item, i) => i !== index);

    setImages(items);
    setFiles(myFiles);

    onFilesChange?.(myFiles);
  };

  return (
    <div className="parent" dir={dir}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          title="آپلود عکس"
          className={`parent__input ${
            dir === "ltr" ? "parent__ltr" : "parent__rtl"
          }`}
        >
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*"
          />
          <button type="submit"></button>
        </div>
      </form>

      {images.map((image, index) => (
        <div key={index} className="parent__item">
          <div
            className="parent__del"
            onClick={() => handelDeleteImage(image, index)}
          >
            <Delete color="orangered" />
          </div>

          <div
            className={`parent__image ${
              dir === "ltr" ? "parent__ltr" : "parent__rtl"
            }`}
          >
            <img src={image} alt={`پیش‌نمایش تصویر ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default UploadImage;