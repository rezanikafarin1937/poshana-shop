"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./search.module.scss";
import CloseIcon from "./icons/CloseIcon";
import SearchIcon from "./icons/SearchIcon";

function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [closeBox, setCloseBox] = useState(false);
  const handleSearch = () => {
    setCloseBox(true);
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("title", search);
    router.push(`/store?${currentSearchParams.toString()}`);
  };
  return (
    <div className={styles.parent} style={closeBox ? { display: "none" } : {}}>
      <div className={styles.parent__search}>
        <span
          className={styles.parent__closeicon}
          onClick={() => setCloseBox(true)}
        >
          <CloseIcon />
        </span>
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="bg-gray-300"
          placeholder="جستجو"
        />
        <span className={styles.parent__searchicon} onClick={handleSearch}>
          <SearchIcon />
          
        </span>
      </div>
    </div>
  );
}

export default Search;
