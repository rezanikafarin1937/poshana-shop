import React from "react";

const ArrowDirection = ({ dir = null }) => {
  return (
      <div
        style={dir  ? { transform: `rotate(180deg)` } : ""}
        className="w-[15px] h-[15px] text-white border-t-4 border-r-4 rounded  rotate-45"
      ></div>
  );
};

export default ArrowDirection;
