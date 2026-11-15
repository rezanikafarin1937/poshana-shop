import { publicPath } from "@/utils/path";
import MiniGallery from "../mini-gallery/MiniGallery";
import styles from "./item-card.module.css";

export interface IProductItemProps {
  id: string;
  title: string;
  price: number;
  discount: number;
  images: string[];
  description: string;
}

interface ISizeProps {
  width?: string;
  height?: string;
  borderColor?: string;
}

// ترکیب دو مدل
type ItemCardProps = IProductItemProps & ISizeProps;

const ItemCard = ({
  id,
  title,
  price,
  images = [],
  description,
  width,
  height,
  borderColor,
  discount,
}: ItemCardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        width: width ?? "auto",
        height: height ?? "auto",
        ...(borderColor ? { borderColor } : {}),
      }}
    >
      <div className={styles.card__image}>
        {discount ? (
          <span className={styles.card__discount}>
            {Number(discount).toLocaleString("fa")} %
          </span>
        ) : null}

        <img
          src={
            images[0]
              ? publicPath(`/uploads/${images[0]}`)
              : publicPath("/no-image.png")
          }
          alt={title}
        />
      </div>

      <div className={styles.card__intro}>
        <MiniGallery
          images={images}
          width={40}
          height={40}
        />

        <div className={styles.card__title}>
          {title}
        </div>

        <div className={styles.card__price}>
          <div style={{ color: "#515151" }}>
            {discount ? (
              <del>
                {Number(price).toLocaleString("fa")} تومان
              </del>
            ) : null}
          </div>

          <div>
            {discount
              ? (
                  Number(price) -
                  (Number(price) * discount) / 100
                ).toLocaleString("fa")
              : Number(price).toLocaleString("fa")} تومان
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;