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
      <div className={styles.parent__description}>
        <h2>
          {product.title} کد : {Number(product.id).toLocaleString("fa")}
        </h2>
        <p>
          شناسه محصول:{" "}
          <span style={{ color: "var(--color-site-two)" }}>
            {Number(product.id).toLocaleString("fa")}
          </span>
        </p>
        <h6 className="font-16 text-justify" style={{ lineHeight: "26px" }}>
          توجه!
          <p>❌ حتماً راهنمای سایز مطالعه شود. ❌</p>
        </h6>
        <div className={styles.parent__wrapperprice}>
          <div className={styles.parent__pricebox}>
            {Number(product.price).toLocaleString("fa")} تومان
          </div>
        </div>
                <h6
          className="font-16 text-justify text-[var(--title-product)]"
          style={{ lineHeight: "26px" }}
        >
          ✔️ مرجوعی بی دردسر ، راحت و سریع !
        </h6>
        <div className={styles.parent__btnwrapper}>
          <button className={styles.parent__btn}>افزودن به سبد خرید</button>
          <button className={styles.parent__btnfast}>خرید سریع</button>
        </div>
        <br />
        <p>راهنمای سایزبندی حتما مطالعه شود.</p>
        <div className={styles.parent__boxinfo}>
          <div className={styles.parent__info}>جنس : </div>
          <div className={styles.parent__info}>سایز : </div>
          <div className={styles.parent__info}>مدل و رنگ : </div>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default page;
