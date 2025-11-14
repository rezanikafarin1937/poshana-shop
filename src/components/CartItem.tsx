import React from "react";
import CartButton from "./CartButton";

const CartItem = () => {
  return (
    <div className="grid grid-cols-12 mb-4 bg-slate-100">
      <img src="/images/product2.jpg" alt="" className="col-span-3" />
      <div className="col-span-9 p-4" dir="rtl">
        <h2>اسم محصول</h2>
        <p>تعداد</p>
        <p>قیمت محصول</p>
        <CartButton />
      </div>
    </div>
  );
};

export default CartItem;
