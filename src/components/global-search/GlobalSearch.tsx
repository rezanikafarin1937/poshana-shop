"use client";

import  { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import SearchIcon from "../search/icons/SearchIcon";
import styles from "./global-search.module.css";

const GlobalSearchContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const currentSearchParams = new URLSearchParams(
      searchParams.toString()
    );

    currentSearchParams.set("title", search);

    router.push(`/search?${currentSearchParams.toString()}`);

    setSearch("");
  };

  return (
    <div className={styles.parent}>
      <input
        type="text"
        value={search}
        placeholder="جستجوی محصول..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <span className={styles.parent__search}>
        <span
          className={styles.parent__wrapperSearchIcon}
          onClick={handleSearch}
        >
          <SearchIcon color="#989696" />
        </span>
      </span>
    </div>
  );
};

const GlobalSearch = () => {
  return (
    <Suspense fallback={null}>
      <GlobalSearchContent />
    </Suspense>
  );
};

export default GlobalSearch;
