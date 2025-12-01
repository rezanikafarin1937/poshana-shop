import React from "react";
import MiniGallery from "../mini-gallery/MiniGallery";
import styles from "./item-card.module.css";

export interface IProductItemProps {
  id: string;
  title: string;
  price: number;
  images: [];
  description: string;
}

const ItemCard = (item: IProductItemProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={`/uploads/${item.images[0]}`} alt={item.title} />
      </div>
      <div className={styles.card__intro}>
        <MiniGallery images={item.images} width={40} height={40} />
        <div className="">{item.title}</div>
        <div className={styles.card__price}>
          {item.price.toLocaleString("fa")} تومان
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
