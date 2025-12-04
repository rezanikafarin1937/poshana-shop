import styles from "./general-category.module.scss";
type ImagesProps = {
  images?: string[];
};

function support({ images = [] }: ImagesProps) {
  const calcute = Math.floor(100 / images.length);
  const cat = styles[`general__cat-${calcute}`];
  //خط بالا بر اساس تعداد تصاویر نام کلاس مربوط به آن را تولیدمیکند این کلاس ها کد ریسپانسیو را در خود دارند بنابراین به مشکل ریسپانسیو هم بر نمیخوریم
  console.log("calcute = ", cat);
  const renderImages = () => {
    const result = [];
    let index: number = 0;
    for (const image of images) {
      index++;
      const elem = (
        <div key={index} className={`${styles.general__category} ${cat}`}>
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

/*import styles from "./general-category.module.scss";
const Support = () => {
  const getFilesNames = () => {
    const arrNames = [];
    for (let i = 1; i <= 4; i++) {
      let str = `/support/support${i}.png`;
      arrNames.push(str);
    }
    console.log("arrNames = ", arrNames, '   type:',typeof arrNames);
    return arrNames;
  };
  const supporElement = (...stringArray) => {
    console.log('string Array = ',stringArray);
    const elements = [];
    for (let i = 0; i <= 3; i++) {
      let elem = (
        <div className={styles.general__category}>
          <img src={`${srtingArray[i]}`} alt="ضمانت فروش لباس" />
        </div>
      );
      elements.push(elem);
    }
    console.log('Elements = ',elements)
    // return elements.length > 0 ? elements : [];
  };
  //   return <div className={styles.general}>{supporElement(getFilesNames())}</div>;
  return (
    <div className={styles.general}>
        {getFilesNames()}
    </div>
  );
};
export default Support;
*/
