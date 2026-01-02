import { BaseUrl } from "@/Global/BaseUrl";
import ZoomImage from "@/utils/zoom-image/ZoomImage";
import CartButton from "@/components/CartButton";
import Heading from "@/components/heading/Heading";
import Slider from "@/components/slider/Slider";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
import ItemCard from "@/components/item-card/ItemCard";
import { IProductItemProps } from "@/components/ProductItem";
import styles from "./product.module.scss";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

interface IGetProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  discount: number;
  cat: string;
  usage: string;
  material: string;
  model: string;
  size: string;
  colors: string;
}

async function page({ params }: ProductPageProps) {
  const { id } = await params;
  const result = await fetch(`${BaseUrl}/products/${id}`);
  const product = (await result.json()) as IGetProduct;
  const colors = product.colors ? product?.colors.split("-") : [];
  const sizes = product.size ? product?.size.split("-") : [];

  // گرفتن محصولات مشابه بدین شکل
  const results = await fetch(
    `${BaseUrl}/products?cat=${product?.cat}&?usage=${product?.usage}`
  );
  const products = (await results.json()) as IGetProduct;

  const printTitle = () => {
    return (
      <>
        <h1 className={styles.parent__titlepage}>
          <span>فروشگاه پوشاک پوشانا </span>
          <span className={styles.parent__arrow}></span>
          <span>{product?.cat}</span>
          <span className={styles.parent__arrow}></span>
          <span>{product?.usage}</span>
          <span className={styles.parent__arrow}></span>
          <span>{product?.title}</span>
          {/* <span className={styles.parent__arrow}></span> */}
          <span> کد </span>
          <span>{Number(product?.id).toLocaleString("fa")}</span>
          {/* <span className={styles.parent__arrow}></span> */}
        </h1>
      </>
    );
  };

  return (
    <>
      <div className={styles.parent__wrappertitle}>{printTitle()}</div>

      <div className={styles.parent}>
        <div className={styles.parent__zoom}>
          <ZoomImage images={product.images} />
          <br />
          <div className={styles.parent__wrapperbox}>
            <div className={styles.parent__titlebox} style={{textAlign : "right"}}>سایر توضیحات</div>
            <div  className={styles.parent__boxinfo}>
              <div className={styles.parent__info}>جنس : <span style={{color : "var(--color-site)"}}>{product.material}</span> </div>
              <div className={styles.parent__info}>سایز : <span style={{color : "var(--color-site)"}}>{product.size}</span> </div>
              <div className={styles.parent__info}>مدل : <span style={{color : "var(--color-site)"}}>{product.model}</span> </div>
              <div className={styles.parent__info}>رنگها : <span style={{color : "var(--color-site)"}}>{product.colors}</span> </div>
              <p className={styles.parent__chatter}>{product.description}</p>
            </div>
            </div>
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
          <h6 className="font-16 text-justify whitespace-nowrap" style={{ lineHeight: "26px" }}>
            توجه!
            <p>❌ حتماً راهنمای سایز مطالعه شود. ❌</p>
          </h6>
          <div className={styles.parent__wrapperprice}>
            <div>
              {product.discount ? (
                <>
                  {" "}
                  <del>{Number(product.price).toLocaleString("fa")} تومان</del>
                  <p style={{ color: "var(--active-text)" }}>
                    %{Number(product.discount).toLocaleString("fa")} تخفیف
                  </p>
                </>
              ) : (
                ""
              )}
            </div>
            <div className={styles.parent__pricebox}>
              {product.discount
                ? (
                    Number(product.price) -
                    Number(product.price) * Number(product.discount / 100)
                  ).toLocaleString("fa")
                : Number(product.price).toLocaleString("fa")}{" "}
              تومان
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              className={styles.parent__title}
              style={{ position: "relative", top: "1rem", marginLeft: "1rem" }}
            >
              تعداد:{" "}
            </div>
            <CartButton id={id} />
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
          <br />
          <div className={styles.parent__helpbox}>                  
          <h6 className="font-16 text-justify whitespace-nowrap" style={{ lineHeight: "26px" }}>
            توجه!
            <p>❌ حتماً راهنمای سایز مطالعه شود. ❌</p>
          </h6>
          <br />    
            <div className={styles.parent__othertitle}>جنس</div>
            <div className={styles.parent__wrappersize}>
              <p  className={styles.parent__size}> {product?.material} </p>
          </div>
          <br />
          <div className={styles.parent__othertitle}>سایزبندی</div>
          <div className={styles.parent__wrappersize}>
            {sizes.map((size, index) => (
              <p className={styles.parent__size} key={index}>
                {size}
              </p>
            ))}
          </div>
          <br />
          <div className={styles.parent__othertitle}>رنگ بندی</div>
          <div className={styles.parent__wrappersize}>
            {colors.map((color, index) => (
              <p className={styles.parent__size} key={index}>
                {color}
              </p>
            ))}
          </div>
          </div>
          <br />
        </div>
      </div>
      <div className="space"></div>
      <Heading title="محصولات مشابه" linkTitle="مشاهده همه " link="/store" />
      <Slider>
        {products.map((d: IProductItemProps) => (
          <LinkWrapper key={d.id} href={`/store/${d.id}`}>
            <ItemCard {...d} width="250px" height="100%" />
          </LinkWrapper>
        ))}
      </Slider>
    </>
  );
}

export default page;
