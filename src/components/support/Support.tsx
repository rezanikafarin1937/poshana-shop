import { publicPath } from "@/utils/path";
import LinkWrapper from "../link-wrapper/LinkWrapper";
import styles from "./general-category.module.scss";

type IProps = {
  images?: string[];
  links?: string[];
  rounded?: string;
};

function Support({
  images = [],
  links = [],
  rounded = "none",
}: IProps) {
  const calcute = Math.floor(100 / images.length);
  const cat = styles[`general__cat-${calcute}`];

  // کلاس مربوط به گوشه‌های تصاویر
  const myRounded = `general__rounded-${rounded}`;

  const renderImages = () => {
    const result = [];
    let index = 0;

    for (const image of images) {
      const elem = (
        <div
          key={index}
          className={`${styles.general__category} ${cat} ${styles[myRounded]}`}
        >
          <LinkWrapper href={links[index] || "#"}>
            <img
              src={publicPath(image)}
              alt="ارسال رایگان"
            />
          </LinkWrapper>
        </div>
      );

      index++;
      result.push(elem);
    }

    return result;
  };

  return (
    <div
      className={`${styles.general}`}
    >
      {renderImages()}
    </div>
  );
}

export default Support;