import Container from "@/components/container/Container";
import Pagination from "@/components/Pagination";
import ItemCard from "@/components/item-card/ItemCard";
import { IProductList } from "@/components/ProductItem";
import { BaseUrl } from "@/Global/BaseUrl";
import Link from "next/link";
import LinkWrapper from '@/components/link-wrapper/LinkWrapper';
import HorizontalScroll from "@/components/horizontal-scroll/HorizontalScroll";
import { fetchUsage } from "@/components/fetch-usage/fetchUsage";
import { IUsagesProps } from "@/components/fetch-usage/fetchUsage";
import Avatar from "@/components/avatar/Avatar";
import GeneralCategory from "@/components/general-category/GeneralCategory";
import Support from "@/components/support/Support";
import Welcome from "@/components/welcome/Welcome";
import Footer from "@/components/footer/Footer";
import ServerSlider from "@/components/slider/ServerSlider";

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
  "/support/support2.png",
  "/support/support4.png",
];
const categories = [
  "/generalcategory/cat1.jpg",
  "/generalcategory/cat2.jpg",
  "/generalcategory/cat3.jpg",
];
const catBaby = ["/generalcategory/cat4.jpg", "/generalcategory/cat5.jpg"];

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "5";
  const title = (await searchParams).title ?? "";

  const result = await fetch(
    `${BaseUrl}/products?_page=${page}&_per_page=${per_page}&title=${title}`
  );
  const items = (await result.json()) as IProductList;

  const usages = await fetchUsage();
  console.log("data usages = ", usages);

  return (
    <>
<Container>
      <div className="flex flex-col">
        {
          <HorizontalScroll>
            {usages.map((usage: IUsagesProps) => (
              <Avatar key={usage.id} {...usage} />
            ))}
          </HorizontalScroll>
        }
        <Welcome />
        <ServerSlider/>
        <div className="mt-10">
          <Support images={supports}/>
        </div>
        <Support images={categories} rounded="bottom" />
        <Support images={catBaby}  rounded="all"/>
        {/* <GeneralCategory/> */}
        <div
          dir="rtl"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {items.data.map((item: IProductItemProps) => (
            <LinkWrapper key={item.id} href={`/store/${item.id}`}>
              <ItemCard {...item} />
            </LinkWrapper>
          ))}
        </div>
        <Pagination pageCount={items.pages} />
      </div>
    </Container>
    <Footer />
    </>
  );
}

export default Store;
