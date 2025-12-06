import styles from "./general-category.module.scss";
type ImagesProps = {
  images?: string[];
  rounded ?: string
};

function support({ images = [] , rounded = "none" }: ImagesProps) {
  const calcute = Math.floor(100 / images.length);
  const cat = styles[`general__cat-${calcute}`];
  //خط بالا بر اساس تعداد تصاویر نام کلاس مربوط به آن را تولیدمیکند این کلاس ها کد ریسپانسیو را در خود دارند بنابراین به مشکل ریسپانسیو هم بر نمیخوریم
  console.log("calcute = ", cat);
  const myRounded = `general__rounded-${rounded}`;
  console.log('myRounded = ',myRounded)
  const renderImages = () => {
    const result = [];
    let index: number = 0;
    for (const image of images) {
      index++;
      const elem = (
        <div key={index} className={`${styles.general__category} ${cat} ${styles[myRounded]}`}>
          <img src={`${image}`} alt="ارسال رایگان" />
        </div>
      );
      result.push(elem);
    }
    return result;
  };
  return <div className={styles.general}>{renderImages()}</div>;
}

export default support;

