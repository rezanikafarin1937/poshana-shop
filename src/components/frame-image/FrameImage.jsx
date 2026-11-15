
import styles from "./frameimage.module.scss";
import { publicPath } from "@/utils/path";

const SmallSlider = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.parent__item}>
        <img
          src={publicPath("/active-slider/5.jpg")}
          alt="فروشگاه لباس"
        />
      </div>

      <div className={styles.parent__item}>
        <img
          src={publicPath("/active-slider/6.jpg")}
          alt="فروشگاه لباس"
        />
      </div>
    </div>
  );
};

export default SmallSlider;