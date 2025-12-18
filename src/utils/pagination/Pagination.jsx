"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./pagination.module.scss";
// interface IPaginationProps {
//   first?: number;
//   items?: number;
//   last?: number;
//   next: number | null;
//   pages: number | null;
//   prev: number | null;
// }

const Pagination = ({
  next = null,
  prev = null,
  pages = null,
  last = null,
  first = null,
}) => {
  const [currentPage, setCurrentPage] = useState(null);
  const router = useRouter();
  const per_page = 2;

  const handleClick = (myPage) =>{
    router.push(`/store?page=${myPage}&per_page=${per_page}`);
    console.log(myPage)
  }

  function renderItems() {
    let items = [];
    console.log("currentPage = ", currentPage);
    if (currentPage) {
      if (prev) {
        let prevElem = (
          <div key="0" className={styles.paginate__btn} onClick={() => handleClick(prev)}>
            قبلی
          </div>
        );
        items.push(prevElem);
      }
      if(first && (currentPage !== first)){
        let firstElem = <div key="1" className={styles.paginate__btn} onClick={() => handleClick(first)}>{parseInt(first).toLocaleString('fa')}</div>
        items.push(firstElem);
      }
      if((currentPage !== 2) && (prev !== null)){
        let dot = <span key="8"> ... </span>;
        items.push(dot);
      }
      if ((currentPage - 1 !== 0) && (currentPage - 1 !== 1)) {
        let pElem = (
          <div key="2" className={styles.paginate__btn} onClick={() => handleClick(currentPage - 1)}>
            {parseInt(currentPage - 1).toLocaleString('fa')}
          </div>
        );
        items.push(pElem);
      }
      let currentElem = (
        <div key="3" className={styles.paginate__activeBtn} onClick={() => handleClick(currentPage)}>
          {parseInt(currentPage).toLocaleString('fa')}
        </div>
      );
      items.push(currentElem);
      if (currentPage + 1 < last) {
        let nElem = (
          <div key="4" className={styles.paginate__btn} onClick={() => handleClick(currentPage + 1)}>
            {parseInt(currentPage + 1).toLocaleString('fa')}
          </div>
        );
        items.push(nElem);
      }
      if((currentPage + 1) <= last){
        let dot = <span key="5"> ... </span>;
        items.push(dot);
      }
      if(last && (currentPage + 1) <= last){ 
        let lastBtn = <div key="6" className={styles.paginate__btn} onClick={() => handleClick(last)}>{parseInt(last).toLocaleString('fa')}</div>
        items.push(lastBtn)
      }
      if (currentPage + 1 <= last) {
        let nextElem = (
          <div key="7" className={styles.paginate__btn} onClick={() => handleClick(next)}>
            بعدی
          </div>
        );
        items.push(nextElem);
      }
    }
    console.log("items element = ", items);
    return items;
  }

  useEffect(() => {
    console.log("pages = ", pages);
    if (pages === null) {
      setCurrentPage(1);
    } else if (prev === null && next === null) {
      setCurrentPage(1);
    } else if (prev === null) {
      if (next !== null) {
        setCurrentPage(next - 1);
      }
    } else if (prev !== null) {
      setCurrentPage(prev + 1);
    } else if (next === null && last !== null) {
      setCurrentPage(last);
    }
    // setCurrentPage(10);
    console.log("prev = ", prev);
    console.log("next = ", next);
    console.log("last = ", last);
    console.log("currentPage = ", currentPage);
  }, [pages, prev, next, last]);
  return <div className={styles.paginate}>{renderItems()}</div>;
};

export default Pagination;
