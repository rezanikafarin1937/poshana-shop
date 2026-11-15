
"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  fetchProducts,
  filterProducts,
} from "@/lib/products";

import Pagination from "@/utils/pagination/Pagination";
import ItemCard from "@/components/item-card/ItemCard";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
import Container from "@/components/container/Container";

import "./search.css";

function SearchContent() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "";
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("per_page")) || 10;

  const [products, setProducts] = useState([]);
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const data = await fetchProducts();

        setProducts(data);

        const result = filterProducts(data, {
          title,
          page,
          perPage,
        });

        setItems(result);
      } catch (error) {
        console.error("Search error:", error);
        setItems(null);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [title, page, perPage]);

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
        <span style={{ color: "var(--active-text)" }}>
          {title}
        </span>
      </h6>

      <br />

      {loading ? (
        <p className="text-center">در حال بارگذاری محصولات...</p>
      ) : items?.data?.length > 0 ? (
        <>
          <div
            dir="rtl"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {items.data.map((item) => (
              <LinkWrapper key={item.id} href={`/store/${item.id}`}>
                <ItemCard {...item} />
              </LinkWrapper>
            ))}
          </div>

          <br />

          <Pagination
            per_page={perPage}
            next={items.next}
            prev={items.prev}
            pages={items.pages}
            last={items.last}
            first={items.first}
            path="search"
            searchValue={title}
            search="title"
          />
        </>
      ) : (
        <p className="text-center">محصولی پیدا نشد.</p>
      )}
    </Container>
  );
}

function Search() {
  return (
    <Suspense
      fallback={
        <Container>
          <p className="py-10 text-center">
            در حال بارگذاری صفحه جست‌وجو...
          </p>
        </Container>
      }
    >
      <SearchContent />
    </Suspense>
  );
}

export default Search;
