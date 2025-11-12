import React from "react";


export interface IProductItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

// props === item
const ProductItem = (item : IProductItemProps) => {
  return (

<div className="w-full h-60 bg-gray-200 shadow-md">
      <img src={item.image} className="w-full h-full object-cover"/>
      <div className="flex justify-between">
        <p>قیمت محصول : {item.price}</p>
        <p>عنوان : {item.title}</p>
      </div>
    </div>
  );
};

export default ProductItem;
