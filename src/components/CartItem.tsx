"use client";

import { useEffect, useState } from "react";
import type { IProductItemProps } from "./ProductItem";
import CartButton from "./CartButton";
import { fetchProducts } from "@/lib/products";
import { publicPath } from "@/utils/path";

interface ICartsItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartsItemProps) {
  const [data, setData] = useState<IProductItemProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const products = await fetchProducts();

        const product = products.find(
          (item: IProductItemProps) => String(item.id) === String(id),
        );

        setData(product || null);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات محصول:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return <div className="mb-4 h-32 animate-pulse rounded-xl bg-slate-100" />;
  }

  if (!data) return null;

  return (
    <div
      dir="rtl"
      className="mb-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md sm:gap-5 sm:p-4"
    >
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-32 sm:w-32">
        <img
          src={
            data.images?.[0]
              ? publicPath(`/uploads/${data.images[0]}`)
              : publicPath("/no-image.png")
          }
          alt={data.title || "تصویر محصول"}
          className="h-full w-full object-cover"
        />{" "}
      </div>

      <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
        <h2 className="truncate text-sm font-bold text-slate-800 sm:text-lg">
          {data.title}
        </h2>

        <p className="text-xs text-slate-500 sm:text-sm">
          تعداد:
          <span className="mr-2 font-semibold text-slate-700">{qty}</span>
        </p>

        <p className="text-sm font-bold text-slate-800 sm:text-lg">
          قیمت:
          <span className="mr-2 text-amber-700">
            {Number(data.price).toLocaleString("fa-IR")}
          </span>
          <span className="text-xs font-normal text-slate-500">تومان</span>
        </p>

        <div className="pt-1">
          <CartButton id={data.id} />
        </div>
      </div>
    </div>
  );
}
export default CartItem;

// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import type { IProductItemProps } from "./ProductItem";
// import CartButton from "./CartButton";
// import { BaseUrl } from "@/Global/BaseUrl";

// interface ICartsItemProps {
//   id: number;
//   qty: number;
// }

// function CartItem({ id, qty }: ICartsItemProps) {
//   const [data, setData] = useState<IProductItemProps | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const result = await axios.get(`${BaseUrl}/products/${id}`);
//         setData(result.data);
//       } catch (error) {
//         console.error("خطا در دریافت اطلاعات محصول:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProduct();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="mb-4 h-32 animate-pulse rounded-xl bg-slate-100" />
//     );
//   }

//   if (!data) return null;

//   return (
//     <div
//       dir="rtl"
//       className="mb-4 flex items-center gap-3 sm:gap-5 rounded-xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm transition hover:shadow-md"
//     >
//       {/* تصویر محصول */}
//       <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-32 sm:w-32">
//         <img
//           src={
//             data.images?.[0]
//               ? `/uploads/${data.images[0]}`
//               : "/no-image.png"
//           }
//           alt={data.title || "تصویر محصول"}
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* اطلاعات محصول */}
//       <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
//         <h2 className="truncate text-sm font-bold text-slate-800 sm:text-lg">
//           {data.title}
//         </h2>

//         <p className="text-xs text-slate-500 sm:text-sm">
//           تعداد:
//           <span className="mr-2 font-semibold text-slate-700">
//             {qty}
//           </span>
//         </p>

//         <p className="text-sm font-bold text-slate-800 sm:text-lg">
//           قیمت:
//           <span className="mr-2 text-amber-700">
//             {Number(data.price).toLocaleString("fa-IR")}
//           </span>
//           <span className="text-xs font-normal text-slate-500">
//             تومان
//           </span>
//         </p>

//         <div className="pt-1">
//           <CartButton id={data.id} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartItem;

// // "use client";
// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { IProductItemProps } from "./ProductItem";
// // import CartButton from "./CartButton";
// // import { BaseUrl } from "@/Global/BaseUrl";

// // interface ICartsItemProps {
// //   id: number;
// //   qty: number;
// // }

// // function CartItem({ id, qty }: ICartsItemProps) {
// //   const [data, setData] = useState({} as IProductItemProps);
// //   useEffect(() => {
// //     axios(`${BaseUrl}/products/${id}`).then((result) => {
// //       const data = result.data;
// //       // or get data => const {data} = result;
// //       setData(data);
// //     });
// //   }, []);
// //   return (
// //     <div className="grid grid-cols-12 mb-4 bg-slate-100">
// //       <img
// //         src={data.images?.[0] ? `/uploads/${data.images[0]}` : "/no-image.png"}
// //         alt={data.title || "تصویر محصول"}
// //         className="w-full h-full object-cover"
// //       />

// //       <div className="col-span-9 p-4" dir="rtl">
// //         <h2>{data.title} : اسم محصول</h2>
// //         <p>
// //           <span>{qty} تعداد :</span>
// //         </p>
// //         <p className="font-bold text-xl">
// //           قیمت : {Number(data.price).toLocaleString("fa")}
// //         </p>
// //         <CartButton id={data.id} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default CartItem;
