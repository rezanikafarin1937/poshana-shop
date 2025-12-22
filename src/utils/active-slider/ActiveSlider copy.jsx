"use client";
import { useState, useEffect } from "react";
import styles from "./activeslider.module.scss";
const ActiveSlider = ({ images }) => {
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentItem < images.length - 1) {
        setCurrentItem((prev) => prev + 1);
      } else {
        setCurrentItem(0);
      }
      console.log("currentItem Effect = ", currentItem);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentItem]);
  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <div
          key={index}
          className={styles.slider__slide}
          style={index === currentItem ? { opacity: `1` } : {}}
        >
          {console.log(image)}
          <img
            src={`/active-slider/${image}`}
            alt="فروشگاه لباس و کفش پوشانا"
          />
        </div>
      ))}
    </div>
  );
};

export default ActiveSlider;
