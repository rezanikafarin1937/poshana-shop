import HorizontalScroll from "@/components/horizontal-scroll/HorizontalScroll";
import { fetchUsage } from "@/components/fetch-usage/fetchUsage";
import { IUsagesProps } from "@/components/fetch-usage/fetchUsage";
import Avatar from "@/components/avatar/Avatar";
import Support from "@/components/support/Support";
import ServerSlider from "@/components/slider/ServerSlider";
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
  const usages = await fetchUsage();

  return (
    <>
      <div className="flex flex-col">
        {
          <HorizontalScroll>
            {usages.length > 0
              ? usages.map((usage: IUsagesProps) =>
                  usage.image ? <Avatar key={usage.id} {...usage} /> : "",
                )
              : ""}
          </HorizontalScroll>
        }
        <Slider images={["1.webp", "2.webp", "3.webp", "4.webp"]} />
        <br />
        <Support images={supports} small={true} />
        <br />

        <WrpperSlider
          bgColor="var(--active-text)"
          textColor="#fff"
          title="تخفیف‌های هیجان‌انگیز امروز"
          btnTitle="مشاهده همه"
        >
          <ServerSlider search="discount" />
        </WrpperSlider>
        <Accessories />
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
        <div style={{ marginTop: "1rem" }}></div>
        <ServerSlider search="old"/>
        <div style={{ marginTop: "1rem" }}></div>
        <FrameImage />
        <div style={{ marginTop: "1rem" }}></div>
        <WrpperSlider
          title="جدیدترین محصولات این ماه"
          btnTitle="مشاهده همه"
          bgColor="#eee"
          textColor="var(--global-text)"
        >
          <ServerSlider search="new" borderColor="var(--active-text)" />
        </WrpperSlider>

        <div className="space"></div>
        <h3 className="text-[var(--active-text)] text-right text-[2rem] pr-4 max-[426px]:text-[1.5rem]">
          فروشگاه نوجوانان
        </h3>
        <Support images={catBaby} links={["boys", "girls"]} rounded="all" />
        <div className="space-mobile-mode"></div>
        <Guarantee />
      </div>
    </>
  );
}

export default Store;
