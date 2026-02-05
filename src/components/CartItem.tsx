"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import CartButton from "./CartButton";
import { BaseUrl } from "@/Global/BaseUrl";

interface ICartsItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartsItemProps) {
  const [data, setData] = useState({} as IProductItemProps);
  useEffect(() => {
    axios(`${BaseUrl}/products/${id}`).then((result) => {
      const data = result.data;
      // or get data => const {data} = result;
      setData(data);
    });
  }, []);
  return (
    <div className="grid grid-cols-12 mb-4 bg-slate-100">
      {/* <img  src={`/uploads/${data.images[0]}`} alt={data.title} className="w-full h-full object-cover" /> */}
      {/* <div>{data.images}</div> */}
      <div className="col-span-9 p-4" dir="rtl">
        <h2>{data.title} : اسم محصول</h2>
        <p>
          <span>{qty} تعداد :</span>
        </p>
        <p className="font-bold text-xl">قیمت : {Number(data.price).toLocaleString('fa')}</p>
        <CartButton id={data.id}/>
      </div>
    </div>
  );
}

export default CartItem;
