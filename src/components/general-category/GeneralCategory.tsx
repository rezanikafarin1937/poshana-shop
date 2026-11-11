import styles from "./general-category.module.scss";
const GeneralCategory = () => {
  return (
    <div className={styles.general}>
      <div className={styles.general__category}>
        <img src="/generalcategory/cat1.jpg" alt="" />
      </div>
      <div className={styles.general__category}>
        <img src="/generalcategory/cat2.jpg" alt="" />
      </div>
      <div className={styles.general__category}>
        <img src="/generalcategory/cat3.jpg" alt="" />
      </div>
    </div>
  );
};

export default GeneralCategory;
