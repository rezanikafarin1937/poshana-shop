"use client";
import { useState, useRef, useEffect } from "react";
import "./uploadImage.min.css";
import Delete from "./Delete";

function UploadImage({ dir = "rtl",widthItemProps = 106,heightItemProps = 106, onFilesChange }) {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const divRef = useRef(null);
  const inputRef = useRef(null);
  const [inputHeight,setInputHeight] = useState(widthItemProps)
  const [widthPage, setWidthPage] = useState(0);
  const [itemsInWidth, setItemsInWidth] = useState(0);
  const [widthItem,setWidthItem] = useState(widthItemProps);
  const [heightItem,setHeightItem] = useState(heightItemProps);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const imagePreviews = [...files].map(
      (file) => URL.createObjectURL(file) // ساخت URL موقت برای تصویر
    );
    setImages((prev) => [...prev, ...imagePreviews]);
    setFiles(() => files);
    onFilesChange(files);
  };

  const handelDeleteImage = (image, index) => {
    const items = images.filter((item) => item !== image);
    setImages(items);
    const myFiles = [...files].filter((item, i) => i !== index);
    setFiles(() => myFiles);
    onFilesChange(files);
  };

  useEffect(() => {
    if (divRef.current) {
      setWidthPage(() => divRef.current.offsetWidth);
      if(widthPage <= 320){
         setItemsInWidth(2);
         setWidthItem(106);
         setHeightItem(106);
      }
      else       if(widthPage >= 320 && widthPage <= 425){
         setItemsInWidth(3);
         setWidthItem(120);
         setHeightItem(120);
      }

      console.log("WidthPage = ", widthPage);
      setItemsInWidth(() => widthPage / `${widthItem}`);
      console.log("itemsInWidth = ", itemsInWidth);
    }
    if(inputRef){
       setItemsInWidth(Math.floor(widthPage /  `${widthItem}`));
    }
  }, []);


  useEffect(() => {
    if (divRef.current) {
      setWidthPage(divRef.current.offsetWidth);
      console.log("Width = ", widthPage);
      setItemsInWidth(Math.floor(widthPage / `${widthItem}`));
      console.log("itemsInWidth = ", itemsInWidth);
    }
    if(inputRef){
      setInputHeight(inputRef.current.offsetWidth)
    }
  }, [images]);



  return (
    <div
      className="parent"
      dir={dir}
      ref={divRef}
      style={ { gridTemplateColumns: `repeat(${itemsInWidth}, 1fr` }}
    >
      <form>
        <div
          title="آپلود عکس"
          className="parent__input"
          ref={inputRef}
          style={{height : `${heightItem}px`,width : `${widthItem}px`}}
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
        <div
          key={index}
          className="parent__item"
          style={{height : `${heightItem}px`, width : `${widthItem}px`}}
        >
          <div
            className="parent__del"
            onClick={() => handelDeleteImage(image, index)}
          >
            <Delete color="orange"/>
          </div>
          <div
            className="parent__image"  style={{height : `${inputHeight}px`}}
          >
            {<img src={image} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UploadImage;
