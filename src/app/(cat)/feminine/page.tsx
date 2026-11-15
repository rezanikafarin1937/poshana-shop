"use client"
// import { BaseUrl } from "@/Global/BaseUrl";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchProducts, filterProducts } from "@/lib/products";

import Pagination from "@/utils/pagination/Pagination";
import ItemCard from "@/components/item-card/ItemCard";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
import Container from "@/components/container/Container";

import Link from "next/link";
import {
  FaShirt,
  FaPersonDress,
  FaChild,
  FaArrowLeftLong,
} from "react-icons/fa6";

// type PageProps = {
//   searchParams: Promise<{
//     page?: string;
//     per_page?: string;
//   }>;
// };

// async function Menswear({ searchParams }: PageProps) {
//   const params = await searchParams;

//   const page = params.page ?? "1";
//   const per_page = params.per_page ?? "10";
//   const cat = "زنانه";

//   const result = await fetch(
//     `${BaseUrl}/products?_page=${page}&_per_page=${per_page}&cat=${encodeURIComponent(cat)}`,
//     { cache: "no-store" }
//   );

//   if (!result.ok) {
//     throw new Error("دریافت محصولات با خطا مواجه شد.");
//   }

//   const items = await result.json();

function FeminineContent() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const per_page = Number(searchParams.get("per_page")) || 10;

  const [items, setItems] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const products = await fetchProducts();

        const result = filterProducts(products, {
          cat: "زنانه",
          page,
          perPage: per_page,
        });

        setItems(result);
      } catch (error) {
        console.error("Feminine products error:", error);
        setItems(null);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [page, per_page]);

  const categories = [
    {
      id: "men",
      title: "مردانه",
      subtitle: "استایل شیک و روزمره",
      icon: FaShirt,
      href: "/menswear",
    },
    {
      id: "women",
      title: "زنانه",
      subtitle: "زیبایی در انتخاب",
      icon: FaPersonDress,
      href: "/feminine",
    },
    {
      id: "kids",
      title: "کودکانه",
      subtitle: "دنیای رنگارنگ کودکان",
      icon: FaChild,
      href: "/kidswear",
    },
  ];

  return (
    <Container>
      <main dir="rtl" className="w-full pb-12">
        {/* Category Hero */}
        <section className="relative mt-7 mb-8 overflow-hidden rounded-2xl bg-[#fdf0ef] px-6 py-10 sm:px-10 md:py-14">
          <div className="relative z-10 max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-bold text-[#e06c69]">
              POSHANA COLLECTION
            </span>

            <h1 className="mb-4 text-2xl font-extrabold text-[#292b2c] sm:text-3xl md:text-4xl">
              دنیای پوشاک زنانه
            </h1>

            <p className="max-w-lg text-sm leading-8 text-[#788185] sm:text-base">
              جدیدترین لباس‌ها و کفش‌های زنانه را با تنوعی از مدل‌ها و سبک‌های
              مختلف در پوشانا پیدا کنید.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#e06c69]">
              <span>انتخابی متفاوت برای استایلی خاص</span>
              <FaArrowLeftLong />
            </div>
          </div>

          {/* Decorative Shapes */}
          <div className="pointer-events-none absolute -left-12 -top-16 h-52 w-52 rounded-full bg-[#e99895]/20 sm:h-64 sm:w-64" />

          <div className="pointer-events-none absolute -bottom-24 left-36 h-48 w-48 rounded-full border-[25px] border-white/50" />
        </section>

        {/* Category Navigation */}
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="text-lg font-extrabold text-[#292b2c] sm:text-xl">
              دنیای پوشانا
            </h2>

            <p className="mt-2 text-xs text-[#788185] sm:text-sm">
              دسته‌بندی مورد علاقه خود را انتخاب کنید.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = category.id === "women";

              return (
                <Link
                  key={category.id}
                  href={category.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex flex-col items-center justify-center rounded-xl border p-4 text-center transition-all duration-300 sm:flex-row sm:justify-start sm:gap-4 sm:p-5 ${
                    isActive
                      ? "border-[#e06c69] bg-[#fff5f4] shadow-sm"
                      : "border-[#eeeeee] bg-white hover:border-[#e99895] hover:bg-[#fffafa]"
                  }`}
                >
                  <div
                    className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-xl transition-colors sm:mb-0 ${
                      isActive
                        ? "bg-[#e06c69] text-white"
                        : "bg-[#f5f5f5] text-[#788185] group-hover:bg-[#fdf0ef] group-hover:text-[#e06c69]"
                    }`}
                  >
                    <Icon />
                  </div>

                  <div>
                    <h3
                      className={`text-xs font-bold sm:text-sm ${
                        isActive ? "text-[#e06c69]" : "text-[#292b2c]"
                      }`}
                    >
                      {category.title}
                    </h3>

                    <p className="mt-1 hidden text-xs text-[#788185] sm:block">
                      {category.subtitle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Products Heading */}
        <section className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-extrabold text-[#292b2c] sm:text-xl">
              محصولات زنانه
            </h2>

            <p className="mt-2 text-xs text-[#788185]">
              انتخابی برای استایل روزمره و خاص شما
            </p>
          </div>

          <span className="rounded-full bg-[#fdf0ef] px-4 py-2 text-xs font-semibold text-[#e06c69]">
            مجموعه زنانه پوشانا
          </span>
        </section>

        {/* Product Grid */}
        {loading ? (
          <p className="text-center py-10">در حال بارگذاری محصولات...</p>
        ) : items?.data?.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {items.data.map((item: any) => (
              <LinkWrapper key={item.id} href={`/store/${item.id}`}>
                <ItemCard {...item} />
              </LinkWrapper>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-[#e4e4e4] bg-[#fafafa] px-5 py-16 text-center">
            <FaShirt className="mx-auto mb-4 text-4xl text-[#e99895]" />

            <h3 className="mb-2 font-bold text-[#292b2c]">محصولی پیدا نشد!</h3>

            <p className="text-sm text-[#788185]">
              در حال حاضر محصولی در این دسته‌بندی موجود نیست.
            </p>
          </div>
        )}

        {/* Pagination */}
        {!loading && items?.data?.length > 0 && (
          <div className="mt-10">
            <Pagination
              per_page={Number(per_page)}
              next={items.next}
              prev={items.prev}
              pages={items.pages}
              last={items.last}
              first={items.first}
              path="feminine"
            />
          </div>
        )}
      </main>
    </Container>
  );
}

export default function Feminine() {
  return (
    <Suspense
      fallback={
        <div className="py-10 text-center">
          در حال بارگذاری...
        </div>
      }
    >
      <FeminineContent />
    </Suspense>
  );
}

// import { BaseUrl } from "@/Global/BaseUrl";
// // import { IProductItemProps } from "@/components/ProductItem";
// import Pagination from "@/utils/pagination/Pagination";
// import ItemCard from "@/components/item-card/ItemCard";
// import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
// import Container from "@/components/container/Container";
// // import { IProductList } from "@/components/ProductItem";

// // interface IStoreProps {
// // //   params: Promise<{}>;
// //   searchParams: Promise<{ page: string; per_page: string }>;
// // }

// async function Feminine({ searchParams }) {
//   const page = (await searchParams).page ?? "1";
//   const per_page = (await searchParams).per_page ?? "10";
//   const cat = "زنانه";

//   const result = await fetch(
//     `${BaseUrl}/products?_page=${page}&_per_page=${per_page}&cat=${cat}`
//   ,{cache : 'no-store'});
//   const items = (await result.json());

//   return (
//     <Container>
//       <h1 className="title text-center my-[2rem]">زنانه</h1>
//       <div
//         dir="rtl"
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
//       >
//         {items.data
//           ? items.data.map((item) => (
//               <LinkWrapper key={item.id} href={`/store/${item.id}`}>
//                 <ItemCard {...item} />
//               </LinkWrapper>
//             ))
//           : ""}
//       </div>
//       <br />
//       <Pagination
//         per_page={10}
//         next={items.next}
//         prev={items.prev}
//         pages={items.pages}
//         last={items.last}
//         first={items.first}
//         path="feminine"
//       />
//     </Container>
//   );
// }

// export default Feminine;
