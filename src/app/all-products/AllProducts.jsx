
"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Pagination from "@/utils/pagination/Pagination";
import ItemCard from "@/components/item-card/ItemCard";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
import Container from "@/components/container/Container";

import { fetchProducts, filterProducts } from "@/lib/products";

function AllProductsContent() {
  const searchParams = useSearchParams();

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
          page,
          perPage,
        });

        setItems(result);
      } catch (error) {
        console.error("All products error:", error);
        setItems(null);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [page, perPage]);

  return (
    <Container>
      <h1 className="title text-center my-[2rem]">
        همه محصولات
      </h1>

      <div
        dir="rtl"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {loading ? (
          <p className="col-span-full text-center py-10">
            در حال بارگذاری محصولات...
          </p>
        ) : items?.data?.length > 0 ? (
          items.data.map((item) => (
            <LinkWrapper key={item.id} href={`/store/${item.id}`}>
              <ItemCard {...item} />
            </LinkWrapper>
          ))
        ) : (
          <p className="col-span-full text-center py-10">
            محصولی یافت نشد.
          </p>
        )}
      </div>

      {!loading && items?.data?.length > 0 && (
        <Pagination
          per_page={items.per_page}
          next={items.next}
          prev={items.prev}
          pages={items.pages}
          last={items.last}
          first={items.first}
          path="all-products"
        />
      )}
    </Container>
  );
}

export default function AllProducts() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-10">
          در حال بارگذاری...
        </div>
      }
    >
      <AllProductsContent />
    </Suspense>
  );
}
