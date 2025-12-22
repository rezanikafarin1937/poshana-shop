"use client";
import ActiveSlider from "./ActiveSlider.jsx";
const Slider = ({ images} ) => {
  return (
    <ActiveSlider width="100%" height="100%" >
      {images.map((image, index) => (
        <div key={index} style={{ width : "100%", height : "100%",borderRadius : '.5rem'}}>
          <img style={{width : "100%" , height : "100%",borderRadius : '.5rem'}} src={`/active-slider/${image}`} alt="فروشگاه لباس و کفش پوشانا" />
        </div>
      ))}
    </ActiveSlider>
  );
};

export default Slider;
