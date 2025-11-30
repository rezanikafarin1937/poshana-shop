"use client";
import Container from "@/components/Container";
import CartItem from "@/components/CartItem";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProductItemProps } from "@/components/ProductItem";
import { BaseUrl } from "@/Global/BaseUrl";

interface IDiscountData {
  id: number;
  code: string;
  percentage: number;
}

const Cart = () => {
  const [data, setData] = useState<IProductItemProps[]>([]);
  const [discountedPrice,setDiscountedPrice] = useState(() => 0);
  const [finalPrice,setFinalPrice] = useState(() => 0);
  useEffect(() => {
    axios(`${BaseUrl}/products`).then((res) => {
      const d = res.data; // => const {data} = res;
      setData(d);
    });
  }, []);
  console.log("All Data = ", data);
  const [discountCode, setDiscountCode] = useState("");
  const { cartItems } = useShoppingCartContext();

function handleSubmitDiscount() {
  axios(`${BaseUrl}/discounts?code=${discountCode}`).then(
    (result) => {
      const data = result.data as IDiscountData;

      const price = Number(totalPrice);
      const percentage = Number(data[0].percentage);
      const discountedPrice = price * percentage / 100;
      const finalPrice = price - discountedPrice;
      setDiscountedPrice(discountedPrice);
      setFinalPrice(finalPrice);
    }
  );
}


  const totalPrice = cartItems.reduce((total, item) => {
    const selectProduct = data.find(
      (product) => product.id == item.id.toString()
    );

    console.log("selectProduct = ", selectProduct);
    return total + (selectProduct?.price || 0) * item.qty;
  }, 0);
  return (
    <Container>
      <h1 className="text-right my-4 text-2xl font-bold">سبد خرید</h1>
      <div>
        {cartItems.map((item) => { console.log("item === ",item)
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className="bg-slate-100 shadow-md p-4 mx-auto my-auto" dir="rtl">
        <h3>قیمت کل</h3>
        <div className="font-bold text-xl">
          {totalPrice.toLocaleString("fa")}
        </div>

        <h3>سود شما از این خرید</h3>
        <span>{discountedPrice.toLocaleString('fa')}</span>
        <h3>مبلغ قابل پرداخت</h3>
        <span>{finalPrice.toLocaleString('fa')}</span>
        <input
          type="text"
          placeholder="کد تخفیف را وارد کنید"
          className="text-right border"
          dir="rtl"
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <button
          onClick={handleSubmitDiscount}
          className="bg-sky-400 text-white px-4 py-1 rounded"
        >
          اعمال
        </button>
      </div>
    </Container>
  );
};

export default Cart;
