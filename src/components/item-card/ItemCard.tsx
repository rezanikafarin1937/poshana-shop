"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import MiniGallery from "../mini-gallery/MiniGallery";

import styles from "./item-card.module.css";

export interface IProductItemProps {
  id: string;
  title: string;
  price: number;
  discount: number;
  images: [];
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
  images,
  description,
  width,
  height,
  borderColor,
  discount,
}: ItemCardProps) => {
  const [isDragging, setIsDragging] = useState(false); // وضعیت درگ
  const [startX, setStartX] = useState(0); // موقعیت شروع درگ

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if (e.type === "touchstart") {
      setStartX(() => (e as React.TouchEvent).touches[0].clientX);
    } else {
      setStartX(() => (e as React.MouseEvent).clientX);
    }
  };
  const stopDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false);
    let endX = null;
    if (e.type === "touchstart") {
      endX = (e as React.TouchEvent)?.touches[0]?.clientX;
    } else {
      endX = (e as React.MouseEvent)?.clientX;
    }
    // در این کد به این نتیجه رسیدم که اگر کلاینت ایکس در موس داون و موس آپ یکی باشد مثل این است که عمل کلیک صورت گرفته و این کار صرفا برای کنترل عمل درگ در اسلایدر انجام شده است
    console.log("startX = ", startX);
    console.log("endX = ", endX);

    if (endX === startX) {
      router.push(`store/${id}`);
    } else {
      console.log("is Dragble");
    }
  };

  const router = useRouter();
  const goToStore = (e) => {
    router.push(`store/${id}`);
  };
  return (
    <div
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      className={styles.card}
      draggable={false}
      style={{
        // ...(borderColor ? { borderColor } : {}),
        width: width ?? "auto",
        height: height ?? "auto",
      }}
      // style={{borderColor: borderColor || undefined, width: width ?? "auto", height: height ?? "auto",}}
    >
      <div className={styles.card__image}>
        {discount ? (
          <span className={styles.card__discount}>
            {Number(discount).toLocaleString("fa")} %
          </span>
        ) : (
          ""
        )}
        <img src={`/uploads/${images[0]}`} alt={title} draggable={false} />
      </div>
      <div className={styles.card__intro}>
        <MiniGallery images={images} width={40} height={40} />
        <div className="">{title}</div>
        <div className={styles.card__price}>
          <div style={{ color: "#515151" }}>
            {discount ? (
              <del> {Number(price).toLocaleString("fa")} تومان </del>
            ) : (
              ""
            )}
          </div>
          <div>
            {discount
              ? (
                  Number(price) -
                  (Number(price) * discount) / 100
                ).toLocaleString("fa")
              : Number(price).toLocaleString("fa")}{" "}
            تومان{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
