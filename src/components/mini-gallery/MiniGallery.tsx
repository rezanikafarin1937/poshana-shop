
"use client";

import { useEffect, useRef } from "react";
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
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const imageElements = gallery.querySelectorAll<HTMLImageElement>(
      "img[data-src]"
    );

    // پشتیبانی مرورگر از IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      imageElements.forEach((img) => {
        img.src = img.dataset.src || "";
        img.removeAttribute("data-src");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;

            img.src = img.dataset.src || "";
            img.removeAttribute("data-src");

            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "300px 0px",
        threshold: 0,
      }
    );

    imageElements.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, [images]);

  return (
    <div className={styles.gallery} ref={galleryRef}>
      {images.slice(0, 4).map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={styles.gallery__image}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          <img
            data-src={publicPath(`/uploads/${image}`)}
            alt="تصویر محصول"
            decoding="async"
            width={Number(width)}
            height={Number(height)}
          />
        </div>
      ))}
    </div>
  );
};

export default MiniGallery;
