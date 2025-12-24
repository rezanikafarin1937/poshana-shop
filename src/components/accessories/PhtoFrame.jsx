import styles from "./phtoframe.module.scss";

const PhtoFrame = ({ image, title }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.parent__wrapper}>
        <div className={styles.parent__content}>
          <img src={image} alt="فروشگاه لباس پوشانا" />
        </div>
        <div className={styles.parent__title}>{title}</div>
      </div>
    </div>
  );
};

export default PhtoFrame;
