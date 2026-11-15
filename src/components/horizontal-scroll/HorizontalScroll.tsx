
"use client";

import React, { useRef, useState } from "react";

type Direction = "ltr" | "rtl";

export interface ChildrenProps {
  children: React.ReactNode;
  dir?: Direction;
  gap?: string | null;
}

const HorizontalScroll = ({
  children,
  dir = "rtl",
  gap = null,
}: ChildrenProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const stopDrag = () => {
    setIsDragging(false);
  };

  const childrenArray = React.Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className="overflow-x-scroll no-scrollbar select-none py-8 flex justify-between"
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
        <div
          key={index}
          style={{
            margin: gap ? `0 ${gap}` : "0 .5rem",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
