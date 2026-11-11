"use client";

import Container from "@/components/container/Container";
import CartItem from "@/components/CartItem";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { BaseUrl } from "@/Global/BaseUrl";

interface IProduct {
  id: number;
  price: number | string;
}

interface IDiscount {
  id: number;
  code: string;
  percentage: number | string;
}

const formatPrice = (price: number) =>
  price.toLocaleString("fa-IR");

const Cart = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountMessage, setDiscountMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [discountLoading, setDiscountLoading] = useState(false);

  const { cartItems } = useShoppingCartContext();

  // دریافت محصولات از API
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      try {
        const res = await axios.get(`${BaseUrl}/products`);
        setProducts(res.data.data || []);
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // محاسبه قیمت کل محصولات
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const product = products.find(
        (p) => Number(p.id) === Number(item.id)
      );

      const price = Number(product?.price) || 0;
      const qty = Number(item.qty) || 0;

      return total + price * qty;
    }, 0);
  }, [cartItems, products]);

  // محاسبه مبلغ تخفیف
  const discountedPrice = useMemo(() => {
    return Math.round((totalPrice * discountPercent) / 100);
  }, [totalPrice, discountPercent]);

  // محاسبه مبلغ قابل پرداخت
  const finalPrice = totalPrice - discountedPrice;

  // اعمال کد تخفیف
  const handleSubmitDiscount = async () => {
    const code = discountCode.trim();

    if (!code) {
      setDiscountMessage("لطفاً کد تخفیف را وارد کنید.");
      return;
    }

    setDiscountLoading(true);
    setDiscountMessage("");
    setDiscountPercent(0);

    try {
      const result = await axios.get(`${BaseUrl}/discounts`, {
        params: { code },
      });

      const responseData = result.data.data;

      const discount: IDiscount | undefined =
        Array.isArray(responseData)
          ? responseData[0]
          : responseData;

      if (!discount) {
        setDiscountMessage("کد تخفیف معتبر نیست.");
        return;
      }

      const percentage = Number(discount.percentage);

      if (
        !Number.isFinite(percentage) ||
        percentage <= 0 ||
        percentage > 100
      ) {
        setDiscountMessage("درصد تخفیف نامعتبر است.");
        return;
      }

      setDiscountPercent(percentage);
      setDiscountMessage("کد تخفیف با موفقیت اعمال شد.");
    } catch (error) {
      console.error("خطا در اعمال تخفیف:", error);
      setDiscountMessage("کد تخفیف نامعتبر یا غیرفعال است.");
    } finally {
      setDiscountLoading(false);
    }
  };

  return (
    <Container>
      <div dir="rtl" className="py-6 sm:py-8">

        {/* عنوان صفحه */}
        <h1 className="mb-6 text-xl font-bold text-slate-800 sm:text-2xl">
          سبد خرید شما
        </h1>

        {cartItems.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-slate-500">
              سبد خرید شما خالی است.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">

            {/* لیست محصولات */}
            <div className="space-y-3 lg:col-span-2">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            {/* خلاصه سفارش */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-5">

              <h2 className="mb-5 border-b border-slate-200 pb-4 text-lg font-bold text-slate-800">
                خلاصه سفارش
              </h2>

              {loading ? (
                <p className="py-4 text-sm text-slate-500">
                  در حال محاسبه قیمت...
                </p>
              ) : (
                <>
                  {/* قیمت کل */}
                  <div className="mb-4 flex justify-between gap-2 text-sm">
                    <span className="text-slate-500">
                      قیمت کل محصولات
                    </span>
                    <span className="font-semibold text-slate-800">
                      {formatPrice(totalPrice)} تومان
                    </span>
                  </div>

                  {/* مبلغ تخفیف */}
                  <div className="mb-4 flex justify-between gap-2 text-sm">
                    <span className="text-slate-500">
                      سود شما از این خرید
                    </span>
                    <span className="font-semibold text-emerald-600">
                      {formatPrice(discountedPrice)} تومان
                    </span>
                  </div>

                  {/* کد تخفیف */}
                  <div className="my-5 border-y border-slate-200 py-5">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      کد تخفیف دارید؟
                    </label>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={discountCode}
                        onChange={(e) => {
                          setDiscountCode(e.target.value);
                          setDiscountMessage("");
                          setDiscountPercent(0);
                        }}
                        placeholder="کد تخفیف را وارد کنید"
                        className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                      />

                      <button
                        type="button"
                        onClick={handleSubmitDiscount}
                        disabled={discountLoading}
                        className="shrink-0 rounded-lg bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {discountLoading ? "..." : "اعمال"}
                      </button>
                    </div>

                    {discountMessage && (
                      <p
                        className={`mt-2 text-xs ${
                          discountPercent > 0
                            ? "text-emerald-600"
                            : "text-red-500"
                        }`}
                      >
                        {discountMessage}
                      </p>
                    )}
                  </div>

                  {/* مبلغ نهایی */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-800">
                      مبلغ قابل پرداخت
                    </span>

                    <span className="text-lg font-bold text-amber-700">
                      {formatPrice(finalPrice)} تومان
                    </span>
                  </div>

                  {/* دکمه پرداخت */}
                  <button
                    type="button"
                    disabled={loading || products.length === 0}
                    className="mt-6 w-full rounded-lg bg-amber-600 py-3 font-semibold text-white transition hover:bg-amber-700 disabled:opacity-50"
                  >
                    ادامه و پرداخت
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;






// "use client";
// import Container from "@/components/container/Container";
// import CartItem from "@/components/CartItem";
// import { useShoppingCartContext } from "@/context/ShoppingCartContext";
// import { useEffect, useState } from "react";
// import axios from "axios";
// // import { IProductItemProps } from "@/components/ProductItem";
// import { BaseUrl } from "@/Global/BaseUrl";

// // interface IDiscountData {
// //   id: number;
// //   code: string;
// //   percentage: number;
// // }

// const Cart = () => {
//   const [data, setData] = useState([{}]);
//   // const [data, setData] = useState<any[]>([]);
//   const [discountedPrice, setDiscountedPrice] = useState(() => 0);
//   const [finalPrice, setFinalPrice] = useState(() => 0);
//   useEffect(() => {
//     axios(`${BaseUrl}/products`).then((res) => {
//       const d = res.data.data; // => const {data} = res;
//       setData(d);
//     });
//   }, []);
//   console.log("All Data = ", data);
//   const [discountCode, setDiscountCode] = useState("");
//   const { cartItems } = useShoppingCartContext();

//   function handleSubmitDiscount() {
//     axios(`${BaseUrl}/discounts?code=${discountCode}`).then((result) => {
//       const data =  result.data.data;

//       const price = Number(totalPrice);
//       const percentage = Number(data[0].percentage);
//       const discountedPrice = (price * percentage) / 100;
//       const finalPrice = price - discountedPrice;
//       setDiscountedPrice(discountedPrice);
//       setFinalPrice(finalPrice);
//     });
//   }

//   const totalPrice = cartItems.reduce((total, item) => {
//     const selectProduct = data.find(
//       (product) => product.id == item.id.toString()
//     );

//     console.log("selectProduct = ", selectProduct);
//     return total + (selectProduct?.price || 0) * item.qty;
//   }, 0);
//   return (
//     <Container>
//       <h1 className="text-right my-4 text-2xl font-bold">سبد خرید</h1>
//       <div>
//         {cartItems.map((item) => {
//           console.log("item === ", item);
//           return <CartItem key={item.id} {...item} />;
//         })}
//       </div>
//       <div className="bg-slate-600 shadow-md p-4 mx-auto my-auto" dir="rtl">
//         <h3>قیمت کل</h3>
//         <div className="font-bold text-xl">
//           {totalPrice.toLocaleString("fa")}
//         </div>

//         <h3>سود شما از این خرید</h3>
//         <span>{discountedPrice.toLocaleString("fa")}</span>
//         <h3>مبلغ قابل پرداخت</h3>
//         <span>{finalPrice.toLocaleString("fa")}</span>
//         <input
//           type="text"
//           placeholder="کد تخفیف را وارد کنید"
//           className="text-right border"
//           dir="rtl"
//           onChange={(e) => setDiscountCode(e.target.value)}
//         />
//         <button
//           onClick={handleSubmitDiscount}
//           className="bg-sky-400 text-white px-4 py-1 rounded"
//         >
//           اعمال
//         </button>
//       </div>
//     </Container>
//   );
// };

// export default Cart;
