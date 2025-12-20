import { BaseUrl } from "@/Global/BaseUrl";
import { IProductItemProps } from "@/components/ProductItem";
import Pagination from "@/utils/pagination/Pagination";
import ItemCard from "@/components/item-card/ItemCard";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
import Container from "@/components/container/Container";
import { IProductList } from "@/components/ProductItem";

interface IStoreProps {
//   params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string }>;
}

async function Feminine({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "3";

  const result = await fetch(
    `${BaseUrl}/products?_page=${page}&_per_page=${per_page}&cat=2`
  ,{cache : 'no-store'});
  const items = (await result.json()) as IProductList;



  return (
    <Container>
      <h1 className="title text-center my-[2rem]">بچگانه</h1>
      <div
        dir="rtl"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {items.data
          ? items.data.map((item: IProductItemProps) => (
              <LinkWrapper key={item.id} href={`/store/${item.id}`}>
                <ItemCard {...item} />
              </LinkWrapper>
            ))
          : ""}
      </div>
      <Pagination
        per_page={4}
        next={items.next}
        prev={items.prev}
        pages={items.pages}
        last={items.last}
        first={items.first}
        path="kidswear"
      />
    </Container>
  );
}

export default Feminine;
