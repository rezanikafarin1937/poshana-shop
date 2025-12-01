import React from "react";
import styles from "./mini-gallery.module.css";
type MiniGalleryProps = {
  images?: string[];
  width: string | number;
  height: string | number;
};
const MiniGallery = ({ images = [], width, height }: MiniGalleryProps) => {
  const renderImages = () => {
    const result = [];

    let index: number = 0;
    for (const image of images) {
      if (index === 4) break;
      else index++;
      let elem = (
        <div
          key={index}
          className={styles.gallery__image}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <img src={`/uploads/${image}`} alt="سایت فروش لباس" />
        </div>
      );
      result.push(elem);
    }

    return result;
  };

  return (
    <div className={styles.gallery}>
      {/* {images.map((image, index) => (
        <div
          className={styles.gallery__image}
          key={index}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <img src={`/uploads/${image}`} alt="سایت فروش لباس" />
        </div>
      ))} */}

      {renderImages()}
    </div>
  );
};

export default MiniGallery;
