import { publicPath } from "@/utils/path";
import styles from "./mini-gallery.module.css";

type MiniGalleryProps = {
  images?: string[];
  width: string | number;
  height: string | number;
};

const MiniGallery = ({
  images = [],
  width,
  height,
}: MiniGalleryProps) => {
  const renderImages = () => {
    const result = [];

    let index: number = 0;

    for (const image of images) {
      if (index === 4) break;
      else index++;

      const elem = (
        <div
          key={index}
          className={styles.gallery__image}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          <img
            src={publicPath(`/uploads/${image}`)}
            alt="سایت فروش لباس"
          />
        </div>
      );

      result.push(elem);
    }

    return result;
  };

  return (
    <div className={styles.gallery}>
      {renderImages()}
    </div>
  );
};

export default MiniGallery;