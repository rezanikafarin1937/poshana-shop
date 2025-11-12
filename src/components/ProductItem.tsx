import React from "react";

export interface IProductItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductItem = ({title,price,image} : IProductItemProps) => {
  console.log('image = ',image);
  return (
    <div className="">
      <img src={image} />
      <div className="flex justify-between">
        <p>قیمت محصول : {price}</p>
        <p>عنوان : {title}</p>
      </div>
    </div>
  );
};

export default ProductItem;
