
"use client";

import React, { useRef, useState } from "react";
import ArrowButtom from "@/components/arrow-buttom/ArrowButtom";

type Direction = "ltr" | "rtl";

export interface ChildrenProps {
  children: React.ReactNode;
  dir?: Direction;
}

const Slider = ({
  children,
  dir = "rtl",
}: ChildrenProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const childrenArray = React.Children.toArray(children);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);

    const clientX =
      e.type === "mousedown"
        ? (e as React.MouseEvent).clientX
        : (e as React.TouchEvent).touches[0].clientX;

    setStartX(clientX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

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
        className="overflow-x-auto no-scrollbar select-none py-4 flex justify-start gap-4"
        onMouseDown={startDrag}
        onMouseMove={drag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={startDrag}
        onTouchMove={drag}
        onTouchEnd={stopDrag}
        style={{
          direction: dir,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {childrenArray.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>

      <div
        className="absolute top-0 right-0 w-[50px] h-full hover:cursor-pointer"
        onClick={scrollRightHandler}
      >
        <ArrowButtom />
      </div>
    </div>
  );
};

export default Slider;
