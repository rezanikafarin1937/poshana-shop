import MiniGallery from "../mini-gallery/MiniGallery";
import styles from "./item-card.module.css";

export interface IProductItemProps {
  id: string;
  title: string;
  price: number;
  images: [];
  description: string;
}
interface ISizeProps {
  width?: string;
  height?: string;
}
// ترکیب دو مدل
type ItemCardProps = IProductItemProps & ISizeProps;


const ItemCard = ({ id, title, price, images, description, width, height }: ItemCardProps) => {
  return (
    <div
      className={styles.card}
      style={{ width: width ?? "auto", height: height ?? "auto" }}
    >
      <div className={styles.card__image}>
        <img src={`/uploads/${images[0]}`} alt={title} />
      </div>
      <div className={styles.card__intro}>
        <MiniGallery images={images} width={40} height={40} />
        <div className="">{title}</div>
        <div className={styles.card__price}>
          {price.toLocaleString("fa")} تومان
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
