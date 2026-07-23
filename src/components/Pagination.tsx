"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";
import { Suspense } from "react";

const PaginationContent = ({
  pageCount,
}: {
  pageCount: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;

    const currentSearchParams = new URLSearchParams(
      searchParams.toString()
    );

    currentSearchParams.set("page", page.toString());
    currentSearchParams.set("per_page", "2");

    router.push(`/store?${currentSearchParams.toString()}`);
  };

  return (
    <div className="p-10">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

const Pagination = ({
  pageCount,
}: {
  pageCount: number;
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaginationContent pageCount={pageCount} />
    </Suspense>
  );
};

export default Pagination;




// "use client";
// import { useRouter, useSearchParams } from "next/navigation";
// import ReactPaginate from "react-paginate";
// import { Suspense } from "react";

// const Pagination = ({ pageCount }: { pageCount: number }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const handlePageClick = (e: { selected: number }) => {
//     const page = e.selected + 1;
//     const currentSearchParams = new URLSearchParams(searchParams.toString());
//     currentSearchParams.set("page", page.toString());
//     currentSearchParams.set("per_page", "2");
//     router.push(`/store?${currentSearchParams.toString()}`);
//   };
//   return (
//     <div className="p-10">
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </div>
//   );
// };

// export default Pagination;
