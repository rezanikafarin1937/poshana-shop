"use client";

import { publicPath } from "@/utils/path";
import ActiveSlider from "./ActiveSlider.jsx";

const Slider = ({ images }) => {
  return (
    <ActiveSlider width="100%" height="100%">
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "1rem",
            }}
            src={publicPath(`/active-slider/${image}`)}
            alt="فروشگاه لباس و کفش پوشانا"
          />
        </div>
      ))}
    </ActiveSlider>
  );
};

export default Slider;