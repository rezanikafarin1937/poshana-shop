import React from "react";
import Container from "@/components/Container";
import CartItem from "@/components/CartItem";
const Cart = () => {
  return (
    <Container>
      <h1 className="text-right my-4 text-2xl font-bold">سبد خرید</h1>
      <div className="">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="bg-slate-100 shadow-md p-4 mx-auto my-auto" dir="rtl">
        <h3>قیمت کل</h3>
        <h3>سود شما از این خرید</h3>
        <h3>مبلغ قابل پرداخت</h3>
        <input type="text" placeholder="کد تخفیف را وارد کنید" className="text-right border" dir="rtl" />
        <button className="bg-sky-400 text-white px-4 py-1 rounded">اعمال</button>
      </div>
    </Container>
  );
};

export default Cart;
