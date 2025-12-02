"use client";
import React from "react";
import { useRef, useState } from "react";

export interface ChildrenProps {
  children: React.ReactNode;
}
// {children} : ChildrenProps

const HorizontalScroll = ({children} : ChildrenProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null); // برای نگهداری مرجع والد
  const [isDragging, setIsDragging] = useState(false); // وضعیت درگ
  const [startX, setStartX] = useState(0); // موقعیت شروع درگ
  const [scrollLeft, setScrollLeft] = useState(0); // موقعیت اسکرول

  // برای شروع کشیدن موس
  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX =
      e.type === "mousedown"
        ? (e as React.MouseEvent).clientX
        : (e as React.TouchEvent).touches[0].clientX;
    setStartX(clientX);
    setScrollLeft(containerRef.current?.scrollLeft || 0); // ذخیره اسکرول اولیه
  };

  // در زمان کشیدن موس (move)
  const drag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX =
      e.type === "mousemove"
        ? (e as React.MouseEvent).clientX
        : (e as React.TouchEvent).touches[0].clientX;
    const distance = clientX - startX;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - distance;
    }
  };

  // برای پایان کشیدن موس
  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="overflow-x-scroll no-scrollbar  select-none p-8 flex gap-4" // اضافه کردن overflow-x-auto برای اسکرول مخفی
      onMouseDown={startDrag}
      onMouseMove={drag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag} // اگر موس از محدوده خارج شود
      onTouchStart={startDrag} // پشتیبانی از تاچ موبایل
      onTouchMove={drag}
      onTouchEnd={stopDrag}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      {/* آیتم‌ها */}
      {/* {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="select-none w-40 h-40 bg-blue-300 flex items-center justify-center text-white rounded"
        >
          Item {index + 1}
        </div>
      ))} */}

      {children.map((child,index) => (
            <div key={index}>{child}</div>
        ))}
    </div>
  );
};

export default HorizontalScroll;
