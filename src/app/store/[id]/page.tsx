import { BaseUrl } from "@/Global/BaseUrl";
import ZoomImage from "@/utils/zoom-image/ZoomImage";
import CartButton from "@/components/CartButton";
import Heading from '@/components/heading/Heading';
import Slider from "@/components/slider/Slider";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
import ItemCard from "@/components/item-card/ItemCard";
import { IProductItemProps } from "@/components/ProductItem";
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
  cat : string
}

async function page({ params }: ProductPageProps) {
  const { id } = await params;
  const result = await fetch(`${BaseUrl}/products/${id}`);
  const product = (await result.json()) as IGetProduct;
  // گرفتن محصولات مشابه بدین شکل 
  const results = await fetch(`${BaseUrl}/products?cat=${product.cat}`);
  const products = (await results.json()) as IGetProduct;
  console.log('productS = ',products);
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.parent__zoom}>
          <ZoomImage images={product.images} />
        </div>
        <div className={styles.parent__description}>
          <h2 className={styles.parent__title}>
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
          <div className="flex justify-start items-center w-full">
            <div className={styles.parent__title}>تعداد :</div>
            <span
              style={{
                margin: ".25rem",
                position: "relative",
                bottom: ".5rem",
              }}
            >
              <CartButton id={id} />
            </span>
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
      <div className="space"></div>
      <Heading
        title="محصولات مشابه"
        linkTitle="مشاهده همه "
        link="/store"
      />
            <Slider>
        {products.map((d : IProductItemProps) => (
            <LinkWrapper key={d.id} href={`/store/${d.id}`}>
                <ItemCard  {...d} width="250px" height="100%" />
            </LinkWrapper>
        ))}
      </Slider>

    </>
  );
}

export default page;
