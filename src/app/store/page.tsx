import Container from "@/components/container/Container";
import Pagination from "@/components/Pagination";
import ItemCard from "@/components/item-card/ItemCard";
import { IProductList } from "@/components/ProductItem";
import { BaseUrl } from "@/Global/BaseUrl";
import Link from "next/link";

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
    </Container>
  );
}

export default Store;
