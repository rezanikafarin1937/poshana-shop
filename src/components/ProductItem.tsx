// ProductItem replace with ItemCard
// این کامپوننت قدیمی شده و نسخه جدید آن کامپوننت ItemCard میباشد
// اما  فعلا آن را حذف نکنید
import React from "react";

export interface IProductItemProps {
  id: string;
  title: string;
  price: number;
  images: [];
  description: string;
}

export interface IProductList {
  first: number | null;
  prev: number | null;
  next: number | null;
  last: number | null;
  pages: number;
  items: number | null;
  data: IProductItemProps[];
}

// // props === item
// const ProductItem = (item: IProductItemProps) => {
//   return (
//     <div className="w-full h-60 bg-gray-200 shadow-md">
//       <img src={`/uploads/${item.images[0]}`} className="w-full h-full object-cover" />
//       <div className="flex justify-between">
//         <p>قیمت محصول : {item.price}</p>
//         <p>عنوان : {item.title}</p>
//         <p className="px-5 py-1 bg-green-700 text-white">{item.id}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductItem;

//*****************

export default function ProductCard(item: IProductItemProps) {
  return (
    <div className="max-w-sm mx-auto rounded-2xl shadow-md  bg-white overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img
          src={`/uploads/${item.images[0]}`}
          alt={item.title}
          className="w-full h-64 sm:h-64 md:h-72 object-cover"
        />
        <span className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 text-xs rounded-full">
          جدید
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{item.description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">
            {item.price.toLocaleString("fa")} تومان
          </span>

          <button className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm hover:bg-gray-800 transition">
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
}
