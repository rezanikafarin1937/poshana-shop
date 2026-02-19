import { BaseUrl } from "@/Global/BaseUrl";
import Pagination from "@/utils/pagination/Pagination";
import Container from "@/components/container/Container";
import ItemCard from "@/components/item-card/ItemCard";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";



const Usage = async ({ params, searchParams }) => {
  const { title } = await searchParams;
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "10";
  const result = await fetch(
    `${BaseUrl}/usage-search?_page=${page}&_per_page=${per_page}&usage=${title}`,
    { cache: "no-store" },
  );
  const items = await result.json();

  return (
    <Container>
            <h1 className="title text-center my-[2rem]">{title}</h1>
            <div
              dir="rtl"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {items.data
                ? items.data.map(item => (
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
              path="usage"
              search="title"
              searchValue={title}
            />
      
    </Container>
  );
};

export default Usage;
