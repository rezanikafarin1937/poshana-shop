import { publicPath } from "@/utils/path";
import styles from "./phtoframe.module.scss";

const PhtoFrame = ({ image, title }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.parent__wrapper}>
        <div className={styles.parent__content}>
          <img src={publicPath(image)} alt="فروشگاه لباس پوشانا" />{" "}
          <div className={styles.parent__overlay}></div>
        </div>
        <div className={styles.parent__title}>{title}</div>
      </div>
    </div>
  );
};

export default PhtoFrame;
