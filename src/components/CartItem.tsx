import React from "react";
// import CartButton from "./CartButton";

interface ICartsItemProps{
  id : number,
  qty : number
}

const CartItem = ({id,qty} : ICartsItemProps) => {
  return (
    <div className="grid grid-cols-12 mb-4 bg-slate-100">
      <img src="/images/product2.jpg" alt="" className="col-span-3" />
      <div className="col-span-9 p-4" dir="rtl">
        <h2>اسم محصول</h2>
        <p><span>{qty} تعداد :</span></p>
        <p>قیمت محصول</p>
        {/* <CartButton /> */}
      </div>
    </div>
  );
};

export default CartItem;
