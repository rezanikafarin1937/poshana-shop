import { BaseUrl } from "@/Global/BaseUrl";
import ZoomImage from "@/utils/zoom-image/ZoomImage";
import styles from "./product.module.scss";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

interface IGetProduct {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
}

async function page({ params }: ProductPageProps) {
  const { id } = await params;
  const result = await fetch(`${BaseUrl}/products/${id}`);
  const product = (await result.json()) as IGetProduct;
  return (
    <div className={styles.parent}>
      <div className={styles.parent__zoom}>
        <ZoomImage images={product.images} />
      </div>
      <div className={styles.parent__description}></div>
    </div>
  );
}

export default page;
