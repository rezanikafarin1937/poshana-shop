import { BaseUrl } from "@/Global/BaseUrl";
import Pagination from "@/utils/pagination/Pagination";
import ItemCard from "@/components/item-card/ItemCard";
import LinkWrapper from "@/components/link-wrapper/LinkWrapper";
import Container from "@/components/container/Container";



async function Feminine({ searchParams }) {
  const page = (await searchParams)?.page ?? "1";
  const per_page = (await searchParams)?.per_page ?? "10";
  const cat="پسرانه";
  const result = await fetch(
    `http://localhost:3000/api/products`
  ,{cache : 'no-store'});
  const items = (await result.json());
  console.log('items = ',items)



  return (
    <Container>
      <h1 className="title text-center my-[2rem]">پسرانه</h1>
        {/* <AllProducts /> */}

      <div
        dir="rtl"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {items.data
          ? items.data.map((item) => (
              <LinkWrapper key={item.id} href={`/store/${item.id}`}>
                <ItemCard {...item} />
              </LinkWrapper>
            ))
          : ""}
      </div>
      <br />
      <Pagination
        per_page={10}
        next={items.next}
        prev={items.prev}
        pages={items.pages}
        last={items.last}
        first={items.first}
        path="boys"
      />
    </Container>
  );
}

export default Feminine;



// 'use client';

// import { useState, useEffect } from 'react';
// import Pagination from "@/utils/pagination/Pagination";
// import ItemCard from "@/components/item-card/ItemCard";
// import LinkWrapper from "@/components/link-wrapper/LinkWrapper";



// const Products = () => {
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // ارسال درخواست به API Route
//         const response = await fetch('http://localhost:3000/api/products');
//         const data = await response.json();
//         console.log('DDDDTTTTAAAA = ',data);

//         if (response.ok) {
//           setItems(() => data.data);
//         } else {
//           setError(data.error);
//         }
//       } catch (err) {
//         setError('خطا در بارگذاری داده‌ها');
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>محصولات</h1>
//       <div
//         dir="rtl"
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
//       >
//         {items
//           ? items.map((item) => (
//               <LinkWrapper key={item.id} href={`/store/${item.id}`}>
//                 <ItemCard {...item} />
//               </LinkWrapper>
//             ))
//           : ""}
//       </div>
//       <Pagination
//         per_page={10}
//         next={items.next}
//         prev={items.prev}
//         pages={items.pages}
//         last={items.last}
//         first={items.first}
//         path="boys"
//       />
      
//     </div>
//   );
// };

// export default Products;



// // import React from 'react';

// // // این تابع به صورت server-side اجرا می‌شود و داده‌ها را از API می‌گیرد
// // const AllProducts = async () => {
// //   try {
// //     // درخواست به API Route ساخته شده برای گرفتن داده‌ها
// //     const res = await fetch('http://localhost:3000/api/products');  // توجه کنید که باید آدرس صحیح API را در محیط تولید استفاده کنید
// //     const data = await res.json();
// //     console.log('Datatt = ',data)

// //     if (!res.ok) {
// //       throw new Error(data.error || 'خطا در بارگذاری داده‌ها');
// //     }

// //     return (
// //       <div>
// //         <h1>محصولات</h1>
// //         <ul>
// //           {data.map((product, index) => (
// //             <li key={index}>{product.title}</li> // فرض کنید هر محصول دارای خاصیت `name` است
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   } catch (error) {
// //     return <div>{error.message}</div>;
// //   }
// // };

// // export default AllProducts;
