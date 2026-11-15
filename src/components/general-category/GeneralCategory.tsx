import styles from "./general-category.module.scss";
import { publicPath } from "@/utils/path";

const GeneralCategory = () => {
  return (
    <div className={styles.general}>
      <div className={styles.general__category}>
        <img src={publicPath("/generalcategory/cat1.jpg")} alt="" />
      </div>

      <div className={styles.general__category}>
        <img src={publicPath("/generalcategory/cat2.jpg")} alt="" />
      </div>

      <div className={styles.general__category}>
        <img src={publicPath("/generalcategory/cat3.jpg")} alt="" />
      </div>
    </div>
  );
};

export default GeneralCategory;