"use client";
import { useState, useEffect } from "react";
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
}) => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleClick = (myPage) =>{
    console.log(myPage)
  }

  function renderItems() {
    let items = [];
    console.log("currentPage = ", currentPage);
    if (currentPage) {
      if (prev) {
        let prevElem = (
          <div key="1" className={styles.paginate__btn}>
            قبلی
          </div>
        );
        items.push(prevElem);
      }
      if (currentPage - 1 !== 0) {
        let pElem = (
          <div key="2" className={styles.paginate__btn} onClick={() => handleClick(currentPage)}>
            {currentPage - 1}
          </div>
        );
        items.push(pElem);
      }
      let currentElem = (
        <div key="3" className={styles.paginate__activeBtn}>
          {currentPage}
        </div>
      );
      items.push(currentElem);
      if (currentPage + 1 !== last) {
        let nElem = (
          <div key="4" className={styles.paginate__btn}>
            {currentPage + 1}
          </div>
        );
        items.push(nElem);
      }
      if (next) {
        let nextElem = (
          <div key="5" className={styles.paginate__btn}>
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
