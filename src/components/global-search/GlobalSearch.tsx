import React from "react";
import SearchIcon from "../search/icons/SearchIcon";
import styles from "./global-search.module.css";

import { useRouter, useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";

const GlobalSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("title", search);
    setSearch(() => "");
    router.push(`/search?${currentSearchParams.toString()}`);
  };


  return (
    <div className={styles.parent}>
      <input
        type="text"
        value={search}
        placeholder="جستجوی محصول..."
        onChange={(e) => setSearch(() => e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
            setSearch(() => "");
          }
        }}
      />
      <span className={styles.parent__search}>
        <span className={styles.parent__wrapperSearchIcon}  onClick={handleSearch}>
          <SearchIcon color="#989696" />
        </span>
      </span>
    </div>
  );
};

export default GlobalSearch;
