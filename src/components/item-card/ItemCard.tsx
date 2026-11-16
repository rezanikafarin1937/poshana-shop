import { publicPath } from "@/utils/path";
import styles from "./item-card.module.css";

export interface IProductItemProps {
  id: string;
  title: string;
  price: number;
  discount: number;
  images: string[];
  description: string;
  material: string;
  colors : string;
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
  material,
  colors,
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
          loading="lazy"
          decoding="async"
        />{" "}
      </div>

      <div className={styles.card__intro}>

        <div className={styles.card__title}>{title}</div>

        <div className={styles.card__material}>{material}</div>
        <div className={styles.card__colors}> <span>{colors.split("-").length.toLocaleString("fa")}</span> <span>رنگ</span></div>

        <div className={styles.card__price}>
          <div className={styles.card__disc}>
            {discount ? (
              <del>{Number(price).toLocaleString("fa")} تومان</del>
            ) : null}
          </div>

          <div>
            {discount
              ? (
                  Number(price) -
                  (Number(price) * discount) / 100
                ).toLocaleString("fa")
              : Number(price).toLocaleString("fa")}{" "}
            تومان
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
