import { BaseUrl } from "@/Global/BaseUrl";
import { IProductList } from "@/components/ProductItem";
import Pagination from "@/utils/pagination/Pagination";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
import ItemCard from "@/components/item-card/ItemCard";

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

async function Search({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "10";
  const title = (await searchParams).title ?? "";

  //   const result = await fetch(
  //     `${BaseUrl}/products?_page=${page}&_per_page=${per_page}&title=${title}`,
  //     { cache: "no-cache" }
  //   );

  // این تکه کد و گرفتن کل داده از سرور  در حالت عادی کار کاملا اشتباهی است و فقط برای شبیه سازی سرچ استفاده شده است در این جا چون داده ها کم است و برای  نمونه کار میباشد اشکال ندارد
  const result = await fetch(`${BaseUrl}/products`, { cache: "no-cache" });

  console.log("RRsult = ", result);

  //این تکه کد یک شبیه ساز سرچ است
  let items = (await result.json()) as IProductList;
  items = items.filter((item) => item.title.indexOf(`${title}`) > -1);
  console.log("Pagination = ", items);

  return (
    <>
      <div className="space"></div>
      <h1 className="title" style={{textAlign : "center",color : "var(--active-text)"}}>فروشگاه پوشانا</h1>
      <br /> 
      <div
        dir="rtl"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {items.map((item: IProductItemProps, index: number) => (
          <LinkWrapper key={index} href={`/store/${item.id}`}>
            <ItemCard {...item} />
          </LinkWrapper>
        ))}
      </div>
       <div className="space"></div> 
      
      <Pagination
        path="search"
        per_page={10}
        next={items.next}
        prev={items.prev}
        pages={items.pages}
        last={items.last}
        first={items.first}
      />
    </>
  );
}

export default Search;