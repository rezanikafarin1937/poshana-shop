import LinkWrapper from "../link-wrapper/LinkWrapper";
import styles from "./general-category.module.scss";
type IProps = {
  images?: string[];
  links?: string[];
  rounded?: string;
};

function support({ images = [], links = [], rounded = "none"}: IProps) {
  const calcute = Math.floor(100 / images.length);
  const cat = styles[`general__cat-${calcute}`];
  //خط بالا بر اساس تعداد تصاویر نام کلاس مربوط به آن را تولیدمیکند این کلاس ها کد ریسپانسیو را در خود دارند بنابراین به مشکل ریسپانسیو هم بر نمیخوریم
  console.log("calcute = ", cat);
  const myRounded = `general__rounded-${rounded}`;
  console.log("myRounded = ", myRounded);
  const renderImages = () => {
    const result = [];
    let index: number = 0;
    for (const image of images) {
      const elem = (
        <div
          key={index}
          className={`${styles.general__category} ${cat} ${styles[myRounded]}`}
        >
          <LinkWrapper href={links[index]}>
            <img src={`${image}`} alt="ارسال رایگان" />
          </LinkWrapper>
        </div>
      );
      index++;
      result.push(elem);
    }
    return result;
  };
  return <div className={styles.general}>{renderImages()}</div>;
}

export default support;
