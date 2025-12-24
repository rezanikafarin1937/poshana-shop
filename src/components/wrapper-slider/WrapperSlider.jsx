// This component is a wrapper for cards in a slider, used to showcase discounts or new and featured products. The color, background, and text can be customized through props.

import styles from "./wrapperslider.module.scss";
const WrapperSlider = ({ bgColor = null, textColor = null,title = "", btnTitle = "", children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__header} style={bgColor ? {backgroundColor : `${bgColor}`,color : `${textColor}`} : {}}>
        <span className={styles.wrapper__title}>{title}</span>
        <span className={styles.wrapper__btnTitle}>
          <div className={styles.wrapper__arrow} style={bgColor ? {borderColor : `${textColor}`} : {}}></div>
          <span style={{ margin: "0 .25rem" }}></span>
          {btnTitle}
        </span>
      </div>
      <div className={styles.wrapper__content}>{children}</div>
    </div>
  );
};

export default WrapperSlider;
