import Container from "@/components/container/Container";
import Pagination from "@/components/Pagination";
import ItemCard from "@/components/item-card/ItemCard";
import { IProductList } from "@/components/ProductItem";
import { BaseUrl } from "@/Global/BaseUrl";
import Link from "next/link";
import HorizontalScroll from "@/components/horizontal-scroll/HorizontalScroll";

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

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "5";
  const title = (await searchParams).title ?? "";

  const result = await fetch(
    `${BaseUrl}/products?_page=${page}&_per_page=${per_page}&title=${title}`
  );
  const items = (await result.json()) as IProductList;
  return (
    <Container>
      <div className="flex flex-col">
        {<HorizontalScroll>
          {
            <>
              <div className="w-[100px] h-[100px] bg-[blue]">1</div>
              <div className="w-[100px] h-[100px] bg-[blue]">2</div>
              <div className="w-[100px] h-[100px] bg-[blue]">3</div>
              <div className="w-[100px] h-[100px] bg-[blue]">4</div>
              <div className="w-[100px] h-[100px] bg-[blue]">5</div>
              <div className="w-[100px] h-[100px] bg-[blue]">6</div>
              <div className="w-[100px] h-[100px] bg-[blue]">7</div>
              <div className="w-[100px] h-[100px] bg-[blue]">8</div>
              <div className="w-[100px] h-[100px] bg-[blue]">9</div>
              <div className="w-[100px] h-[100px] bg-[blue]">10</div>
              <div className="w-[100px] h-[100px] bg-[blue]">11</div>
              <div className="w-[100px] h-[100px] bg-[blue]">12</div>
              <div className="w-[100px] h-[100px] bg-[blue]">13</div>
              <div className="w-[100px] h-[100px] bg-[blue]">14</div>
              <div className="w-[100px] h-[100px] bg-[blue]">15</div>
            </>
          }
        </HorizontalScroll> }

        <div
          dir="rtl"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {items.data.map((item: IProductItemProps) => (
            <Link key={item.id} href={`/store/${item.id}`}>
              <ItemCard {...item} />
            </Link>
          ))}
        </div>
        <Pagination pageCount={items.pages} />
      </div>
    </Container>
  );
}

export default Store;
