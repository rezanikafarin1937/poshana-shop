import { BaseUrl } from "@/Global/BaseUrl";
import { IProductList } from "@/components/ProductItem";


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
  const per_page = (await searchParams).per_page ?? "3";
  const title = (await searchParams).title ?? "";

  const result = await fetch(
    `${BaseUrl}/products?_page=${page}&_per_page=${per_page}&title=${title}`,
    { cache: "no-cache" }
  );
  const items = (await result.json()) as IProductList;
  console.log("Pagination = ", items);
  return (
    <div>
      SEARCH
    </div>
  )
}

export default Search
