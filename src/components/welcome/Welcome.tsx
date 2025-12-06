import styles from "./welcome.module.scss";
import GoodNews from "../good-news/GoodNews";
const Slider = () => {
  return (
    <div className={styles.parent}>
      <h1 dir="rtl" className="">
        به فروشگاه لباس و کفش{" "}
        <span className="text-[var(--active-text)]">پوشانا</span> خوش آمدید
      </h1>
      <div className={styles.parent__children}>
        <GoodNews title="تازه" />
        <GoodNews title="ویژه" color="var(--active-text)" />
        <GoodNews title="پرفروش" />
        <GoodNews title="تخفیف%" color="#e06c69" />
      </div>
    </div>
  );
};

export default Slider;
