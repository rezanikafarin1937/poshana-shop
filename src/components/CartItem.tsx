"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import CartButton from "./CartButton";

interface ICartsItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartsItemProps) {
  const [data, setData] = useState({} as IProductItemProps);
  useEffect(() => {
    axios(`http://localhost:8000/products/${id}`).then((result) => {
      const data = result.data;
      // or get data => const {data} = result;
      setData(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="grid grid-cols-12 mb-4 bg-slate-100">
      <img src={data.image} alt={data.title} className="col-span-3" />
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
