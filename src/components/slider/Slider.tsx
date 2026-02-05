"use client";
import React from "react";
import { useRef, useState } from "react";
import ArrowButtom from "@/components/arrow-buttom/ArrowButtom";

type Direction = "ltr" | "rtl";
export interface ChildrenProps {
  children: React.ReactNode;
  dir?: Direction;
}
// {children} : ChildrenProps

const Slider = ({ children, dir = "rtl"}: ChildrenProps) => {
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

  const scrollRightHandler = () => {
    containerRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  const scrollLeftHandler = () => {
    containerRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  // برای پایان کشیدن موس
  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-[50px] h-full hover:cursor-pointer"
        onClick={scrollLeftHandler}
      >
        <ArrowButtom left={true} />
      </div>
      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar  select-none py-4 flex justify-start gap-4" // اضافه کردن overflow-x-auto برای اسکرول مخفی
        onMouseDown={startDrag}
        onMouseMove={drag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag} // اگر موس از محدوده خارج شود
        onTouchStart={startDrag} // پشتیبانی از تاچ موبایل
        onTouchMove={drag}
        onTouchEnd={stopDrag}
        style={{ direction: dir, cursor: isDragging ? "grabbing" : "grab" }}
      >
        {children?.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
      <div
        className="absolute top-0 right-0 w-[50px] h-full  hover:cursor-pointer"
        onClick={scrollRightHandler}
      >
        <ArrowButtom />
      </div>
    </div>
  );
};

export default Slider;