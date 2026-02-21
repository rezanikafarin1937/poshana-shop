import { BaseUrl } from "@/Global/BaseUrl";
// import { IProductItemProps } from "@/components/ProductItem";
import Pagination from "@/utils/pagination/Pagination";
import ItemCard from "@/components/item-card/ItemCard";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
import Container from "@/components/container/Container";
// import { IProductList } from "@/components/ProductItem";
import "./search.css";


// interface IStoreProps {
//   //   params: Promise<{}>;
//   searchParams: Promise<{ page: string; per_page: string; title: string }>;
// }

async function Search({ searchParams }) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "10";
  const title = (await searchParams).title ?? "";

  const result = await fetch(
    `${BaseUrl}/search?_page=${page}&_per_page=${per_page}&title=${title}`,
    { cache: "no-store" },
  );
  const items = (await result.json());
  console.log("items = ", items);

  return (
    <Container>
      <div className="space"></div>
      <h1
        className="title"
        style={{ textAlign: "center", color: "var(--active-text)" }}
      >
        فروشگاه پوشانا
      </h1>
      <h6 className="box">
        نتایج یافت شده برای{" "}
        <span style={{ color: `var(--active-text)` }}>{title}</span>
      </h6>
      <br />

      <h1 className="title text-center my-[2rem]">{}</h1>
      <div
        dir="rtl"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {items.data
          ? items.data.map((item) => (
              <LinkWrapper key={item.id} href={`/store/${item.id}`}>
                <ItemCard {...item} />
              </LinkWrapper>
            ))
          : ""}
      </div>
      <br />
      <Pagination
        per_page={10}
        next={items.next}
        prev={items.prev}
        pages={items.pages}
        last={items.last}
        first={items.first}
        path="search"
        searchValue={`${title}`}
        search="title"
      />
    </Container>
  );
}
export default Search;
