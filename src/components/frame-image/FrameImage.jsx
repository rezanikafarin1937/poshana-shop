// this component only for show two image
import styles from "./frameimage.module.scss";
const SmallSlider = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.parent__item}>
        <img src="/active-slider/5.jpg" alt="فروشگاه لباس" />
      </div>
      <div className={styles.parent__item}>
        <img src="/active-slider/6.jpg" alt="فروشگاه لباس" />
      </div>
    </div>
  );
};

export default SmallSlider;
