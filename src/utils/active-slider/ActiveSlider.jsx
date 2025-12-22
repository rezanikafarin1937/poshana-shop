"use client";
import { useState, useEffect } from "react";
import styles from "./activeslider.module.scss";
const ActiveSlider = ({ children, width, height }) => {
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
        if (currentItem < children.length - 1) {
          setCurrentItem((prev) => prev + 1);
        } else {
          setCurrentItem(0);
        }
      console.log("currentItem Effect = ", currentItem);
    }, 8000);

    return () => clearInterval(timer);
  }, [currentItem]);
  return (
    <div
      className={styles.parent}
      style={{ width: `${width}`, height: `${height}` }}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className={styles.parent__child}
          style={
            index === currentItem
              ? { opacity : "1" ,transform : `translateX(0)`, borderRadius : '.5rem'}
              : {}
          }
        >
          {child}
        </div>
      ))}
      <div className={styles.parent__btns}>
        {children.map((_,index) => (
            <div key={index} onClick={() => setCurrentItem(index)} className={styles.parent__btn} style={index === currentItem ? {backgroundColor : "#fff"}: {}}></div>
        ))}
      </div>
    </div>
  );
};

export default ActiveSlider;
