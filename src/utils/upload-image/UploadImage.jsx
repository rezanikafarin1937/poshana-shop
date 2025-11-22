"use client";
import { useState } from "react";
import "./uploadImage.min.css";
import Delete from "./Delete";

function UploadImage({ dir = "rtl" , onFilesChange }) {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const imagePreviews = [...files].map(
      (file) => URL.createObjectURL(file) // ساخت URL موقت برای تصویر
    );
    setImages((prev) => [...prev, ...imagePreviews]);
    setFiles(() => files);
    onFilesChange(files);
  };

  const handelDeleteImage = (image,index) => {
    const items = images.filter(item => item !== image);
    setImages(items);
    const myFiles = [...files].filter((item,i) => i !== index);
    setFiles(() => myFiles);
    onFilesChange(files);
  };

  return (
    <div className="parent" dir={dir}>
      <form>
        <div
          className={`parent__input ${
            dir === "ltr" ? "parent__ltr" : "parent__rtl"
          }`}
        >
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*"
            style={{ opacity: 0 }}
          />
          <button type="submit"></button>
        </div>
      </form>
      {images.map((image, index) => (
        <div key={index} className="parent__item">
          <div className="parent__del" onClick={() => handelDeleteImage(image,index)}>
            <Delete />
          </div>
          <div
            className={`parent__image ${
              dir === "ltr" ? "parent__ltr" : "parent__rtl"
            }`}
          >
            {<img src={image} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UploadImage;
