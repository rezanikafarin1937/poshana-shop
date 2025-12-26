// import Container from "@/components/container/Container";
// import Pagination from "@/components/Pagination";
import ItemCard from "@/components/item-card/ItemCard";
import { IProductList } from "@/components/ProductItem";
import { BaseUrl } from "@/Global/BaseUrl";
import Link from "next/link";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
import HorizontalScroll from "@/components/horizontal-scroll/HorizontalScroll";
import { fetchUsage } from "@/components/fetch-usage/fetchUsage";
import { IUsagesProps } from "@/components/fetch-usage/fetchUsage";
import Avatar from "@/components/avatar/Avatar";
import GeneralCategory from "@/components/general-category/GeneralCategory";
import Support from "@/components/support/Support";
import Welcome from "@/components/welcome/Welcome";
import ServerSlider from "@/components/slider/ServerSlider";
import Pagination from "@/utils/pagination/Pagination";
import Slider from "@/utils/active-slider/Slider";
import WrpperSlider from "@/components/wrapper-slider/WrapperSlider";
import Accessories from "@/components/accessories/Accessories";
import Heading from "@/components/heading/Heading";
import FrameImage from "@/components/frame-image/FrameImage";
import Guarantee from "@/components/guarantee/Guarantee";

export interface IProductItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface IStoreProps {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string; title: string }>;
}

const supports = [
  "/support/support1.png",
  "/support/support2.png",
  "/support/support3.png",
  "/support/support4.png",
];
const categories = [
  "/generalcategory/cat1.jpg",
  "/generalcategory/cat2.jpg",
  "/generalcategory/cat3.jpg",
];
const linkOfCategories = ["feminine", "menswear", "kidswear"];
const catBaby = ["/generalcategory/cat4.jpg", "/generalcategory/cat5.jpg"];

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "3";
  const title = (await searchParams).title ?? "";

  const result = await fetch(
    `${BaseUrl}/products?_page=${page}&_per_page=${per_page}&title=${title}`,
    { cache: "no-cache" }
  );
  const items = (await result.json()) as IProductList;
  console.log("Pagination = ", items);

  const usages = await fetchUsage();
  console.log("data usages = ", usages);

  return (
    <>
      {/* <Container> */}
      <div className="flex flex-col">
        {
          <HorizontalScroll>
            {usages.map((usage: IUsagesProps) => (
              <Avatar key={usage.id} {...usage} />
            ))}
          </HorizontalScroll>
        }
        <Slider images={["1.webp", "2.webp", "3.webp", "4.webp"]} />
        <br />
        <Support images={supports} small={true}/>
        <br />

        <WrpperSlider
          bgColor="var(--active-text)"
          textColor="#fff"
          title="تخفیف‌های هیجان‌انگیز امروز"
          btnTitle="مشاهده همه"
        >
          <ServerSlider />
        </WrpperSlider>
        {/* <br />
        <br /> */}
        {/* <br /> */}
        <Accessories />
        {/* <div className="space"></div> */}
        <h1 className="relative top-9 text-[var(--active-text)] text-right text-[2rem] pr-4  max-[426px]:text-[1.5rem]">
          فروشگاه پوشانا
        </h1>

        <Support
          images={categories}
          links={linkOfCategories}
          rounded="bottom"
        />
        <div className="space"></div>
        <Heading
          title="محصولات شگفت انگیز"
          linkTitle="مشاهده همه "
          link="/store"
        />
        <ServerSlider />
        {/* <div className="space"></div> */}
        <FrameImage />
        <br />
        <WrpperSlider
          title="جدیدترین محصولات این ماه"
          btnTitle="مشاهده همه"
          bgColor="#eee"
          textColor="var(--global-text)"
        >
          <ServerSlider borderColor="var(--active-text)" />
        </WrpperSlider>

        <div className="space"></div>
        <h3 className="text-[var(--active-text)] text-right text-[2rem] pr-4 max-[426px]:text-[1.5rem]">
          فروشگاه نوجوانان
        </h3>
        <Support images={catBaby} links={["boys", "girls"]} rounded="all" />
        <div className="space"></div>

        {/* <GeneralCategory/> */}
        <Guarantee/>
        {/* <h1 className="text-[var(--active-text)] text-right text-[2rem] pr-4  max-[426px]:text-[1.5rem]">
          فروشگاه پوشانا
        </h1>

        <div
          dir="rtl"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {items.data.map((item: IProductItemProps) => (
            <LinkWrapper key={item.id} href={`/store/${item.id}`}>
              <ItemCard {...item} />
            </LinkWrapper>
          ))}
        </div> */}
        {/* <Pagination pageCount={items.pages} /> */}
        {/* <Pagination
          path="store"
          per_page={3}
          next={items.next}
          prev={items.prev}
          pages={items.pages}
          last={items.last}
          first={items.first}
        /> */}
      </div>
      {/* </Container> */}
    </>
  );
}

export default Store;
