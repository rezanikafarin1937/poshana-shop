"use client";

import Container from "@/components/container/Container";
import CartItem from "@/components/CartItem";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "@/lib/products";

interface IProduct {
  id: number | string;
  price: number | string;
}

const formatPrice = (price: number) =>
  price.toLocaleString("fa-IR");

const Cart = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountMessage, setDiscountMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const { cartItems } = useShoppingCartContext();

  // دریافت محصولات از فایل JSON
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      try {
        const data = await fetchProducts();
        setProducts(data);
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
        (p) => String(p.id) === String(item.id)
      );

      const price = Number(product?.price) || 0;
      const qty = Number(item.qty) || 0;

      return total + price * qty;
    }, 0);
  }, [cartItems, products]);

  // فعلاً تخفیفی اعمال نمی‌شود تا سرویس اعتبارسنجی متصل شود
  const discountedPrice = 0;
  const finalPrice = totalPrice - discountedPrice;

  // اعتبارسنجی کد تخفیف پس از اتصال سرویس انجام می‌شود
  const handleSubmitDiscount = () => {
    if (!discountCode.trim()) {
      setDiscountMessage("لطفاً کد تخفیف را وارد کنید.");
      return;
    }

    setDiscountMessage(
      "سرویس اعتبارسنجی کد تخفیف هنوز به سایت متصل نشده است."
    );
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
                        }}
                        placeholder="کد تخفیف را وارد کنید"
                        className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                      />

                      <button
                        type="button"
                        onClick={handleSubmitDiscount}
                        className="shrink-0 rounded-lg bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-slate-700"
                      >
                        اعمال
                      </button>
                    </div>

                    {discountMessage && (
                      <p className="mt-2 text-xs text-amber-700">
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
