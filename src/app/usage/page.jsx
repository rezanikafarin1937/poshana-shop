
"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  fetchProducts,
  filterProducts,
} from "@/lib/products";

import Pagination from "@/utils/pagination/Pagination";
import Container from "@/components/container/Container";
import ItemCard from "@/components/item-card/ItemCard";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";

function UsageContent() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "";
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("per_page")) || 10;

  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const products = await fetchProducts();

        const result = filterProducts(products, {
          usage: title,
          page,
          perPage,
        });

        setItems(result);
      } catch (error) {
        console.error("Usage error:", error);
        setItems(null);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [title, page, perPage]);

  return (
    <Container>
      <h1 className="title text-center my-[2rem]">
        {title}
      </h1>

      {loading ? (
        <p className="text-center">
          در حال بارگذاری محصولات...
        </p>
      ) : items?.data?.length > 0 ? (
        <>
          <div
            dir="rtl"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {items.data.map((item) => (
              <LinkWrapper
                key={item.id}
                href={`/store/${item.id}`}
              >
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
            path="usage"
            search="title"
            searchValue={title}
          />
        </>
      ) : (
        <p className="text-center">
          محصولی پیدا نشد.
        </p>
      )}
    </Container>
  );
}

export default function Usage() {
  return (
    <Suspense
      fallback={
        <Container>
          <p className="text-center py-10">
            در حال بارگذاری صفحه...
          </p>
        </Container>
      }
    >
      <UsageContent />
    </Suspense>
  );
}
